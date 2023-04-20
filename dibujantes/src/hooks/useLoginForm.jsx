import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginData } from "../components/fake-data/loginData";

function useLoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const Nav = useNavigate();
  const [credencialesInvalidas, setCredencialesInvalidas] = useState(false);

  const tomarUsuario = (evt) => {
    setUsuario(evt.target.value)
  }

  const tomarContraseña = (evt) => {
    setContraseña(evt.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const usuarioEncontrado = loginData.find(
      (u) => u.usuario === usuario && u.contraseña === contraseña
    );
    if (usuarioEncontrado) {
      Nav("/home");
    } else {
      setCredencialesInvalidas(true);
    }
  };

  return {
    usuario,
    contraseña,
    tomarUsuario,
    tomarContraseña,
    handleLogin,
    credencialesInvalidas,
  };
}

export default useLoginForm;

