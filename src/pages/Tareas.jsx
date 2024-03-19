import React, { useContext, useState } from "react";
import TareasManagement from "../components/TareasManagement";
import ListaTareas from "../components/ListaTareas";
import Navbar from "@/components/Navbar";

import { Auth } from "@/context/authContext";
import { useQuery } from "@tanstack/react-query";
import useGetUserTareas from "@/api/useGetUserTareas";
import Tabs from "@/components/Tabs";
import TareasAsignadas from "./TareasAsignadas";
import { getTareasAsignadas } from "@/api/getTareasAsignadas";

const Tareas = () => {
  const { currentUser } = useContext(Auth);
  const id = currentUser.uid;

  const getUserTareas = useGetUserTareas();
  const [showTareas, setShowTareas] = useState(true)

  const { data: listaTareas, isLoading } = useQuery({
    queryKey: ["listaTasks", id],
    queryFn: async () => getUserTareas(id),
    enabled: !!id,
  });

  const { data: listaTareasAsignadas, isLoading: loadingAsign } = useQuery({
    queryKey: ["listaAsign", id],
    queryFn: async () => getTareasAsignadas(id),
    enabled: !!id,
  });



  return (
    <div className="h-full w-full">
      <Navbar />
      <Tabs setShowTareas={setShowTareas} showTareas={showTareas} />
      <div className="text-center m-4">
        <h2 className="font-bold">
          Bienvenido, {currentUser?.displayName || currentUser?.email?.split("@")[0]}.
        </h2>
      </div>
      {showTareas ? <ListaTareas listaTareas={listaTareas} isLoading={isLoading} /> : <TareasAsignadas isLoading={loadingAsign} listaTareasAsignadas={listaTareasAsignadas} />}
    </div>
  );
};

export default Tareas;
