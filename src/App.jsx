import { useState } from "react";
import "./App.css";
import Tareas from "./pages/Tareas";
import { AuthFunction } from "./context/authContext.jsx";

import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <AuthFunction>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Tareas />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthFunction>
  );
}

export default App;
