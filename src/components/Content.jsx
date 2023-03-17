import React, { useState } from "react";
import { getCategorias, getCategory, getDatos } from "../helpers/getDatos";
import { Deporte } from "./Deporte";

export const Content = () => {
  const [data, setData] = useState(getDatos());
  const cat = getCategorias();

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-2 px-5">
        <select className="form-select text-white bg-dark" onChange={ (e) => { setData( getCategory(e.target.value) ) } } >
          <option value="">--- Filtrar por categoria ---</option>
          {
            cat.map( (e, id) => <option key={id} value={e}>{e}</option>)
          }
        </select>
      </div>
      <div className="row">
      {
        data.map( (e, id) => {
          return (
            <Deporte
              id={e.id}
              key={id}
              linkImagen={e.linkImagen}
              titulo={e.titulo}
              descripcion={e.descripcion}
              equipo={e.equipo}
              url={e.url}
              categoria={e.categoria}
              liked={e.liked}
            ></Deporte>
          )
        } )
      }
    </div>
    </div>
  );
};