import { Auth } from "@/context/authContext";
import { useContext } from "react";

export const useCreateUser = () => {
    
  const  setCurrentUserDb  = useContext(Auth);
  const createUserFn = (data) => {
    console.log(data, "Data enviada a backend");

    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json().then((user) => {
            setCurrentUserDb(user);
            console.log(user, "Usuario creado con éxito");
          });
        } else {
          console.error("Error en la respuesta del servidor", response.status);
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
      })
      .catch((error) => {
        console.error("Error al hacer la solicitud", error);
      });
  };
  return createUserFn;
};
