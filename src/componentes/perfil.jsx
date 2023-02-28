import React from "react";

const Profile = ({ nombre, seguidores, pais, perfilImg, portadaImg }) => {
  return (
    <div>
        <div>
           <img src={portadaImg} height="100" width="1350"/> 
           <button>Editar perfil</button>
        </div>
        <div>
           <img src={perfilImg} />
           <h1>{nombre}</h1>
           <p> Seguidores: {seguidores}</p>
           <p>Pais: {pais}</p>
        </div>   
        <div>
            <button>Mis trabajos</button>
            <button>Favoritos</button>
            <h1>PUBLICACIONES</h1>
        </div>
    </div>

  );
};

export default Profile;