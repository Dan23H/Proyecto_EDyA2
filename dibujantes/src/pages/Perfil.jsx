import React from "react";
import "../bootstrap-css/bootstrap.min.css";
import "../components/perfil/perfil.css";
import { Link, useNavigate } from "react-router-dom";
import { startGoogleLogout } from "../actions/auth";
import { useDispatch } from "react-redux";

export const Perfil = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleLogout = () => {
    dispatch(startGoogleLogout());
    nav("/");
  };
  return (
    <div>
      <div>
        <div
          className="border-primary"
          style={{ paddingTop: "0px", position: "relative", top: "-20px" }}
        >
          <img
            src="https://img.freepik.com/vector-premium/fondo-abstracto-patrones-fisuras-uso-estilo-futurista-portada-negocios-banner_7505-1819.jpg"
            height="220"
            width="1360"
            alt="ejemplo portada"
            className="border border-4 img-portrait"
          />
        </div>
        <div>
          <Link
            to="/editar-perfil"
            state={{
              nombre: "Ingeniero Informatico",
              seguidores: 0,
              pais: "Colombia",
              ejemploImg:
                "https://www.fayerwayer.com/resizer/dFDSLv4dHrkcEteV06yZ3eQ9HNY=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/AFMOVVBDTZATHHAXSMOOHW3HGI.jpeg",
              perfilImg:
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              portadaImg:
                "https://img.freepik.com/vector-premium/fondo-abstracto-patrones-fisuras-uso-estilo-futurista-portada-negocios-banner_7505-1819.jpg",
            }}
          >
            <button
              style={{
                borderRadius: "60px",
                position: "relative",
                top: "-139px",
                left: "1213px",
                backgroundColor: "darkviolet",
                color: "white",
                border: "thistle",
                padding: "5px 12px",
              }}
            >
              Editar perfil ✏
            </button>
          </Link>
          <Link to="/home">
            <button
              style={{
                borderRadius: "60px",
                position: "relative",
                top: "-300px",
                left: "-117px",
                backgroundColor: "darkviolet",
                color: "white",
                border: "thistle",
                padding: "5px 12px",
              }}
            >
              Home 🏠
            </button>
          </Link>
          <button
            onClick={handleLogout}
            style={{
              borderRadius: "60px",
              position: "relative",
              top: "-300px",
              left: "980px",
              backgroundColor: "darkviolet",
              color: "white",
              border: "thistle",
              padding: "5px 12px",
            }}
          >
            Cerrar sesión 💤
          </button>

          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="ejemplo perfil"
            height="180"
            width="180"
            class="rounded-circle border border-4"
            style={{ position: "relative", top: "-220px", left: "-275px" }}
          />
          <div style={{ position: "relative", top: "-370px", left: "280px" }}>
            <h2>Ingeniero Informatico</h2>
            <h5>Seguidores: 0</h5>
            <h6>Pais: Colombia</h6>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
          style={{
            position: "relative",
            top: "-280px",
            left: "16px",
            color: "darkviolet",
          }}
        >
          <label
            class="btn btn-outline-primary"
            style={{ color: "darkviolet" }}
            for="btnradio1"
          >
            Mis trabajos
          </label>
          <label
            class="btn btn-outline-primary"
            style={{ color: "darkviolet" }}
            for="btnradio2"
          >
            Favoritos
          </label>
          <label
            class="btn btn-outline-primary"
            style={{ color: "darkviolet" }}
            for="btnradio3"
          >
            +
          </label>
        </div>
        <div
          style={{
            width: "1300px",
            height: "330px",
            backgroundColor: "thistle",
            position: "relative",
            top: "-280px",
            left: "16px"
          }}
        ></div>
      </div>
    </div>
  );
};
