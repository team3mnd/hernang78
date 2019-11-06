import React from 'react';
 import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faBars} from '@fortawesome/free-solid-svg-icons'
class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark w-100">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#login">
          <FontAwesomeIcon icon= {faUserCircle} />
        </button>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_data">
        <FontAwesomeIcon icon= {faBars} />
        </button>

        <div className="collapse navbar-collapse" id="login">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Create acount</a>
            </li>
            <li>
              <a className="nav-link active" href="#">Login</a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="collapse_data">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li>
              <a className="nav-link active" href="#">Cities</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;