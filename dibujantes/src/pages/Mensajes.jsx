import { FormatoMensaje, Navbar } from "../components"

export const Mensajes = () => {
    return (
        <>
            <Navbar
                searchBar={false}
                current="mensajeria"
                item1="Subir Imagen"
                item2="Mensajeria"
                item3="Perfil"
                item4=""
            />
            <table>
                <thead>
                    <h1>Mensajes</h1>
                </thead>
                <tbody>
                    <FormatoMensaje />
                </tbody>
            </table>
        </>
    )
}