import { useState } from "react"
import styles from "./Logeo.module.css";

export const LoginForm = ({ onSignIn }) => {


    const [usuario, setUsuario] = useState(0)
    const [contraseña, setContraseña] = useState(0)

    const tomarUsuario = (evt) => {
        setUsuario(evt.target.value)
    }

    const tomarContraseña = (evt) => {
        setContraseña(evt.target.value)
    }

    const pruebaDeTomaDeDatos = () => {
        console.log('Tu usuario es: ' + usuario + ' y tu contraseña es: ' + contraseña)
    }

    return (
        <>
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
                    <button className={styles.signInButton}
                        type="button"
                        onClick={onSignIn}>
                        Sign In
                    </button>
                    <button
                        className={styles.logInButton}
                        onClick={() => pruebaDeTomaDeDatos()}>
                        Log In
                    </button>
                </div>
            </div>
        </>
    )
}
