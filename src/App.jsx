import { useState } from 'react'
import './App.css'
import Tareas from './pages/Tareas'
import ListaTareas from './components/ListaTareas';
import Navbar from './components/Navbar';

function App() {

  const [count, setCount] = useState(0)
  const [tareasList, setTareasList] = useState([]);

  return (
    <>
      <Navbar />
      <Tareas listaTareas={tareasList} setListaTareas={setTareasList} />
      <ListaTareas listaTareas={tareasList} />

    </>
  )
}

export default App
