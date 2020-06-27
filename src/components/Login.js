import React, { Component } from "react";
import Recaptcha from "react-recaptcha";
import URLBack from "../UrlBack";
import axios from "axios";
import Swal from "sweetalert2";
import jwt from "jsonwebtoken";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      captchaOK: false,
      showAlert: false,
    };
  }
  pass = React.createRef();
  username = React.createRef();

  handle = (e) => {
    e.preventDefault();
    let username = this.username.current.value;
    let pass = this.pass.current.value;
    if (this.state.captchaOK) {
      axios
        .post(`${URLBack}/user_token`, {
          auth: {
            email: username,
            password: pass,
          },
        })
        .then((res) => {
          // console.log(res)
          Swal.fire({
            type: "success",
            title: "Datos correctos",
            text: "Ha ingresado correctamente al sistema",
            // footer: '<a href>Why do I have this issue?</a>'
          });
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bareer ${res.data.jwt}`;
          localStorage.setItem("jwt", res.data.jwt);
          const time = new Date(jwt.decode(res.data.jwt).exp * 1000);
          console.log(jwt.decode(res.data.jwt));
          // const nows = new Date(Date.now())
          sessionStorage.setItem("exp", time);
          this.props.history.push("/");
        })
        .catch((error) => {
          Swal.fire({
            type: "error",
            title: "Oops...",
            text: "Contraseña o nombre de usuario incorrectos!",
            footer:
              "Consultar el admministrador del sistema si algo no anda bien",
          });
          console.log(error);
        });
    } else {
      this.setState({ showAlert: true }, () => {
        setTimeout(() => {
          this.setState({ showAlert: false });
        }, 4000);
      });
    }
  };
  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) this.props.history.push("/");
  }
  handleLoad() {
    console.log();
  }
  render() {
    return (
      <div>
        {this.state.showAlert && (
          <article className="message is-danger">
            <div className="message-header">
              <p>Ups!</p>
            </div>
            <div class="message-body">
              No se ha verificado el <strong> Captcha</strong>
            </div>
          </article>
        )}

        <div className="hero is-fullheight is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-half is-offset-one-quarter">
                  <article className="card is-rounded">
                    <header className="card-header ">
                      <div className="card-header-title ">
                        <p className="subtitle has-text-dark">
                          Ingresar al sistema de reportes
                        </p>
                      </div>
                    </header>
                    <form onSubmit={this.handle}>
                      <div className="card-content">
                        <div className="field">
                          <label className="label">Nombre de usuario</label>
                          <div className="control has-icons-left has-icons-right">
                            <input
                              ref={this.username}
                              className="input is-dark"
                              type="text"
                            />
                            <span className="icon is-small is-left">
                              <i className="fas fa-user"></i>
                            </span>
                          </div>
                        </div>
                        <div className="field">
                          <p className="control has-icons-left">
                            <input
                              ref={this.pass}
                              className="input is-danger"
                              type="password"
                              placeholder="Password"
                            />
                            <span className="icon is-small is-left">
                              <i className="fas fa-lock"></i>
                            </span>
                          </p>
                        </div>
                        <div className="columns is-mobile is-centered">
                          <div className="column is-half">
                            <Recaptcha
                              sitekey="6Lfm-qkZAAAAAMhvUEvgIAkxX1lEveEQkTLrbCYX"
                              render="explicit"
                              onloadCallback={(e) =>
                                console.log("captcha is ok")
                              }
                              verifyCallback={(e) =>
                                this.setState({ captchaOK: true })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <button
                          className="button is-light is-fullwidth is-medium"
                          type="submit"
                        >
                          <span className="icon ">
                            <i className="fas fa-door-open"></i>
                          </span>
                          <span>Entrar</span>
                        </button>
                      </footer>
                    </form>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
