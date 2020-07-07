import React from "react";
import logo_tebsa from "../images/logo_tebsa.png";
import logo_pacific from "../images/logo_pacific.png";
import logo_bavaria from "../images/logo_bavaria.png";
import logo_manuelita from "../images/logo_manuelita.png";
import logo_gensa from "../images/logo_gensa.png";
import logo_enel from "../images/logo_enel.png";
import logo_sochagota from "../images/logo_sochagota.png";
import logo_aceites from "../images/logo_aceites.jpg";
import logo_cementos from "../images/logo_cementos.jpg";

const Clientes = () => {
  return (
    <div className="Clientes">
      <div className="container">
        <h2>Nuestros Clientes</h2>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <img src={logo_tebsa} alt="logo de Tebsa" />
          </div>
          <div className="col-2">
            <img src={logo_pacific} alt="logo de Pacific" />
          </div>
          <div className="col-2">
            <img src={logo_bavaria} alt="logo de Bavaria" />
          </div>
          <div className="col-2">
            <img src={logo_manuelita} alt="logo de Manuelita" />
          </div>
          <div className="col-2">
            <img src={logo_gensa} alt="logo de Gensa" />
          </div>
          <div className="col-1"></div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-2">
            <img src={logo_enel} alt="logo de Enel" />
          </div>
          <div className="col-2">
            <img src={logo_sochagota} alt="logo de Sochagota" />
          </div>
          <div className="col-2">
            <img src={logo_aceites} alt="logo de Aceites Catatumbo" />
          </div>
          <div className="col-2">
            <img src={logo_cementos} alt="logo de Cementos Boyaca" />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
