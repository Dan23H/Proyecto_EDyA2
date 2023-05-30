import "./album.css";
import "../../bootstrap-css/bootstrap.min.css";
import { Post } from "./Post";
import { Carousel, CarouselItem } from 'react-bootstrap';

export const Album = ({ images, category }) => {
  if (!images || images.length === 0) {
    return <div>No se encontraron imágenes.</div>;
  }

  const post5 = images.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  const style = {
    height: '400px',
    overflow: 'hidden'
  };
  //console.log(images);

  return (
    <div className="container-fluid">
      <span className="carousel-title">{category}</span>
      <div className="carousel-body">
        <Carousel interval={null} style={style}>
          {post5.map((group, i) => (
            <CarouselItem key={i}>
              <div className="row">
                {group.map((post, j) => (
                  <div className="col-md-3" key={j}>
                    <Post
                      contentType={post.contentType}
                      data={post.data}
                      msg={post.descripcion}
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
};