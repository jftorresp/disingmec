import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Redes = () => {
  return (
    <div className="Redes">
      <div className="container">
        <div className="row">
          <div className="col-1">
            {" "}
            <a
              aria-label="instagram"
              href="https://www.instagram.com/arxapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
          </div>
          <div className="col-1">
            {" "}
            <a
              aria-label="instagram"
              href="https://www.instagram.com/arxapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
          </div>
          <div className="col-1">
            {" "}
            <a
              aria-label="instagram"
              href="https://www.instagram.com/arxapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </div>
          <div className="col-1">
            {" "}
            <a
              aria-label="instagram"
              href="https://www.instagram.com/arxapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </div>
          <div className="col-1">
            {" "}
            <a
              aria-label="instagram"
              href="https://www.instagram.com/arxapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
          </div>
          <div className="col-6 text-right">
            <button>CONTACTO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redes;
