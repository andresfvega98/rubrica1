import React from "react";
import { Heart } from "./Heart";

export const Deporte = ({
  id,
  linkImagen,
  titulo,
  descripcion,
  equipo,
  url,
  categoria,
  liked,
}) => {
  return (
    <div className="col-lg-4 m-0 d-flex justify-content-center">
      <div
        className="card my-3 text-white bg-dark border border-light"
        style={{ width: "18rem" }}
      >
        <img src={linkImagen} className="card-img-top" alt="Imagen deporte" />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <span>
            <b>Equipo:</b>{" "}
            <a
              href={url}
              rel="noopener noreferrer"
              target={"_blank"}
              className="nav-link active p-0 d-inline"
            >
              {equipo}
            </a>
          </span>
          <br />
          <span>
            <b>Categoria:</b> {categoria}
          </span>
        </div>

        <div className="row w-100 d-flex justify-content-end">
          {<Heart id={id} like={liked}></Heart>}
        </div>
      </div>
    </div>
  );
};
