import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import {render} from 'react-dom';
import img from './images/MYtineraryLogo.png';
import img2 from './images/circled-right-2.png';
import BottonAccess from './componentes/componentes.js';
import Carousel2 from './componentes/Carousel2/Carousel2';

import Carousel from 'react-bootstrap-carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


var root = document.getElementById('root');

class App extends Component {

  render(){
    return (
      <div className="w-100 d-flex flex-column justify-content-center">
        <div>
          <img alt="text" className="m-auto w-75 d-block" src={img} />
        </div>
        <p className="w-75 m-auto pt-5">Find your perfect trip, designed by insiders who know and love their cities</p>

        <div className=" my-5 w-100">
          <h2 className="m-auto w-50">Start browsing</h2>
          <button className="btn w-25 m-auto d-block">
            <a href="#">
              <img className="w-100" src={img2} alt="button2" />
            </a>
          </button>
        </div>
        <p className="d-block text-center">want to build your own MYtinerary</p>
        <div className="d-inline-block m-auto">
          <BottonAccess title="Log in"></BottonAccess>
          <BottonAccess title="Create Account"></BottonAccess>
        </div>
        <Carousel2 />
      </div>
      );
  }
}

render(<App />,root);