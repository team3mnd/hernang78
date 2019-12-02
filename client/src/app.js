// Funcionales
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Cities from "./componentes/Cities/cities";
import Home from "./componentes/Home/home";
import Login from "./componentes/Login/login";
import Signup from "./componentes/Signup/signup";
import ListItinerary from "./componentes/Itinerary/ListItinerary";
import logout from "./componentes/Logout/logout";


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities/:country/:city" component={ListItinerary} />
          <Route path="/cities" component={Cities} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" component={logout} />
        </Switch>
      </Router>
    );
  }
}
