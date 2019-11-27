import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

// Imagenes
import logoImage from "../../images/MYtineraryLogo.png";
import circleImage from "../../images/circled-right-2.png";

import Carousel2 from "../Carousel2/Carousel2";
import NavBar from "../Nav/nav";

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <img
            id="imgPrimary"
            alt="text"
            className="pt-3 m-5"
            src={logoImage}
          />
          <div className="bg-dark text-white rounded m-2">
            <p className="text-center p-4">
              Find your perfect trip, designed by insiders who know and love
              their cities
            </p>
          </div>
          <div className="w-20 p-3">
            <div className="btn w-25 m-auto d-block">
              <Link to="/cities">
                <img className="w-100" src={circleImage} alt="button2" />
              </Link>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              background: "#343a40",
              padding: "10px",
              marginTop: "20px",
              marginBottom: "40px"
            }}
          >
            <Carousel2 />
          </div>
        </div>
      </>
    );
  }
}
