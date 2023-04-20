import { Album, Navbar } from "../components";
import "../components/home/album.css";
import {postsPrueba1, postsPrueba2} from "../components/fake-data/album-data"

export const Home = () => {
    
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

            <div className="spotter">
                <hr />
                <Album posts={postsPrueba1} category={'#Anime'} />
                <Album posts={postsPrueba2} category={'#Futuristic'} />
            </div>
        </>
    );
};
