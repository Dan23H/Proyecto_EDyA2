import "../../bootstrap-css/bootstrap.min.css";
import "./album.css";
import { Link } from "react-router-dom";

export const Post = ({ id, contentType, data, msg }) => {
  console.log(contentType, data, msg)
  const imageSource = `data:${contentType};base64,${data}`;
  let objeto = {
    id: id,
    contentType: contentType,
    data: data,
    msg: msg
  }
  console.log(objeto)
  return (
    <div className="card mb-4 box-shadow">
      <Link to={`/image/${id}`} state={objeto}>
        <img
          alt="Imagen"
          className="card-img-top"
          style={{ height: "300px", width: "25vw", objectFit: "cover" }}
          src={imageSource}
        />
      </Link>
      <div className="card-body">
        <p className="card-text">{msg}</p>
      </div>
    </div>
  );
};