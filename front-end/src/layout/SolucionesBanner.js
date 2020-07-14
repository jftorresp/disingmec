import React from "react";
import banner_soluciones from "../images/banner_soluciones.jpeg";

const SolucionesBanner = () => {
  return (
    <div className="SolucionesBanner">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12"></div>
            <div className="col-lg-6 col-md-12" id="blue">
              <h1>Proyectos y soluciones únicas para su empresa</h1>
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
      <div className="content">
        <div className="curve" id="curve-sol">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p id="left">
                  Hemos realizado trabajos especializados para grandes empresas
                  colombianas como{" "}
                  <b>Gensa, Pacific, Sochagota, Azúcar Manuelita,</b> entre
                  otras. Estos trabajos han involucrado la prestación de
                  servicios únicos tales como:
                </p>
                <ul>
                  <li>
                    Fabricación y montaje de tuberías con proceso de soldadura
                    orbital (automática TIG).
                  </li>
                  <li>Overhaul Bomba Agua Alimentación de PSI 159 bar ksb</li>
                  <li>
                    Mantenimientos mayores de compresores de aire de 3600rpm,
                    presión 32 bares
                  </li>
                  <li>
                    Modificación y remodelación de manjoles de tolvas hogar de
                    calderas para varias empresas
                  </li>
                  <li>
                    Ingeniería para modificación y fabricación de boquillas
                    quemadores carbón
                  </li>
                  <li>
                    Re-potenciamiento de motores Niigata (diseño e ingeniería de
                    bases turbo) de generación
                  </li>
                  <li>Diseño y montaje sistema de recibo de carbón. </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12" id="blue1">
                <div className="row">
                  <div className="col-12">
                    <img src={banner_soluciones} alt="Img1"></img>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <img src={banner_soluciones} alt="Img2"></img>
                  </div>
                  <div className="col-6">
                    <img src={banner_soluciones} alt="Img3"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="flex">
              <div className="col-lg-6 col-md-12" id="blue2">
                <div className="row">
                  <div className="col-3">
                    <img src={banner_soluciones} alt="Img4"></img>
                  </div>
                  <div className="col-3">
                    <img src={banner_soluciones} alt="Img5"></img>
                  </div>
                  <div className="col-3">
                    <img src={banner_soluciones} alt="Img6"></img>
                  </div>
                  <div className="col-3">
                    <img src={banner_soluciones} alt="Img7"></img>
                  </div>
                </div>
                <div className="row">
                  <h4>¡Conozca nuestros mejores proyectos!</h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-12" id="right_container">
                <p id="left">
                  Contamos con personal humano calificado y con amplia
                  experiencia certificada para el desarrollo de todos los
                  proyectos. Además, contamos con todas las herramientas
                  necesarias para adaptarnos a entregar soluciones rápidas y de
                  la mejor calidad, al igual que para cuidar al medio ambiente y
                  salvaguardar la integridad, la seguridad, y la salud de
                  nuestro equipo y de todos los involucrados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolucionesBanner;
