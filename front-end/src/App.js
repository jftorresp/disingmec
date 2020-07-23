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
import Tebsa from "./layout/Tebsa";
import Services from "./components/Services";
import SolucionesBanner from "./layout/SolucionesBanner";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollUpButton from "react-scroll-up-button";

function App() {
  return (
    <div className="App" id="main">
      <Router>
        <Navbar1 />
        <ScrollHandler />
        <Navbar2 />
        <ScrollUpButton />
        <Switch>
          <Route exact path="/">
            <ControlledCarousel />
            <Nosotros />
            <Servicios />
            <Clientes />
            <Proyectos />
            <Galeria />
          </Route>
          <Route path="/proyectos">
            <Projects />
          </Route>
          <Route path="/servicios">
            <Services />
          </Route>
          <Route path="/proyectos">
            <p>Hola</p>
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/soluciones">
            <SolucionesBanner />
          </Route>
          <Route path="/tebsa">
            <Tebsa />
          </Route>
        </Switch>
        <Redes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
