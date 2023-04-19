import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { EditarPerfil } from "./EditarPerfil";

const Perfil = ({
  nombre,
  seguidores,
  pais,
  perfilImg,
  portadaImg,
  ejemploImg,
}) => {
  return (
    <div>
      <div style={{ position: "absolute", top: "0px", left: "0px" }}>
        <div>
          <img
            src={portadaImg}
            alt="ejemplo portada"
            height="240"
            width="1366"
            class="border border-4 border-primary"
          />
          <Link to={{ pathname: "/editar-perfil" }}>
            <button
              class="btn btn-primary position-relative rounded-pill"
              style={{ position: "absolute", top: "-235px", left: "1200px" }}
            >
              Editar perfil ✏
            </button>
          </Link>
          <button
            class="btn btn-primary position-relative rounded-pill"
            style={{ position: "absolute", top: "-235px", left: "-117px" }}
          >
            🏠
          </button>

          <img
            src={perfilImg}
            alt="ejemplo perfil"
            height="180"
            width="180"
            style={{ position: "absolute", top: "35px", left: "35px" }}
            class="rounded-circle border border-4"
          />
          <div
            style={{
              position: "absolute",
              top: "70px",
              left: "240px",
              color: "white",
            }}
          >
            <h2>{nombre}</h2>
            <h5> Seguidores: {seguidores}</h5>
            <h6>Pais: {pais}</h6>
          </div>
        </div>
      </div>
      <div
        class="container-fluid"
        style={{ position: "absolute", top: "275px", left: "10px" }}
      >
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          ></input>
          <label class="btn btn-outline-primary" for="btnradio1">
            Mis trabajos
          </label>

          <input
            type="radio"
            class="btn-check "
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          ></input>
          <label class="btn btn-outline-primary" for="btnradio2">
            Favoritos
          </label>
        </div>
        <table  style={{ marginTop: "-8px", position: "absolute", left: "12px", border:"2px solid black", borderRadius:"30px"}}>
  <tbody>
    <tr>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="100px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
    </tr>
    <tr>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
    </tr>
    <tr>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img>
      </td>
    </tr>
    <tr>
      <td>
        <img
          style={{height: "265px", width: "265px",borderRadius: "50px"}}
          src={ejemploImg}
          border-radius="10px"
        ></img></td></tr></tbody></table>
      </div>
    </div>
  );
};

export default Perfil;
