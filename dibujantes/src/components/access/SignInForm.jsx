import { useState, useEffect } from "react"
import styles from "./Logeo.module.css";
import "../../bootstrap-css/bootstrap.min.css"
import { Link, useNavigate } from "react-router-dom";
import logo from "../../7T.png";

export const SignInForm = () => {
    const [usuario, setUsuario] = useState('')
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [cContraseña, setCContraseña] = useState('')
    const Nav = useNavigate()
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        console.log(JSON.stringify(usuarios));
      }, [usuarios]);

    const tomarUsuario = (evt) => {
        setUsuario(evt.target.value)
    }

    const tomarCorreo = (evt) => {
        setCorreo(evt.target.value)
    }

    const tomarContraseña = (evt) => {
        setContraseña(evt.target.value)
    }

    const tomarCContraseña = (evt) => {
        setCContraseña(evt.target.value)
    }

    

    const handleRegistro = (e) => {
        e.preventDefault()
        if (contraseña === cContraseña) {
            const nuevoUsuario = {
                usuario: usuario,
                correo: correo,
                contraseña: contraseña
            }
            setUsuarios(usuarios.concat(nuevoUsuario))
            //Nav("/");
        } else {
            alert('Las contraseñas no son la misma')
        }
    }
      
    return (
        <>
            <div className={styles.loginFormContainer}>
                <img src={logo} alt="logo" className={styles.logo} />
                <form onSubmit={(evt) => handleRegistro(evt)}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Nombre de usuario"
                        onChange={(evt) => tomarUsuario(evt)}
                        value={usuario}
                        required
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Correo electronico"
                        onChange={(evt) => tomarCorreo(evt)}
                        value={correo}
                        required
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Contraseña"
                        onChange={(evt) => tomarContraseña(evt)}
                        value={contraseña}
                        required
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Confirmar Contraseña"
                        onChange={(evt) => tomarCContraseña(evt)}
                        value={cContraseña}
                        required
                    />
                    <div>
                        <button className={styles.signInButton} type="submit" onClick={(e) => handleRegistro(e)}>Registrarse</button>
                        <Link to="/">
                            <button className={styles.signInButton} type="button">Volver</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}