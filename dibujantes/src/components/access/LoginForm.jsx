
import styles from './Logeo.module.css';
import logo from '../../assets/7T.png';
import { Link } from 'react-router-dom';
import { useLoginForm } from '../../hooks';

export const LoginForm = () => {
  const {handleChange, handleSubmit, error} = useLoginForm();

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
              Iniciar Sesión
            </button>
            <Link to="/register">
              <button className={styles.signInButton} type="button">
                Registrarse
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};


