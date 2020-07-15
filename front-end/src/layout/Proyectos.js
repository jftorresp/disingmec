import React from "react";
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <div className="Proyectos">
      <div className="curve" id="curve-pro">
        <div className="container">
          <h2>Nuestros Proyectos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea
            temporibus nesciunt culpa doloribus dolore, expedita minima nostrum
            cumque sit reiciendis deserunt, magni sapiente illum nobis odio
            officiis ipsam vel.
          </p>
          <Link to="/proyectos">
            <button>CONOZCA MÁS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
