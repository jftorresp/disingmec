import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo_tebsa from "../images/logo_tebsa.png";
import logo_pacific from "../images/logo_pacific.png";
import logo_bavaria from "../images/logo_bavaria.png";
import logo_manuelita from "../images/logo_manuelita.png";
import logo_gensa from "../images/logo_gensa.png";
import logo_enel from "../images/logo_enel.png";
import logo_sochagota from "../images/logo_sochagota.png";
import logo_aceites from "../images/logo_aceites.png";

const Clientes = () => {
  return (
    <div className="Clientes">
      <div className="curve" id="curve-cli">
        <div className="container">
          <h2>Nuestros Clientes</h2>
          <div className="clientes-large">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a
                  href="https://tebsa.com.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_tebsa} alt="logo de Tebsa" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a
                  href="http://www.fronteraenergy.ca/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_pacific} alt="logo de Pacific" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a
                  href="https://www.bavaria.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_bavaria} alt="logo de Bavaria" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a
                  href="https://www.manuelita.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_manuelita} alt="logo de Manuelita" />
                </a>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a
                  href="https://www.gensa.com.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_gensa} alt="logo de Gensa" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a
                  href="https://www.enel.com.co/es/conoce-enel/grupo-enel.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_enel} alt="logo de Enel" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a
                  href="http://www.ces.com.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_sochagota} alt="logo de Sochagota" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <img src={logo_aceites} alt="logo de Aceites Catatumbo" />
              </div>
              {/* <div className="col-lg-3 col-md-4">
              <img src={logo_cementos} alt="logo de Cementos Boyaca" />
            </div> */}
            </div>
          </div>
          <div className="clientes-small">
            <Carousel interval={4000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo_tebsa}
                  alt="logo de Tebsa"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo_pacific}
                  alt="logo de Pacific"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo_bavaria}
                  alt="Logo de Bavaria"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo_manuelita}
                  alt="Logo de Manuelita"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo_gensa}
                  alt="Logo de Gensa"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo_enel}
                  alt="Logo de Enel"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo_sochagota}
                  alt="Logo de Sochagota"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo_aceites}
                  alt="Logo de Aceites Catatumbo"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
