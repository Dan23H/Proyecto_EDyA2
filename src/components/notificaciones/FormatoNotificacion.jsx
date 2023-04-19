import React from 'react'
import styles from './FormatoNotificacion.module.css'

export const FormatoNotificacion = (props) => {
    return (
        <div className={styles["formato-notificacion-container"]}>
            <div className={styles.iconContainer}>
                <img />
            </div>
            <div className={styles.messageContainer}>
                <p>{props.mensaje}</p>
            </div>
    </div>
  )
}
