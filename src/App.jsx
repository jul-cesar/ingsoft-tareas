import { useState } from 'react'
import './App.css'
import Tareas from './pages/Tareas'
import { ToastContainer, toast } from 'react-toastify';
import ListaTareas from './components/ListaTareas';

function App() {
  
  const [count, setCount] = useState(0)
  const [tareasList, setTareasList] = useState([]);

  return (
    <>
      <Tareas listaTareas={tareasList} setListaTareas={setTareasList}/>
      <ToastContainer  />
      <h1 className='text-pretty text-4xl m-4'>Lista tareas</h1>
      <ListaTareas listaTareas={tareasList}/>

    </>
  )
}

export default App
