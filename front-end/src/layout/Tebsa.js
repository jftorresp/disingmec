import React from "react";
import ImageGallery from "react-image-gallery";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import bullet from "../images/bullet.svg";

const Tebsa = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      originalAlt: "img1",
      thumbnailAlt: "img1",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      originalAlt: "img2",
      thumbnailAlt: "img2",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      originalAlt: "img3",
      thumbnailAlt: "img3",
    },
  ];
  return (
    <div className="detail-project">
      <div className="banner">
        <div id="blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h1>Proyectos realizados para Tebsa</h1>
                <hr className="line" />
                <p>
                  Disingmec no se limita a un portafolio de servicios
                  preestablecidos. Nuestro servicio más valioso es el de crear
                  soluciones ÚNICAS según las necesidades de nuestros clientes.
                  No hay proyecto de metalmecánica que no podamos llevar a cabo.
                </p>
              </div>
              <div className="col-lg-6 col-md-12"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="curve" id="curve-sol">
          <div className="container">
            <div className="row">
              <h2>Imágenes de los proyectos</h2>
              <ImageGallery items={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tebsa;
