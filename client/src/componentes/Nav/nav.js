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
import Image from "react-bootstrap/Image";

// redux
import { connect } from "react-redux";
// y si quiero cambios en la store los actions
// exammple import { getAllCities } from "../../store/actions/citiesActions";

const jwt = require("jsonwebtoken");

class NavbarMain extends React.Component {
  state = {
    userName: '',
    token: '',
    imageUrl: ''
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const tokenDecoded = jwt.decode(token);
    this.setState({ token });
    if (localStorage.getItem('success') === 'true') {
      const userName = tokenDecoded.username;
      // console.log(tokenDecoded)
      const imageUrl = tokenDecoded.picture
      this.setState({ imageUrl });
      this.setState({ userName })
    }
  }

  render() {

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Nav className="mr-auto">
{
            localStorage.getItem('success') === 'true'
              ?
              <div class="dropdown">
                <a class="" type="" id="expandLogOut" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="containerImageProfile">
                    <Image
                      src={this.state.imageUrl}
                      style={{ width: "60px", height: "60px", borderRadius: "50%", padding: '5%' }}
                      alt="imageProfile"
                    />
                  </div>
                </a>
                <div class="dropdown-menu" aria-labelledby="expandLogOut">
                  <NavDropdown.Item className="dropdown-item">
                    <span style={{ marginLeft: "5px" }}>¡Hi {this.state.userName}!</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown-item" as={Link} to="/logout">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <span style={{ marginLeft: "5px" }}>Logout</span>
                  </NavDropdown.Item>
                </div>
              </div>
              :
              <NavDropdown
                title="User"
                id="collasible-nav-dropdown"
                className="NavMainDrop m-1"
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
          }
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

const mapStateToProps = (state) => {
  return ({
    successStore: state.sesionReducer.success
  })
};
export default connect(mapStateToProps)(NavbarMain);