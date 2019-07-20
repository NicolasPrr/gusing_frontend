import React, { Component } from 'react';
import baseURLFront from './Urlpage'
import { Link, Switch, Redirect } from 'react-router-dom';

class Header extends Component {

  render() {
    if (window.location.pathname.includes("print")) return null;
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <a className="navbar-item" >
              <img src="/resources/LogoInpv2.png" width="130" height="100" />
            </a>
          </div>

          <div id="buggerg" className="navbar-menu is-active">
            <div className="navbar-start">
              <a className="navbar-item" href={baseURLFront} >
                Pagina principal</a>
              <Link className="navbar-item" to="/insumos/"   >
                Insumos</Link>
              <Link className="navbar-item" to="/reports/"   >
                Reportes</Link>
              <Link className="navbar-item" to='/clients' >
                Gestion de clientes</Link>
              <Link className="navbar-item" to='/database' >
                Archivo BackUp</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;