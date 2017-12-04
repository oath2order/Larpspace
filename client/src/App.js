import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import Player from "./pages/Player";
import Builder from "./pages/Builder";
import Navbar from "./components/Navbar.js";
import Background from "./components/Background";

const App = () => (
  <Router>
    <Auth>
      <div>
        <Background backgroundImage="https://www.toptal.com/designers/subtlepatterns/patterns/sakura.png">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Owner" component={Owner} />
          <Route exact path="/Player" component={Player} />
          <Route exact path="/Builder" component={Builder} />
        </Background>
      </div>
    </Auth>
  </Router>
);

export default App;
