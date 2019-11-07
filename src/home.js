import img from './images/MYtineraryLogo.png';
import img2 from './images/circled-right-2.png';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="pb-5">
          <img alt="text" className="m-auto w-50 d-block pt-3" src={img} />
        </div>
        <div className="bg-dark text-white rounded">
          <p class="text-center p-3">Find your perfect trip, designed by insiders who know and love their cities</p>
        </div>
        <div className="w-20 p-3">
          <button className="btn w-25 m-auto d-block">
              <img className="w-100" src={img2} alt="button2" />
          </button>
        </div>
      </div>);
  }
}
