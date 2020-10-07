import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import DashboardGen1 from "./components/layout/DashboardGen1";
import DashboardGen2 from "./components/layout/DashboardGen2";
import DashboardGen3 from "./components/layout/DashboardGen3";
import DashboardGen4 from "./components/layout/DashboardGen4";
import DashboardGen5 from "./components/layout/DashboardGen5";
import DashboardGen6 from "./components/layout/DashboardGen6";
import DashboardGen7 from "./components/layout/DashboardGen7";
import Pokemon from "./components/pokemon/Pokemon";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/gen1" component={DashboardGen1} />
            <Route exact path="/gen2" component={DashboardGen2} />
            <Route exact path="/gen3" component={DashboardGen3} />
            <Route exact path="/gen4" component={DashboardGen4} />
            <Route exact path="/gen5" component={DashboardGen5} />
            <Route exact path="/gen6" component={DashboardGen6} />
            <Route exact path="/gen7" component={DashboardGen7} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Dashboard />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
