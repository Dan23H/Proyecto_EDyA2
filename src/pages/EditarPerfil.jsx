import "../components/subirImagen/subirImagen.css";
import { useState } from "react";

export const EditarPerfil = ({ perfilImg, portadaImg }) => {
  const [images, setImages] = useState(false);
  const [imagesPortada, setImagesPortada] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoPais, setNuevoPais] = useState(""); 

  const handleImagen = (e) => {
    const newImages = Array.from(e.target.files)
      .map((file) => {
        if (file.type && !file.type.startsWith("image/")) {
          return null;
        }
        console.log(file.type);
        return {
          file: file,
          url: URL.createObjectURL(file),
          show: false,
        };
      })
      .filter((image) => image !== null);
    setImages([...newImages]);
  };

  const handleImagenPortada = (e) => {
    const newImages = Array.from(e.target.files)
      .map((file) => {
        if (file.type && !file.type.startsWith("image/")) {
          console.log(file.type);
          return null;
        }
        console.log(file.type);
        return {
          file: file,
          url: URL.createObjectURL(file),
          show: false,
        };
      })
      .filter((image) => image !== null);
    setImagesPortada([...newImages]);
  };

  const handleNombre = (e) => {
    setNuevoNombre(e.target.value);
  };

  const handlePais = (e) => {
    setNuevoPais(e.target.value);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setImages([]);
    setNuevoNombre("");
    setNuevoPais("");
  };

  const handleSubmit = () => {

    alert("La imagen ha sido publicada exitosamente!");
    setImages([]);
    setNuevoNombre("");
    setNuevoPais("");
  };

  return (
    <body className="body">
      <div className="wrapper">
        <header>
          <h4>EDITAR PERFIL:</h4>
        </header>

        <div className="sections">
          <form onSubmit={() => handleSubmit()}>
            <section className="active">
              <input
                type="text"
                placeholder="Cambiar nombre"
                id="nombre"
                onChange={(event) => handleNombre(event)}
                required
              />

              <input
                type="text"
                placeholder="Cambiar país"
                id="pais"
                maxLength={500}
                onChange={(event) => handlePais(event)}
              />
              <h6>Actualizar foto de perfil:</h6>

              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImagen(event)}
                required
              />

              {images ? (
                <>
                  {images.map((image, index) => (
                    <h5 style={{ display: "none" }}>
                      {(perfilImg = image.url)}
                    </h5>
                  ))}
                </>
              ) : (
                <>
                </>
              )}

              <h6>Actualizar foto de portada:</h6>

              <input
                type="file"
                accept="image/*"
                placeholder="Imagen"
                onChange={(event) => handleImagenPortada(event)}
                required
              />

            <h6>Previsualización:</h6>

              {imagesPortada ? (
                <>
                  {imagesPortada.map((image, index) => (
                    <div className="card mb-4 box-shadow" id={index}>
                      <h5 style={{ display: "none" }}>
                        {(portadaImg = image.url)}
                      </h5>
                      <img
                        src={portadaImg}
                        alt="ejemplo portada"
                        className="card-img-top"
                        style={{ height: "150px", objectFit: "cover" }}
                      />

                      <img
                        src={perfilImg}
                        alt="ejemplo perfil"
                        height="120"
                        width="120"
                        style={{
                          position: "absolute",
                          top: "20px",
                          left: "20px",
                        }}
                        class="rounded-circle border border-4"
                      />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="card mb-4 box-shadow">
                    <img
                      src={portadaImg}
                      alt="ejemplo portada"
                      className="card-img-top"
                      style={{ height: "150px", objectFit: "cover" }}
                    />

                    <img
                      src={perfilImg}
                      alt="ejemplo perfil"
                      height="120"
                      width="120"
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                      }}
                      class="rounded-circle border border-4"
                    />
                  </div>
                </>
              )}
            </section>
            <footer>
              <ul>
                <li>
                  <button className="btn btn-primary" type="submit">
                    Guardar perfil
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={(event) => handleReset(event)}
                  >
                    Cancelar
                  </button>
                </li>
              </ul>
            </footer>
          </form>
        </div>
      </div>
      <div className="notification"></div>
      <footer>
        Inspiration:{" Collection: Alexandre Naud "}
        <a href="https://dribbble.com/shots/2092775-Create-a-new-collection">
          <i className="fa fa-dribbble" aria-hidden="true"></i>dribbble
        </a>
      </footer>
    </body>
  );
};
