import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useCreateUser } from "@/api/useCreateUser";
import { getUserWithEmail } from "@/api/getUserWithEmail";
import { auth } from "@/auth-frb/firebase";
import { updateUser } from "@/api/updateUser";

export const Auth = createContext();

export const AuthFunction = ({ children }) => {
  const createUserFn = useCreateUser();

  const [currentUser, setCurrentUser] = useState({});
  const [currentUserDb, setCurrentUserDb] = useState({});

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  };

  const googleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider).catch((error) =>
      alert(error.message)
    );
    return response;
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
        console.log(currentUser)
      } else {
        setCurrentUser(null);
      }
      const userExist = await getUserWithEmail(currentUser?.email);

      if (!userExist && currentUser) {
        createUserFn({
          id: currentUser?.uid,
          nombre: currentUser?.displayName || currentUser?.email?.split("@")[0],
          email: currentUser?.email,
          photoURL: currentUser?.photoURL
        });
      } else if (userExist.photoURL === null) {
        await updateUser(userExist.id, { photoURL: currentUser.photoURL })
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Auth.Provider
      value={{
        createUser,
        logIn,
        logOut,
        currentUser,
        googleAuth,
        currentUserDb,
        setCurrentUserDb,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
