import React, { Component } from "react";
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
  Users
} from "./pages";
import {
  BlueCave,
  Brac,
  Canyoning,
  Diving,
  Dubrovnik,
  Krka,
  Plitvice,
  Rafting,
  Sailing,
  ZipLine
} from "./pages/trips";
import { Login } from "./components";
import { BookNow } from "./components";

class App extends Component {
  componentDidMount() {
    const loading = document.getElementById("loading");
    if (loading) {
      loading.outerHTML = "";
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/land-tours" component={LandTours} />
            <Route path="/sea-tours" component={SeaTours} />
            <Route path="/adventures" component={Adventures} />
            <Route path="/blue-cave" component={BlueCave} />
            <Route path="/my-trips" component={MyTrips} />
            <Route path="/users" component={Users} />
            <Route path="/login" component={Login} />
            <Route path="/book-now" component={BookNow} />
            <Route path="/brac" component={Brac} />
            <Route path="/canyoning" component={Canyoning} />
            <Route path="/diving" component={Diving} />
            <Route path="/dubrovnik" component={Dubrovnik} />
            <Route path="/krka" component={Krka} />
            <Route path="/plitvice" component={Plitvice} />
            <Route path="/rafting" component={Rafting} />
            <Route path="/sailing" component={Sailing} />
            <Route path="/zip" component={ZipLine} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
