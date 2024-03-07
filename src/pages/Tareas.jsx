import React from 'react'
import FromCreateTarea from '../components/FromCreateTarea'
import ListaTareas from '../components/ListaTareas'

const Tareas = ({listaTareas, setListaTareas}) => {
  return (
    <div className=' flex justify-center items-center'>
    <FromCreateTarea listaTareas={listaTareas} setListaTareas={setListaTareas}/>
  
    </div>
       

  )
}

export default Tareas