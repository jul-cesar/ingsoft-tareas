import React, { useContext } from "react";

import { CardTarea } from "@/demo/CardTarea";

const ListaTareas = ({ listaTareas }) => {
  return (
    <div className="flex items-center  justify-center m-4 gap-4  flex-wrap">
      {Array.isArray(listaTareas) &&
        listaTareas.map((tarea, i) => (
          <CardTarea
          tareaInfo={tarea}
            fechaCreacion={tarea.fechaCreacion}
            tarea={tarea}
            key={i}
            titulo={tarea.titulo}
            descripcion={tarea.description}
            prioridad={tarea.prioridad}
            fecha={tarea.fechaVencimiento}
            estado={tarea.estado}
          />
        ))}
    </div>
  );
};

export default ListaTareas;
