import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar2 from "./layout/Navbar2";
import Navbar1 from "./layout/Navbar1";
import ControlledCarousel from "./layout/ControlledCarousel";
import Nosotros from "./layout/Nosotros";
import ScrollHandler from "./components/ScrollHandler";
import Servicios from "./layout/Servicios";
import Clientes from "./layout/Clientes";
import Proyectos from "./layout/Proyectos";
import Galeria from "./layout/Galeria";
import Redes from "./layout/Redes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <ScrollHandler />
        <Navbar2 />
        <ControlledCarousel />
        <Nosotros />
        <Servicios />
        <Clientes />
        <Proyectos />
        <Galeria />
        <Redes />
      </Router>
    </div>
  );
}

export default App;
