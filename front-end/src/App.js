import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import Footer from "./layout/Footer";
import Services from "./components/Services";
import SolucionesBanner from "./layout/SolucionesBanner";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <ScrollHandler />
        <Navbar2 />
        <Switch>
          <Route exact path="/">
            <ControlledCarousel />
            <Nosotros />
            <Servicios />
            <Clientes />
            <Proyectos />
            <Galeria />
          </Route>
          <Route path="/servicios">
            <Services />
          </Route>
          <Route path="/proyectos">
            <p>Hola</p>
          </Route>
          <Route path="/contacto">
            <p>Chao</p>
          </Route>
          <Route path="/soluciones">
            <SolucionesBanner />
          </Route>
        </Switch>
        <Redes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
