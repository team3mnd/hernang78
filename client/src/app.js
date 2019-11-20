import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Cities from './componentes/Cities/cities';
import Home from './componentes/Home/home';
import Login from './componentes/Login/login';
import Signup from './componentes/Signup/signup';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavbarMain from './componentes/Nav/nav';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//redux
import { Provider } from "react-redux";
import store from "./store/store";

export default class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        <Router>
          <NavbarMain />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/cities" component={Cities}
            ><Cities></Cities></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}