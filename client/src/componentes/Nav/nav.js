import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import "./NavbarMain.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
   
export default class NavbarMain extends React.Component {
  render() {
    return (
      <div className="MainNavbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Nav className="mr-auto">
            <NavDropdown title="User" id="collasible-nav-dropdown" className="NavMainDrop">
              <NavDropdown.Item><Link to="/signup" className="dropdown-item"><FontAwesomeIcon icon={faUserCircle} /> Create Acount</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/login" className="dropdown-item">Log in</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="NavOption">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Link to="/" className="text-right navItem"><FontAwesomeIcon icon={faHome} /> Home</Link>
                <Link to="/cities" className="text-right navItem"><FontAwesomeIcon icon={faCity} /> Cities</Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>

    );
  }
}