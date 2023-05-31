import { Navbar, Album } from "../components";
import { postsPrueba2 } from "../components/fake-data/album-data";
import "../components/image/image.css";
import { useState } from "react";
import { useEffect } from "react";

const data = {
  msg: "Shinobu Oshino :3",
  img: "https://c.wallhere.com/photos/7f/83/anime_Monogatari_Series_Oshino_Shinobu-125680.jpg!d",
  category: "#Anime",
};

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
        <button
          style={{
            borderRadius: "10px",
            fontSize: "30px",
            padding: "0px 10px",
          }}
        >
          👍
        </button>
        <button
          style={{
            borderRadius: "10px",
            fontSize: "30px",
            padding: "0px 10px",
          }}
        >
          👎
        </button>
        <button style={{ borderRadius: "10px" }}>Up</button>
        <button style={{ borderRadius: "10px" }}>Down</button>
        <button style={{ borderRadius: "10px" }}>Subscribe</button>
        <button style={{ borderRadius: "10px" }}>Report</button>
        <button style={{ borderRadius: "10px" }}>Download</button>
      </div>
      <div className="message-container">
        <div>{data.msg}</div>
        <div>
          <h2>Comentarios</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment._id}>
                <strong>{comment.author}</strong>: {comment.text}
              </li>
            ))}
          </ul>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={handleInputChange}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className="album">
        <Album posts={postsPrueba2} category={"#Futuristic"} />
      </div>
    </div>
  );
};