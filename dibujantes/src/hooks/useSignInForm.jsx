import { useState } from "react";
import { useAuth } from "./useAuth";

export function useSignInForm() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  });
  const { registro } = useAuth()
  const handleChange = ({target: {name, value}}) => {
    setUsuario({...usuario, [name]:value})
    console.log(usuario)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registro(usuario.email, usuario.password)
  };

  return {
    handleChange,
    handleSubmit
  };
}

//   const [usuario, setUsuario] = useState("");
//   const [correo, setCorreo] = useState("");
//   const [contraseña, setContraseña] = useState("");
//   const [cContraseña, setCContraseña] = useState("");
//   const [usuarios, setUsuarios] = useState([]);
//   const [error, setError] = useState("");

//   const tomarUsuario = (evt) => {
//     setUsuario(evt.target.value);
//   };

//   const tomarCorreo = (evt) => {
//     setCorreo(evt.target.value);
//   };

//   const tomarContraseña = (evt) => {
//     setContraseña(evt.target.value);
//   };

//   const tomarCContraseña = (evt) => {
//     setCContraseña(evt.target.value);
//   };

//   const handleRegistro = (e) => {
//     e.preventDefault();
//     if (contraseña === cContraseña) {
//       const nuevoUsuario = {
//         usuario: usuario,
//         correo: correo,
//         contraseña: contraseña,
//       };
//       setUsuarios(usuarios.concat(nuevoUsuario));
//       console.log(JSON.stringify(usuarios)); //¿Cómo mostrarlo en la consola?
//     } else {
//       setError("Las contraseñas no son la misma");
//     }
//   };

//   return {
//     usuario,
//     correo,
//     contraseña,
//     cContraseña,
//     tomarUsuario,
//     tomarCorreo,
//     tomarContraseña,
//     tomarCContraseña,
//     handleRegistro,
//     usuarios,
//     error,
//   };
// }
