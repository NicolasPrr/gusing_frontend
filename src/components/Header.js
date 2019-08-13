import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    if (window.location.pathname.includes("print")) return null;
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <div className="navbar-item" >
              <img alt ="gusing" src="/resources/LogoInpv2.png" width="130" height="100" />
            </div>
          </div>

          <div id="buggerg" className="navbar-menu is-active">
            <div className="navbar-start">
              <Link className="navbar-item" to="/"   >
                Pagina principal</Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  Listar reportes
                  </div>
                <div className="navbar-dropdown">
                     <Link className="navbar-item" to={{pathname: "/report_waters/reports" , state: 0}}   >
                       Aguas
                     </Link>
                     <Link className="navbar-item" to="/report_capsules/reports"   >
                       Capsulas
                     </Link>
                     <Link className="navbar-item" to="/reports/"   >
                       Insumos
                     </Link>
                     <Link className="navbar-item" to="/report_liquids/reports"   >
                       Liquidos
                     </Link>
                     <Link className="navbar-item" to="/report_materials/reports"   >
                       Materia prima
                     </Link>
                     <Link className="navbar-item" to="/report_dusts/reports"   >
                       Polvos granulados
                     </Link>
                     <Link className="navbar-item" to="/report_semisolids/reports"   >
                       Semisolidos
                     </Link>
                     <Link className="navbar-item" to="/report_tablets/reports"   >
                       Tabletas
                     </Link>
                     <Link className="navbar-item" to="/report_microbiologies/reports"   >
                       Microbiologia
                     </Link>
                </div>
              </div>

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