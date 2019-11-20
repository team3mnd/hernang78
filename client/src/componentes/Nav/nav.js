import React from "react";
import { Link } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import "./NavbarMain.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default class NavbarMain extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <NavDropdown
            title="User"
            id="collasible-nav-dropdown"
            className="NavMainDrop"
          >
            <NavDropdown.Item className="dropdown-item" as={Link} to="/signup">
              <FontAwesomeIcon icon={faUserCircle} />
              <span style={{ marginLeft: "5px" }}>Create Account</span>
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" as={Link} to="/login">
              <FontAwesomeIcon icon={faSignInAlt} />
              <span style={{ marginLeft: "5px" }}>Log in</span>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/" className="text-right navItem">
              <FontAwesomeIcon icon={faHome} />
              <span style={{ marginLeft: "5px" }}>Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/cities" className="text-right navItem">
              <FontAwesomeIcon icon={faCity} />
              <span style={{ marginLeft: "5px" }}>Cities</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
