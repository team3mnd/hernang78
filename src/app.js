import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, { Component } from 'react';
import Nav from './nav'
import Cities from './cities';
import Home from './home';
import Login from './login';
import Signup from './signup';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/cities" component={Cities}
          ><Cities></Cities></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </Router>

    );
  }
}