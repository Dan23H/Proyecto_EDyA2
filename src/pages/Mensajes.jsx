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
            <FormatoMensaje nombre={"Manuel"} asunto={"Consejos sobre anatomia"}/>
            <FormatoMensaje nombre={"Freddy Agulera"} asunto={"¿Cómo haces para realizar tu achurado?"}/>
            <FormatoMensaje nombre={"Gabriel G"} asunto={"No consigo dominar la perspectiva"}/>
            
        </>
    )
}