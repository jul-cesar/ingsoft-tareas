import React, { useContext } from "react";
import TareasManagement from "../components/TareasManagement";
import ListaTareas from "../components/ListaTareas";
import Navbar from "@/components/Navbar";
import { Label } from "@radix-ui/react-label";
import { Auth } from "@/context/authContext";

const Tareas = ({ listaTareas, setListaTareas }) => {
  const { currentUser } = useContext(Auth);

  return (
    <div className="h-screen w-full">
      <Navbar />

      <TareasManagement
        listaTareas={listaTareas}
        setListaTareas={setListaTareas}
      />

      <div className="text-center m-4">
        <h2 className="font-bold">Hola!, {currentUser?.displayName}</h2>
      </div>

     

      <ListaTareas listaTareas={listaTareas} />
    </div>
  );
};

export default Tareas;
