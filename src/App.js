import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import {
  LandingPage,
  LandTours,
  SeaTours,
  Adventures,
  MyTrips,
  Users,
  Register
} from "./pages";
import { Krka, BlueCave } from "./pages/trips";
import Login from "./components/Private/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/land-tours" component={LandTours} />
          <Route path="/sea-tours" component={SeaTours} />
          <Route path="/adventures" component={Adventures} />
          <Route path="/blue-cave" component={BlueCave} />
          <Route path="/krka" component={Krka} />
          <Route path="/my-trips" component={MyTrips} />
          <Route path="/users" component={Users} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
