import { useState } from "react";
import "./App.css";
import Tareas from "./pages/Tareas";
import { AuthFunction } from "./context/authContext.jsx";

import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  const [tareasList, setTareasList] = useState([]);

  return (
    <AuthFunction>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Tareas listaTareas={tareasList} setListaTareas={setTareasList} />
          }
        />
      </Routes>
    </AuthFunction>
  );
}

export default App;
