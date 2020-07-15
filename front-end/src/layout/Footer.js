import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import LogoBlanco from "../images/logo_blanco.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h4>Datos de contacto</h4>
            <p>
              Para cualquier inquietud: <br></br>
              Dirección: Carrera X # X - X <br></br>
              Horario: Lunes a viernes: 7:30 a.m. – 12:00p.m / 1:30 p.m. – 5:30
              p.m. Teléfonos: + (57)(7) 1234567 - 234509 <br></br>
              Correo: correo@disingmec.co
            </p>
          </div>
          <div className="col-lg-3">
            <h4>Servicios</h4>
            <ul>
              <li>Servicio 1</li>
              <li>Servicio 2</li>
              <li>Servicio 3</li>
              <li>Servicio 4</li>
              <li>Servicio 5</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Link to="/">
              <img src={LogoBlanco} alt="Logo Blanco Disingmec" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <p>
              <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2020
              Disingmec SAS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
