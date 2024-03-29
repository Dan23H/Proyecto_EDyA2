import { useLocation, useNavigate } from "react-router-dom";
import "../components/subirImagen/subirImagen.css";
import { useState } from "react";

export const EditarPerfil = ({ perfilImg, portadaImg }) => {
  let { state } = useLocation();
  const [images, setImages] = useState(false);
  const [imagesPortada, setImagesPortada] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(state.nombre);
  const [nuevoPais, setNuevoPais] = useState(state.pais);
  const nav = useNavigate()


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
    nav("/perfil")
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("correo", state.email);
    formData.append("pais", nuevoPais);
    formData.append("foto", images[0].file);
    formData.append("portada", imagesPortada[0].file);

    try {
      const response = await fetch("http://localhost:4000/editprofile", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert("El perfil ha sido actualizado exitosamente!");
        setImages([]);
        setImagesPortada([]);
        setNuevoNombre("");
        setNuevoPais("");
        nav("/perfil");
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(error);
      alert("Ha ocurrido un error al actualizar el perfil. Por favor, inténtalo nuevamente.");
    }
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
                value={nuevoNombre}
                placeholder="Cambiar nombre"
                id="nombre"
                onChange={(event) => handleNombre(event)}
                required
              />

              <input
                type="text"
                placeholder="Cambiar país"
                id="pais"
                value={nuevoPais}
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
                    <h5 key={index} style={{ display: "none" }}>
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
                    <div key={index} className="card mb-4 box-shadow" id={index}>
                      <h5 style={{ display: "none" }}>
                        {(portadaImg = image.url)}
                      </h5>
                      <img
                        src={state.portadaImg}
                        alt="ejemplo portada"
                        className="card-img-top"
                        style={{ height: "150px", objectFit: "cover" }}
                      />

                      <img
                        src={state.perfilImg}
                        alt="ejemplo perfil"
                        height="120"
                        width="120"
                        style={{
                          position: "absolute",
                          top: "20px",
                          left: "20px",
                        }}
                        className="rounded-circle border border-4"
                      />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="card mb-4 box-shadow">
                    <img
                      src={state.portadaImg}
                      alt="ejemplo portada"
                      className="card-img-top"
                      style={{ height: "150px", objectFit: "cover" }}
                    />

                    <img
                      src={state.perfilImg}
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
                  <button className="btn btn-primary" type="button" onClick={(event) => handleSubmit(event)}>
                    Guardar perfil
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={(event) => handleReset(event)}
                  >
                    Cancelar y volver
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
