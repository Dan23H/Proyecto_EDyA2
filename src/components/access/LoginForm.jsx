import { useState } from "react"
import styles from "./Logeo.module.css";
import { Link } from "react-router-dom";
import logo from "../../7T.png";

export const LoginForm = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

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
                        <img src={logo} alt="logo" className={styles.logo} />
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Ingrese su nombre de usuario"
                            onChange={(evt) => tomarUsuario(evt)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input className={styles.input}
                            type="password"
                            placeholder="Ingrese su contraseña"
                            onChange={(evt) => tomarContraseña(evt)}
                        />
                    </div>
                    <div className={styles.buttonsContainer}>
                        <Link to="/home">
                            <button
                                className={styles.logInButton}
                                type="button">
                                Acceder
                            </button>
                        </Link>
                        <Link to="/register">
                            <button
                                className={styles.signInButton}
                                type="button" >
                                Registro
                            </button>
                        </Link>

                    </div>
                </div>
            </body>

        </>
    )
}
