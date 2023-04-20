import "../../bootstrap-css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../7T.png";
import subirImagen from "./subirImagen.png";
import mensajeria from "./mensajeria.png";
import notifications from "./notifications.png"

const fix = (item) => {
  const res = "/" + item.toLowerCase().split(" ").join("-");
  return res;
};

const fixCSS = (item, current) => {
  const fixedRes = "" + item.toLowerCase().split(" ").join("-");
  let res = "";
  fixedRes === current ? (res = "nav-link active") : (res = "nav-link");
  return res;
};

export const Navbar = ({ searchBar, current, item1, item2, item3, item4 }) => {

  return (
    <>
      <div className="topboard">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/home">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
              <div className="logo-hover">
                <span className="hover-text">Ir al inicio</span>
              </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" title={item1}>
                <Link className={fixCSS(item1, current)} to={fix(item1)}>
                  <img className="logo" src={subirImagen} alt={item1} />
                </Link>
              </li>
              <li className="nav-item" title={item2}>
                <Link className={fixCSS(item2, current)} to={fix(item2)}>
                  <img className="logo" src={mensajeria} alt={item2} />
                </Link>
              </li>
              <li className="nav-item" title={item3}>
                <Link className={fixCSS(item3, current)} to={{ pathname: '/perfil' }}>
                  <img className="logo" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt={item3} />
                </Link>
              </li>
              <li className="nav-item" title={item4}>
                <Link className={fixCSS(item4, current)} to={fix(item4)}>
                  <img className="logo" src={notifications} alt={item4} />
                </Link>
              </li>
            </ul>
            {searchBar === true ? (
              <>
                <form className="form-inline mt-2 mt-md-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
