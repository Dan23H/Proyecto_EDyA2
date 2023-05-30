import "../../bootstrap-css/bootstrap.min.css";
import "./album.css";
import { Link } from "react-router-dom";

export const Post = ({ contentType, data, msg }) => {
  const imageSource = `data:${contentType};base64,${data}`;

  return (
    <div className="card mb-4 box-shadow">
      <Link to={`/image`}>
        <img
          alt="Imagen"
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
          src={imageSource}
        />
      </Link>
      <div className="card-body">
        <p className="card-text">{msg}</p>
      </div>
    </div>
  );
};