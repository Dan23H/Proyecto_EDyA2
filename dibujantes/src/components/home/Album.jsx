import "./album.css";
import "../../bootstrap-css/bootstrap.min.css";
import { Post } from "./Post";
import { Carousel, CarouselItem } from 'react-bootstrap';

export const Album = ({ images, category }) => {
  if (!images || images.length === 0) {
    return <div>No se encontraron imágenes.</div>;
  }
  const empaquetarListas = (arreglo, tamaño) => {
    const resultado = [];
    for (let i = 0; i < arreglo.length; i += tamaño) {
      resultado.push(arreglo.slice(i, i + tamaño));
    }
    return resultado;
  }

  const groupedImages = empaquetarListas(images, 3);
  return (
    <div className="container-carousel">
      <span className="carousel-title">{category}</span>
      <div className="carousel-body">
        <Carousel interval={null} style={{ height: '400px', overflow: 'hidden' }}>
          {groupedImages.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="item-container">
                {group.map((objeto, subIndex) => (
                  <div className="post-row">
                    <Post
                      key={subIndex}
                      id={objeto.id}
                      contentType={objeto.imagen.contentType}
                      data={objeto.imagen.data}
                      msg={objeto.descripcion}
                    />
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};