import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHome,
  faClock,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="Contact">
      <div>
        <div className="row contact-banner">
          <div>
            <h1>Contacto</h1>
            <p>
              Si quiere obtener más información o trabajar con nosotros
              contáctenos!
            </p>
          </div>
        </div>
        <div className="contact-section container">
          <div className="row">
            <div className="map-section"></div>
          </div>
          <div className="row">
            <div className="col-lg-6 info-section">
              <div className="row info-line">
                <div className="col-lg-1 col-md-1 col-sm-2 fila">
                  <i>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  </i>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-5 fila">
                  {" "}
                  <h5> Teléfono:</h5>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-5 info fila">
                  <p>(1)4612509</p>
                </div>
              </div>
              <div className="row info-line">
                <div className="col-lg-1 col-md-1 col-sm-2 fila">
                  <i>
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                  </i>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-5 fila">
                  <h5>Dirección:</h5>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-5 info fila">
                  <p>CALLE 92 10 21 1001, BOGOTA, BOGOTA</p>
                </div>
              </div>
              <div className="row info-line">
                <div className="col-lg-1 col-md-1 col-sm-2 fila">
                  <i>
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                  </i>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-5 fila">
                  <h5>Horario:</h5>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-5 info fila">
                  <p>L-V: 7:30 a.m. - 12:00p.m</p>
                </div>
              </div>
              <div className="row info-line">
                <div className="col-lg-1 col-md-1 col-sm-2 fila">
                  <i>
                    <FontAwesomeIcon icon={faTools}></FontAwesomeIcon>
                  </i>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-5 fila">
                  <h5>Actividad:</h5>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-5 info fila">
                  <p>
                    Mantenimiento y reparacion especializado de maquinaria y
                    equipo
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2>
                Llena el siguiente formulario y te contactaremos lo más pronto
                posible!
              </h2>
              <form>
                <div className="form-group">
                  <label htmlFor="">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Escribe tu nombre completo"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="mail@ejemplo.com"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="321 123 4567"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">País</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Colombia"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Deja tu mensaje"
                  ></textarea>
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
