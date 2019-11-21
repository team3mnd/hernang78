import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// import {render} from 'react-dom';
import Cities from './componentes/Cities/cities';
import Home from './componentes/Home/home';
import Login from './componentes/Login/login';
import Signup from './componentes/Signup/signup';
import NavbarMain from './componentes/Nav/nav';
import Itinerary from './componentes/Itinerary/Itinerary'
// import Carousel2 from './componentes/Carousel2/Carousel2';
// import $ from 'jquery';
// import Popper from 'popper.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities/:country/:city" component={Itinerary} />
          <Route path="/cities" component={Cities} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>

    );
  }
}