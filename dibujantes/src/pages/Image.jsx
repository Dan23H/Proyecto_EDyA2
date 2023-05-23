import { Navbar, Album } from "../components"
import { postsPrueba2 } from "../components/fake-data/album-data"
import "../components/image/image.css"

const data = {
    msg: "Shinobu Oshino :3",
    img: "https://c.wallhere.com/photos/7f/83/anime_Monogatari_Series_Oshino_Shinobu-125680.jpg!d",
    category: "#Anime",
}

// Aquí se enviaría la información de la imagen a mostrar
export const Image = () => {
    return (
        <div className="container"> 
            <Navbar
                searchBar={true}
                current="interfaz-usuario"
                item1="Subir Imagen"
                item2="Mensajeria"
                item3="Perfil"
                item4="Notificaciones"
            />
            <div className="image-container">
                <img src={data.img} alt="" />
            </div>
            <div className="button-container">
                <button>Up</button>
                <button>Down</button>
                <button>Subscribe</button>
                <button>Report</button>
                <button>Download</button>
            </div>
            <div className="message-container">
                <div>
                    {data.msg}
                </div>
                <div>
                    Comentarios
                </div>
            </div>
            <div className="album">
            <Album posts={postsPrueba2} category={'#Futuristic'} />
            </div>
        </div>

    )
}