import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignIn, Home, Mensajes } from "./pages";
import { SubirImagen } from "./pages/SubirImagen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mensajeria" element={<Mensajes />} />
      <Route path="/subir-imagen" element={<SubirImagen />} />
      
    </Routes>
  );
};

export default App;