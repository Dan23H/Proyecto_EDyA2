import { useEffect, useState } from "react";
import { Album, Navbar } from "../components";
import "../components/home/album.css";


export const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("https://localhost:4000/imagenes");
      const data = await response.json();
      const formattedImages = data.imagenes.map((imagen) => {
        return {
          id: imagen.id,
          descripcion: imagen.descripcion,
          categoria: imagen.categoria,
          imagen: {
            contentType: imagen.imagen.contentType,
            data: imagen.imagen.data,
          }
        };
      });
      setImages(formattedImages);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const categories = [...new Set(images.map((image) => image.categoria))];
  let categoria = []


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
        {
          categories.map((category, index) => {
            categoria = images.filter((image) => image.categoria === category)
            console.log(categoria)
            return (<Album key={index} images={categoria} category={category} />)
          })
        }
      </div>
    </>
  );
};
