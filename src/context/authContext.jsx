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
import { auth } from "@/auth-frb/firebase";
import { useNavigate } from "react-router-dom";
import { createUserFn } from "@/api/createUser";

export const Auth = createContext();

export const AuthFunction = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
   
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithRedirect(auth, provider);
    return response;
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setCurrentUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Auth.Provider
      value={{ createUser, logIn, logOut, currentUser, googleAuth }}
    >
      {children}
    </Auth.Provider>
  );
};
