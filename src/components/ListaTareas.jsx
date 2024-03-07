import React from "react";
import TareaCard from "./TareaCard";

const ListaTareas = ({ listaTareas }) => {
  return (
    <div className="flex  justify-center items-center"> 
    
      {listaTareas.map((tarea) => (
        <TareaCard
        tarea={tarea}
          key={tarea.id} 
          titulo={tarea.titulo}
          descripcion={tarea.description} 
          prioridad={tarea.prioridad}
          fecha={tarea.fecha}
          estado={tarea.estado}
        />
      ))}
    </div>
  );
};

export default ListaTareas;
