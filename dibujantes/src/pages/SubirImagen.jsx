import { Navbar } from "../Componentes";
import "../css/subirImagen.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SubirImagen = () => {

  const [images, setImages] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [showImages, setShowImages] = useState(false) // eslint-disable-next-line
  let save = {};
  let fileInput = document.getElementById("fileInput")
  const navigate = useNavigate()

  const handleImagen = (e) => {
    const newImages = Array.from(e.target.files).map(file => {
      if (file.type && !file.type.startsWith('image/')) {
        console.log(file.type)
        return null;
      }
      console.log(file.type)
      return {
        file: file,
        url: URL.createObjectURL(file),
        show: false
      }
    }).filter(image => image !== null)
    setImages([...newImages])
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleShowImages = (e) => {
    const show = e.target.checked
    setShowImages(show)
    setImages(images => images.map(image => {
      return {
        ...image,
        show: show
      }
    }))
  }

  const handleReset = (event) => {
    event.preventDefault();
    fileInput.value = ""
    setImages([])
    setTitle('')
    setDescription('')
    setShowImages(false)
  }

  const handleSave = () => {
    save = {
      images: images,
      title: title,
      description: description
    }
    alert('La imagen ha sido publicada exitosamente!')
    setImages([])
    setTitle('')
    setDescription('')
    setShowImages(false)
    navigate("/interfaz-usuario")
  }

  return (
    <body className="body">
      <div className="wrapper">
        <header>
          <h1>Subir Imagen</h1>
        </header>

        <div className="sections">
          <form onSubmit={() => handleSave()}>
            <section className="active">
              <input
                type="text"
                placeholder="Título"
                id="title"
                onChange={(event) => handleTitle(event)}
                title="Ponle un buen nombre a tus obras!"
                value={title}
                required
              />

              <input
                type="text"
                placeholder="Descripción"
                id="description"
                maxLength={500}
                onChange={(event) => handleDescription(event)}
                title="Enséñale al mundo el significado de tus obras!"
                value={description}
              />


              <input
                id="fileInput"
                type="file"
                accept="image/*"
                placeholder="Imagen"
                onChange={(event) => handleImagen(event)}
                required
                multiple
              />

              <div className="d-flex align-items-center">
                <label className="checkbox-label me-3 mb-0">
                  <input
                    type="checkbox"
                    checked={showImages}
                    onChange={(e) => handleShowImages(e)}
                    title="Alternar previsualización de las imágenes"
                  />
                  Previsualización
                </label>
              </div>
              {
                images && showImages ?
                  <>
                    <hr />
                    <div className="mt-2">
                      <h5>
                        {title}
                      </h5>
                    </div>
                    {
                      images.map((image, index) => (
                        <div key={index} className="active">
                          {
                            showImages &&
                            <img
                              className="card-img-top spacing"
                              src={image.url}
                              alt={title}
                              style={{ display: 'block' }}
                            />
                          }
                        </div>
                      ))
                    }
                    <p>{description}</p>
                  </>
                  :
                  <></>
              }

            </section>
            <footer>
              <ul>
                <li>
                  <button className="btn btn-warning" type="button" onClick={(event) => handleReset(event)}>Reiniciar Imágenes</button>
                </li>
                <li>
                  <button className="btn btn-primary" type="submit" >Subir Imágenes</button>
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
      <Navbar
        searchBar={false}
        current="subir-imagen"
        item1="Subir Imagen"
        item2="Mensajeria"
        item3="Perfil"
        item4=""
      />
    </body>
  );
};