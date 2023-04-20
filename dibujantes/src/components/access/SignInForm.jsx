import { Link } from "react-router-dom";
import useSignInForm from "../../hooks/useSignInForm";
import logo from "../../7T.png";
import styles from "./Logeo.module.css";
import "../../bootstrap-css/bootstrap.min.css";

export const SignInForm = () => {
  const {
    usuario,
    correo,
    contraseña,
    cContraseña,
    tomarUsuario,
    tomarCorreo,
    tomarContraseña,
    tomarCContraseña,
    handleRegistro,
    errorContraseña,
  } = useSignInForm();

  return (
    <>
      <div className={styles.loginFormContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <form onSubmit={handleRegistro}>
          <input
            className={styles.input}
            type="text"
            placeholder="Nombre de usuario"
            onChange={tomarUsuario}
            value={usuario}
            required
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Correo electronico"
            onChange={tomarCorreo}
            value={correo}
            required
          />
          <input
            className={`${styles.input} ${
              errorContraseña && styles.inputError
            }`}
            type="password"
            placeholder="Contraseña"
            onChange={tomarContraseña}
            value={contraseña}
            required
          />
          <input
            className={`${styles.input} ${
              errorContraseña && styles.inputError
            }`}
            type="password"
            placeholder="Confirmar Contraseña"
            onChange={tomarCContraseña}
            value={cContraseña}
            required
          />
          <div>
            <button className={styles.signInButton} type="submit">
              Registrarse
            </button>
            <Link to="/">
              <button className={styles.signInButton} type="button">
                Volver
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
