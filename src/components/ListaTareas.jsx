import React from "react";
import TareaCard from "./TareaCard";

const ListaTareas = ({ listaTareas }) => {
  return (
    <div className="flex  justify-center items-center flex-wrap"> 
    
      {listaTareas.map((tarea, i) => (
        <TareaCard
        tarea={tarea}
          key={i} 
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
