import { useState } from 'react';
import { FormatoMensaje, Navbar} from '../components';
import { EnviarMensaje } from '../components/messageMail/EnviarMensaje';
import styles from '../components/messageMail/FormatoMensaje.module.css'

export const Mensajes = () => {
  const [showEnviarMensaje, setShowEnviarMensaje] = useState(false);

  const handleMostrarEnviarMensaje = () => {
    setShowEnviarMensaje(true);
  };

  const handleMostrarMensajes = () => {
    setShowEnviarMensaje(false);
  };

  return (
    <>
      <Navbar 
        searchBar={false}
        current="mensajeria"
        item1="Subir Imagen"
        item2="Mensajeria"
        item3="Perfil"
        item4="Notificaciones"
      />
      <div className={styles["botones-container"]}>
        <button className={styles["boton-mensaje"]} onClick={handleMostrarMensajes}>Ver mensajes</button>
        <button className={styles["boton-enviar"]} onClick={handleMostrarEnviarMensaje}>Enviar mensaje</button>
      </div>
      {showEnviarMensaje ? <EnviarMensaje /> : (
        <>
          <FormatoMensaje nombre={'Manuel'} asunto={'Consejos sobre anatomia'} />
          <FormatoMensaje nombre={'Freddy Agulera'} asunto={'¿Cómo haces para realizar tu achurado?'} />
          <FormatoMensaje nombre={'Gabriel G'} asunto={'No consigo dominar la perspectiva'} />
        </>
      )}
    </>
  );
};
