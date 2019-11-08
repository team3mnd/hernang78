import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import BottonAccess from './componentes/componentes';

class Nav extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark w-100">

          <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="collapse navbar-collapse" id="menu" >
            <ul className="navbar-nav"  >
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faUserCircle} /> Acount
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/login" className="dropdown-item">Log in</Link>
                  <Link to="/signup" className="dropdown-item">Create Acount</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" ><FontAwesomeIcon icon={faHome} /> Home</Link>
              </li>
              <li>
                <Link to="/cities" className="nav-link active"><FontAwesomeIcon icon={faCity} /> Cities</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Nav;