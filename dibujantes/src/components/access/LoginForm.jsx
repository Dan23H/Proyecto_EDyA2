import useLoginForm from '../../hooks/useLoginForm';
import styles from './Logeo.module.css';
import logo from '../../7T.png';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const {usuario, contraseña, tomarUsuario, tomarContraseña, handleLogin, credencialesInvalidas} = useLoginForm();

  return (
    <>
      <body>
        <div className={styles.loginFormContainer}>
          <div className={styles.formGroup}>
            <img src={logo} alt='logo' className={styles.logo} />
            <input
              className={styles.input}
              type='text'
              placeholder='Ingrese su nombre de usuario'
              onChange={(evt) => tomarUsuario(evt)}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type='password'
              placeholder='Ingrese su contraseña'
              onChange={(evt) => tomarContraseña(evt)}
            />
          </div>
          {credencialesInvalidas && (
            <p className={styles.errorMessage}>
              Credenciales inválidas, por favor intente de nuevo.
            </p>
          )}
          <div className={styles.buttonsContainer}>
            <button
              className={styles.logInButton}
              type='button'
              onClick={(e) => handleLogin(e)}
            >
              Acceder
            </button>
            <Link to='/register'>
              <button className={styles.signInButton} type='button'>
                Registro
              </button>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
};


