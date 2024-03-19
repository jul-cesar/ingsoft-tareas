import React, { useContext } from "react";

import CardTarea from "@/demo/CardTarea";
import TareasManagement from "./TareasManagement";
import { Skeleton } from "./ui/skeleton";
import { SkeletonDemo } from "@/demo/CardSkeleton";


const ListaTareas = ({ listaTareas, isLoading }) => {
  return (
    <div className="flex justify-center m-4 gap-4  flex-wrap">
      <TareasManagement />
      {(!isLoading && Array.isArray(listaTareas)) ?
        listaTareas.map((tarea, i) => (
          <CardTarea
            key={tarea.id}
            tareaInfo={tarea}
            fechaCreacion={tarea.fechaCreacion}
            createdAt={tarea.createdAt}
            titulo={tarea.titulo}
            descripcion={tarea.descripcion}
            prioridad={tarea.prioridad}
            fecha={tarea.fechaVencimiento}
            estado={tarea.estado}
            owner={tarea.owner.nombre}
            asignado={tarea.asignado?.nombre}
          />
        ))
        :

        <SkeletonDemo  />


      }
    </div>
  );
};

export default ListaTareas;
