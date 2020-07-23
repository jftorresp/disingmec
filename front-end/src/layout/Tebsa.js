import React from "react";
import ImageGallery from "react-image-gallery";
import banner_soluciones from "../images/banner_soluciones.jpeg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faEye,
  faIndustry,
  faTools,
  faCogs,
  faDraftingCompass,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

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
          <h2>Línea del tiempo del proyecto</h2>
        </div>
      </div>
      <div className="curve2" id="curve-ser">
        <div className="timeline">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2011 - present"
              iconStyle={{ background: "rgba(3, 39, 116)", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="icon"
                ></FontAwesomeIcon>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "#ffdd15", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  icon={faEye}
                  className="icon"
                ></FontAwesomeIcon>
              }
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgba(3, 39, 116)", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  icon={faIndustry}
                  className="icon"
                ></FontAwesomeIcon>
              }
            >
              <img src={banner_soluciones} alt="" />
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "#ffdd15", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  icon={faTools}
                  className="icon"
                ></FontAwesomeIcon>
              }
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: "rgba(3, 39, 116)", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  icon={faCogs}
                  className="icon"
                ></FontAwesomeIcon>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "#ffdd15", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  icon={faDraftingCompass}
                  className="icon"
                ></FontAwesomeIcon>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgba(3, 39, 116)", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  className="icon"
                ></FontAwesomeIcon>
              }
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Tebsa;
