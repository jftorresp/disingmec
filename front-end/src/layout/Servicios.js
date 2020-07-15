import React from "react";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="Servicios">
      <div className="curve" id="curve-ser">
        <div className="container services-section">
          <h2 className="text-center">Servicios</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <Link to="/servicios" className="link">
                      <p>Taller de torno, máquinas y herramientas</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <Link to="/servicios" className="link">
                      <p>Fabricación y montaje de estructuras metálicas</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <Link to="/servicios" className="link">
                      <p>
                        Reparaciones de superficies y aplicaciones de pintura
                        según sistemas Sspc-sp.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <Link to="/servicios" className="link">
                      <p>Montajes y mantenimiento de sistemas hidráulicos</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <Link to="/servicios" className="link">
                      <p>Mantenimiento Grupos Generadores</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <Link to="/servicios" className="link">
                      <p>
                        Procesos de soldadura orbital, aplicación de soldadura y
                        agua filtrada
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <Link to="/servicios" className="link">
                      <p>Construcción de obras civiles en general</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <Link to="/servicios" className="link">
                      <p>
                        Mantenimiento y aplicación de recubrimientos de
                        protección en zonas de almacenamiento de químicos y
                        otros ambientes agresivos
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
