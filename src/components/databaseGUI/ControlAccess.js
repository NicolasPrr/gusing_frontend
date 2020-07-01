import React from "react";
import axios from "axios";
import Recaptcha from "react-recaptcha";
import BackURL from "../../UrlBack";
import URLBack from "../../UrlBack";

const Message = ({ type, description }) => {
  return (
    <article className={`message is-${type}`}>
      <div className="message-header">
        <p>Alerta!</p>
      </div>
      <div className="message-body">{description}</div>
    </article>
  );
};

const ControlAcces = () => {
  const [code, setCode] = React.useState("");
  //verificación de captcha
  const [captchaOK, setcaptchaOK] = React.useState(false);

  const [showCaptcha, setShowCaptcha] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [typeAlert, setTypeAlert] = React.useState("success");
  const [description, setDescription] = React.useState("Nothing");

  const handleAlert = (type, description) => {
    setTypeAlert(type);
    setDescription(description);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  const generateCode = () => {
    if (captchaOK) {
      axios
        .get(`${BackURL}/allow_db_download_admins/gen_code`)
        .then((res) => {
          if (res.status === 204) {
            handleAlert("success", "Se ha enviado el correo exitosamente");
          } else {
            handleAlert(
              "warning",
              "Ha ocurrido un problema realizando la solicitud"
            );
          }
        })
        .catch(() => {
          handleAlert("danger", "Ha ocurrido un error realizando la solicitud");
        });
    } else {
      handleAlert("link", "No se ha verficado el captcha");
    }
    setShowCaptcha(false);
  };

  const handleAccess = () => {
    const route = "/allow_db_download_admins/update_permissions_on_db";
    axios
      .post(`${URLBack}${route}`, {
        code: code,
      })
      .then((res) => {
        handleAlert(
          "success",
          "El codigo de acceso es correcto, tiene 2 minutos para hacer el backup"
        );
      })
      .catch((res, status) => {
        handleAlert("danger", "No se ha podido verificar el codigo de acceso");
      });
  };

  return (
    <div>
      {showAlert && <Message type={typeAlert} description={description} />}
      <div className="hero is-fullheight is-bold is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <article className="card is-rounded">
                  <header className="card-header ">
                    <div className="card-header-title ">
                      <p className="title has-text-dark">
                        BackUp de la base de datos
                      </p>
                    </div>
                  </header>
                  <div className="card-content">
                    <p> Descargue el archivo de la actual base de datos </p>
                  </div>
                  <footer className="card-footer">
                    <button
                      className="button is-link is-fullwidth is-medium"
                      onClick={() => window.open(`${BackURL}/databases/now`)}
                    >
                      <span className="icon ">
                        <i className="fas fa-download"></i>
                      </span>
                      <span>Descargar</span>
                    </button>
                  </footer>
                </article>
              </div>

              <div className="column">
                <article className="card is-rounded">
                  <header className="card-header ">
                    <div className="card-header-title ">
                      <p className="title has-text-dark">Permitir acceso</p>
                    </div>
                  </header>
                  <div className="card-content">
                    <p>Introduzca el codigo correspondiente </p>
                    <div className="field">
                      <div className="control">
                        <input
                          value={code}
                          className="input is-warning"
                          type="text"
                          placeholder="Codigo de verificación"
                          maxLength="5"
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="columns">
                      {!showCaptcha && (
                        <div className="column">
                          <a
                            href="#"
                            style={{ fontSize: 10 }}
                            onClick={() => setShowCaptcha(true)}
                          >
                            Obtener clave de accesso
                          </a>
                        </div>
                      )}
                      {showCaptcha && (
                        <div className="column">
                          <div className="container">
                            <Recaptcha
                              type="image"
                              sitekey="6Lfm-qkZAAAAAMhvUEvgIAkxX1lEveEQkTLrbCYX"
                              render="explicit"
                              onloadCallback={() => setcaptchaOK(false)}
                              verifyCallback={() => setcaptchaOK(true)}
                            />
                            <button
                              className="button is-small"
                              onClick={generateCode}
                            >
                              Obtener clave
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <footer className="card-footer">
                    <button
                      className="button is-link is-fullwidth is-medium"
                      onClick={handleAccess}
                    >
                      <span className="icon ">
                        <i className="fas fa-key"></i>
                      </span>
                      <span>Otorgar acceso al backup</span>
                    </button>
                  </footer>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ControlAcces;
