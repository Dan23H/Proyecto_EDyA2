import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignIn, Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;

