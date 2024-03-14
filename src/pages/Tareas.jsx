import React, { useContext } from "react";
import TareasManagement from "../components/TareasManagement";
import ListaTareas from "../components/ListaTareas";
import Navbar from "@/components/Navbar";

import { Auth } from "@/context/authContext";
import { useQuery } from "@tanstack/react-query";
import useGetUserTareas from "@/api/useGetUserTareas";

const Tareas = () => {
  const { currentUser } = useContext(Auth);
  const id = currentUser.uid;

  const getUserTareas = useGetUserTareas();

  const { data: listaTareas } = useQuery({
    queryKey: ["listaTasks", id],
    queryFn: async () => getUserTareas(id),
    enabled: !!id,
  });

  console.log(listaTareas);

  return (
    <div className="h-screen w-full">
      <Navbar />
      <TareasManagement />
      <div className="text-center m-4">
        <h2 className="font-bold">
          Hola! {currentUser?.displayName || currentUser?.email?.split("@")[0]}
        </h2>
      </div>

      <ListaTareas listaTareas={listaTareas} />
    </div>
  );
};

export default Tareas;
