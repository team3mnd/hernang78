import React from 'react';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import BottonAccess from './componentes'
class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark w-100">

        <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="menu" >
          <ul className="navbar-nav"  >
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faUserCircle} /> Acount
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <BottonAccess title="Log in" className="dropdown-item"></BottonAccess>
                <BottonAccess title="Create Account" className="dropdown-item"></BottonAccess>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
            </li>
            <li>
              <a className="nav-link active" href="#"><FontAwesomeIcon icon={faCity} /> Cities</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;