import React, { Component } from 'react';
import baseURLFront from './Urlpage'
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <a className="navbar-item" >
              <img src="/resources/LogoGusing.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
            <div className="navbar-burger burger" data-target="buggerg">
              <span></span>
              <span></span>
              <span></span>

            </div>
          </div>

          <div id="buggerg" className="navbar-menu">
            <div className="navbar-start">

              <a className="navbar-item" href={baseURLFront} >
                Pagina principal

      </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Insumos

        </a>
                <div className="navbar-dropdown is-boxed">
                  <Link to='/colapsible/garnic' className="navbar-item">Colapsible garnic</Link>
                  <Link to='/colapsible/normal' className="navbar-item">Colapsible normal</Link>
                  <Link to='/colapsible/desflant/normal' className="navbar-item">Colapsible desflant</Link>
                  <hr className="navbar-divider" />
                  <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                    Crear informe
          </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;