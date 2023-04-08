import "../../bootstrap-css/bootstrap.min.css";
import "./album.css";
import { Link } from "react-router-dom";

export const Post = ({ msg, img, category }) => {
  return (
    <>
      
      <div className="card mb-4 box-shadow">
        <Link to={`/image`}><img alt="Imagen" className="card-img-top" src={img} /></Link>
        <div className="card-body">
          <p className="card-text">{msg}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Like
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Comentario
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};