import React from 'react'
import TareasManagement from '../components/TareasManagement'


const Tareas = ({ listaTareas, setListaTareas }) => {
  return (
    <div className="flex flex-row h-full  justify-center " >
      <TareasManagement listaTareas={listaTareas} setListaTareas={setListaTareas} />

    </div>


  )
}

export default Tareas