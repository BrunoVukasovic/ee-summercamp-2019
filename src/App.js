import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  LandingPage,
  LandTours,
  SeaTours,
  Adventures,
  Krka,
  BlueCave
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/land-tours" component={LandTours} />
        <Route path="/sea-tours" component={SeaTours} />
        <Route path="/adventures" component={Adventures} />
        <Route path="/blue-cave" component={BlueCave} />
        <Route path="/krka" component={Krka} />
      </Switch>
    </Router>
  );
}

export default App;
