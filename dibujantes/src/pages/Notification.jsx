import React from 'react'
import { FormatoNotificacion } from '../components/notificaciones/FormatoNotificacion'
import { Navbar } from '../components'

export const Notification = () => {
    return (
        <>
            <Navbar
                searchBar={true}
                current="interfaz-usuario"
                item1="Subir Imagen"
                item2="Mensajeria"
                item3="Perfil"
                item4="Notificaciones"
            />
            <div>
                <FormatoNotificacion mensaje={"Acabas de recibir un me gusta en tu publicación x"}/>
                <FormatoNotificacion mensaje={"Sigue viendo más imagenes del hacker de SAO #Anime"}/>
                <FormatoNotificacion mensaje={"Sigue viendo más imagenes de Kaneki Ken #Anime"}/>
                <FormatoNotificacion mensaje={"Sigue viendo más imagenes de Neo City #Futuristic"}/>
            </div>

        </>
    )
}
