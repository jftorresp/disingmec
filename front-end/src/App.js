import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar2 from "./layout/Navbar2";
import Navbar1 from "./layout/Navbar1";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        <Navbar2 />
      </Router>
    </div>
  );
}

export default App;
