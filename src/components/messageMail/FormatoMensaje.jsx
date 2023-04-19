import React from "react";
import styles from "./FormatoMensaje.module.css";

export const FormatoMensaje = (props) => {
  return (
    <div className={styles["formato-mensaje-container"]}>
      <div className={styles.perfil}>P</div>
      <div>
        <div className={styles["deLabel"]}>De: {props.nombre}</div>
        <div className={styles["asuntoLabel"]}>Asunto: {props.asunto}</div>
      </div>
    </div>
  );
};


