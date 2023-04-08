import { useState } from "react"
import styles from "./Logeo.module.css";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    const [usuario, setUsuario] = useState(0)
    const [contraseña, setContraseña] = useState(0)

    const tomarUsuario = (evt) => {
        setUsuario(evt.target.value)
    }

    const tomarContraseña = (evt) => {
        setContraseña(evt.target.value)
    }


    return (
        <>
        <body>
        <div className={styles.loginFormContainer}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Usuario: </label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter username"
                        onChange={(evt) => tomarUsuario(evt)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Contraseña: </label>
                    <input className={styles.input}
                        type="password"
                        placeholder="Enter password"
                        onChange={(evt) => tomarContraseña(evt)}
                    />
                </div>
                <div className={styles.buttonsContainer}>
                    <Link to="/register">
                        <button
                            className={styles.signInButton}
                            type="button" >
                            Registro
                        </button>
                    </Link>
                    <Link to="/home">
                        <button
                            className={styles.logInButton}
                            type="button">
                            Iniciar Sesión
                        </button>
                    </Link>
                </div>
            </div>
        </body>
            
        </>
    )
}
