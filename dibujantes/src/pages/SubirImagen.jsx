import { Navbar } from "../components";
import "../components/subirImagen/subirImagen.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SubirImagen = () => {

    const [imagen, setImages] = useState([])
    const [categoria, setCategory] = useState('')
    const [descripcion, setDescription] = useState('') // eslint-disable-next-line
    //let save = {};
    //let fileInput = document.getElementById("fileInput")
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

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleReset = (event) => {
        event.preventDefault();
        fileInput.value = ""
        setImages([])
        setCategory('')
        setDescription('')
        navigate("/home")
    }

    const handleSave = (event) => {
        event.preventDefault();
        // Aquí debes hacer una solicitud al backend para enviar los datos
        const formData = new FormData();
        imagen.forEach((image) => {
            formData.append("images", image.file);
        });
        formData.append("category", categoria);
        formData.append("description", descripcion);

        fetch("http://localhost:4000/subirImagen", {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            alert("La imagen ha sido publicada exitosamente!");
            setImages([]);
            setCategory("");
            setDescription("");
            navigate("/home");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

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
                                placeholder="#categoria1 #categoria2"
                                id="category"
                                onChange={(event) => handleCategory(event)}
                                title="Define una ruta (un hashtag) para que encuentren tu arte más facilmente!"
                                value={categoria}
                                required
                            />

                            <input
                                type="text"
                                placeholder="Descripción"
                                id="description"
                                maxLength={500}
                                onChange={(event) => handleDescription(event)}
                                title="Enséñale al mundo el significado de tus obras!"
                                value={descripcion}
                            />


                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                placeholder="Imagen"
                                onChange={(event) => handleImagen(event)}
                                required
                            />

                            {
                                imagen ?
                                    <>
                                        <hr />
                                        <div className="mt-2">
                                            <h5>
                                                {categoria}
                                            </h5>
                                        </div>
                                        {

                                            imagen.map((imagen, index) => (
                                                <div className="card mb-4 box-shadow" key={index}>
                                                    {
                                                        <img
                                                            alt={categoria}
                                                            className="card-img-top"
                                                            style={{ height: "300px", objectFit: "cover" }}
                                                            src={imagen.url}
                                                        />
                                                    }
                                                    <div className="card-body">
                                                        <p className="card-text">{descripcion}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                                    :
                                    <>
                                    </>
                            }

                        </section>
                        <footer>
                            <ul>
                                <li>
                                    <button className="btn btn-primary" type="submit" onClick={(event) => handleSave(event)}>Subir Imagen</button>
                                </li>
                                <li>
                                    <button className="btn btn-danger" type="button" onClick={(event) => handleReset(event)}>Cancelar</button>
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
                item4="Notificaciones"
            />
        </body>
    );
};