import { Auth } from "@/context/authContext";
import React, { useContext } from "react";

const useGetUserTareas = () => {
  const { currentUser } = useContext(Auth);
  const getUserTareas = async (uid) => {
    if (!currentUser) {
      console.error("Usuario actual no definido");
      return null;
    }
    console.log(uid, "xdddd");
    const response = await fetch(`http://localhost:3001/${uid}`);
    const data = await response.json();
    return data;
  };

  return getUserTareas;
};

export default useGetUserTareas;
