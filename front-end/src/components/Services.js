import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="Services">
      <div>
        <div className="row service-banner">
          <div>
            <h1>Servicios</h1>
            <p>Aquí podrá conocer todos los servicios que Disingmec ofrece!</p>
          </div>
        </div>
        <div className="services-section container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <p>Soluciones únicas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <p>Fabricación y montaje de estructuras metálicas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <p>
                      Reparaciones de superficies y aplicaciones de pintura
                      según sistemas Sspc-sp
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <p>Montajes y mantenimiento de sistemas hidráulicos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <p>Mantenimiento Grupos Generadores</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <p>Taller de torno, máquinas y herramientas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <p>Construcción de obras civíles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-image">
                <div className="service-card">
                  <div>
                    <p>
                      Mantenimiento y aplicación de recubrimientos de protección
                      en zonas de almacenamiento
                    </p>
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

export default Services;
