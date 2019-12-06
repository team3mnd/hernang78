import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//footer
import Footer from '../Footer/Footer';
// Imagenes
import logoImage from "../../images/MYtineraryLogo.png";

import Carousel2 from "../Carousel2/Carousel2";
import NavBar from "../Nav/nav";

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
          <div className="w-100">
            <div className="w-100 p-5 d-flex flex-column justify-content-center align-items-center">
              <img
                id="imgPrimary"
                alt="text"
                className="w-50 p-2"
                src={logoImage}
              />
            </div>
            <div className="box w-100 d-flex  flex-column justify-content-center align-items-center ">
              <div className="d-flex flex-column justify-content-center">
                <p className="texto w-75 m-auto">
                  Find your perfect trip, designed by insiders who know and love
                  their cities
              </p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <Carousel2 />
            </div>
          </div>
          <Footer />
      </>
        );
      }
    }
