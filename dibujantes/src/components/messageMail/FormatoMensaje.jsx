import React from "react";
import styles from "./FormatoMensaje.module.css";

export const FormatoMensaje = () => {
  return (
    <div className={styles["formato-mensaje-container"]}>
      <div className={styles.perfil}>P</div>
      <div>
        <div className={styles["deLabel"]}>De: </div>
        <div className={styles["asuntoLabel"]}>Asunto: </div>
      </div>
    </div>
  );
};


