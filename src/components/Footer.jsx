import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>DESARROLLADOR</h3>
              <ul>
                <li><a href="/#">Andrés Felipe Vega Escalante</a></li>
                <li><a href="/#">Ingenieria de sistemas</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>CURSO</h3>
              <ul>
                <li><a href="/#">Desarrollo web 2</a></li>
                <li><a href="/#">Universidad de la costa / CUC</a></li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>OBJETIVO DE DESARROLLO</h3>
              <p>El objetivo principal de este desarrollo es poner en práctica los conocimientos transmitidos durante el curso acerca de los metodos de Array, manejo de estados y rutas en la libreria de JavaScript para frontend React.</p>
            </div>
            <div className="col item social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=1710571619"><i className="fa fa-facebook-f"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andresfelipe-vegaescalante"><i className="fa fa-linkedin"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="http://instagram.com/andresvega98"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
          <p className="copyright">Universidad de la costa © 2023</p>
        </div>
      </footer>
    </div>
  );
};
