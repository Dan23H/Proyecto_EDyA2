import "./album.css";
import "../../bootstrap-css/bootstrap.min.css";
import { Post } from "./Post";
import { Carousel, CarouselItem } from 'react-bootstrap';

export const Album = ({ posts, category }) => {
  const post5 = posts.reduce((resultArray, item, index) => {
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
                      img={post.img}
                      msg={post.msg}
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