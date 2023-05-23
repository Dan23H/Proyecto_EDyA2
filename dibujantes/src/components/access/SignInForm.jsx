import { Link } from "react-router-dom";
import {useSignInForm} from "../../hooks";
import logo from "../../assets/7T.png";
import styles from "./Logeo.module.css";
import "../../bootstrap-css/bootstrap.min.css";

export const SignInForm = () => {
  const {handleChange, handleSubmit, error} = useSignInForm();

  return (
    <>
      <div className={styles.loginFormContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="Correo electronico"
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
          />
          <div >
            { error && <span className="colorful">{error}</span>}
          </div>
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
