import React from "react";
import banner_soluciones from "../images/banner_soluciones.jpeg";

const SolucionesBanner = () => {
  return (
    <div className="SolucionesBanner">
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6" id="blue">
            <h1>
              Proyectos y soluciones&nbsp;únicas para&nbsp;su&nbsp;empresa
            </h1>
            <hr className="line" />
            <p>
              Disingmec no se limita a un portafolio de servicios
              preestablecidos. Nuestro servicio más valioso es el de crear
              soluciones ÚNICAS según las necesidades de nuestros clientes. No
              hay proyecto de metalmecánica que no podamos llevar a cabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolucionesBanner;
