import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="Navbar1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="options col-lg-3 text-right">
            Carrera X N° X - X Bogotá, Colombia
          </div>
          <div className="options col-lg-2 text-right">
            L-V: 7:30 a.m. - 12:00p.m
          </div>
          <div className="options col-lg-1 text-right">Español</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
