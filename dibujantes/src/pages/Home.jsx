import { useEffect, useState } from "react";
import { Album, Navbar } from "../components";
import "../components/home/album.css";
import {postsPrueba1, postsPrueba2} from "../components/fake-data/album-data"


export const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
      fetchImages();
    }, []);
  
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:4000/verimagenes");
        const data = await response.json();
        const formattedImages = data.imagenes.map((imagen) => {
          return {
            contentType: imagen.contentType,
            data: imagen.data,
          };
        });
        setImages(formattedImages);
      } catch (error) {
        console.error("Error:", error);
      }
    };

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
                <Album images={images} category={'#Anime'} />
                <Album images={images} category={'#Futuristic'} />
            </div>
        </>
    );
};
