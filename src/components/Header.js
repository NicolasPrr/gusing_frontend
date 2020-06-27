import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken'
function getName() {
  const token = localStorage.getItem('jwt')
  if (token === null) return null
  const name = jwt.decode(token).name
  return name
}
function toUsers() {
  //Link para usuario
  const token = localStorage.getItem('jwt')
  if (token === null) return null
  const rol = jwt.decode(token).rol
  // console.log(jwt.decode(token))
  if (rol === 0)
    return (
      <Link className="navbar-item" to={{ pathname: "/users", state: 0 }}   >
        Usuarios
  </Link>
    )
}
function toBackUp() {
  //Link para usuario
  const token = localStorage.getItem('jwt')
  if (token === null) return null
  const rol = jwt.decode(token).rol
  // console.log(jwt.decode(token))
  if (rol === 0)
    return (
      <Link className="navbar-item" to='/database' >
        Archivo BackUp</Link>
    )
}
class Header extends Component {
  signOut = () => {
    localStorage.clear()
    delete axios.defaults.headers.common['Authorization']
    window.location.reload()
  }


  render() {
    const pathname = window.location.pathname
    if (pathname.includes("print") || pathname.includes("login")) return null;
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <div className="navbar-item" >
              {/* <img alt="gusing" src="/resources/LogoInpv2.png" width="130" height="100" /> */}
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
                  <Link className="navbar-item" to={{ pathname: "/report_waters/reports", state: 0 }}   >
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
              {toBackUp()}
              <Link className="navbar-item" to='/clients' >
                Gestion de clientes</Link>
            </div>
          </div>
          <div className="navbar-end">
            {toUsers()}
            <div className="navbar-item">
              <span className="tag is-warning is-small"> {getName()} </span>
            </div>

            <div className="navbar-item">
              <button className="button is-danger" onClick={this.signOut.bind(this)}> Salir </button>
            </div>

          </div>
        </nav>
      </div>
    );
  }
}

export default Header;