import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4>Datos de contacto</h4>
            <p>
              Para cualquier inquietud: <br></br>
              Dirección: Carrera X # X - X <br></br>
              Horario: Lunes a viernes: 7:30 a.m. – 12:00p.m / 1:30 p.m. – 5:30
              p.m. Teléfonos: + (57)(7) 1234567 - 234509 <br></br>
              Correo: correo@disingmec.co
            </p>
          </div>
          <div className="col-3">
            <h4>Servicios</h4>
            <ul>
              <li>Servicio 1</li>
              <li>Servicio 2</li>
              <li>Servicio 3</li>
              <li>Servicio 4</li>
              <li>Servicio 5</li>
            </ul>
          </div>
          <div className="col-6"></div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
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
