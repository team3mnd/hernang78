import img from '../../images/MYtineraryLogo.png';
import img2 from '../../images/circled-right-2.png';
import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Carousel2 from '../Carousel2/Carousel2';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <div id="containerImg" className="pb-5">
          <img id="imgPrimary" alt="text" className="pt-3" src={img} />
        </div>
        <div className="bg-dark text-white rounded">
          <p className="text-center p-3">Find your perfect trip, designed by insiders who know and love their cities</p>
        </div>
        <div className="w-20 p-3">
          <div className="btn w-25 m-auto d-block">
              <Link to="/cities"><img className="w-100" src={img2} alt="button2" /></Link>
          </div>
        </div>
        <Carousel2 />
      </div>);
  }
}
