import React, { useState } from "react";
import { toast } from "sonner";

const TareaCard = ({ titulo, descripcion, fecha, prioridad, estado, tarea }) => {
  const [mostrarAsignar, setMostrarAsignar] = useState(false);

  const toggleAsignar = () => setMostrarAsignar(!mostrarAsignar);

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
      <div className="mb-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {titulo}
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {descripcion}
      </p>
      <div className="mb-3">
        <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {fecha}
        </span>
        <span className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {prioridad}
        </span>
        <span className="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {estado}
        </span>
      </div>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={toggleAsignar}
      >
        Asignar Usuario
      </button>
      {mostrarAsignar && (
        <div className="mt-4">
          <select
            name="prioridad"
            id="prioridad"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option selected="">Selecciona un usuario</option>
            <option value="alta">User 1</option>
            <option value="media">User 2</option>
            <option value="baja">User 3</option>
          </select>
          <button onClick={()=>{toast.success("Usuario asignado")}} className="px-4 py-2 font-bold text-white bg-blue-500 rounded m-4 hover:bg-blue-700">
            Asignar
          </button>
        </div>
      )}
    </div>
  );
};

export default TareaCard;
