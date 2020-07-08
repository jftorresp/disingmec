import React from "react";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="Servicios">
      <div className="container">
        <h2 className="text-center">Servicios</h2>
        <div className="row">
          <div className="col-3">
            <Link to="/servicios">
              <div className="service-item">
                <h5>Taller de torno, máquinas y herramientas</h5>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/servicios">
              <div className="service-item">
                <h5>Fabricación y montaje de estructuras metálicas</h5>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/servicios">
              <div className="service-item">
                <h5>
                  Reparaciones de superficies y aplicaciones de pintura según
                  sistemas Sspc-sp.
                </h5>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/servicios">
              <div className="service-item">
                <h5>Montajes y mantenimiento de sistemas hidráulicos</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Link to="/servicios">
              <div className="service-item">
                <h5>Mantenimiento Grupos Generadores</h5>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/servicios">
              <div className="service-item">
                <h5>
                  Procesos de soldadura orbital, aplicación de soldadura y agua
                  filtrada
                </h5>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/servicios">
              <div className="service-item">
                <h5>Construcción de obras civiles en general</h5>
              </div>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/servicios">
              <div className="service-item">
                <h5>
                  Mantenimiento y aplicación de recubrimientos de protección en
                  zonas de almacenamiento de químicos y otros ambientes
                  agresivos
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
