import React, { Component } from "react";
import DatePicker from "react-datepicker";
class Report extends Component {

  constructor(props) {
    super(props);
    this.handleSampling = this.handleSampling.bind(this);
    this.handleAnalisys = this.handleAnalisys.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.handleReception = this.handleReception.bind(this);
    this.handleForm = this.handleForm.bind(this)

    this.state = {
      samplingDate: new Date(),
      analisysDate: new Date(),
      receptionDate: new Date(),
      reportDate: new Date(),
    };
    //       this.handleChange = this.handleChange.bind(this);
  }


  handleSampling(date) {
    this.setState({
      samplingDate: date
    });
  }
  handleAnalisys(date) {
    this.setState({
      analisysDate: date
    });
  }
  handleReception(date) {
    this.setState({
      receptionDate: date
    });
  }
  handleReport(date) {
    this.setState({
      reportDate: date
    });
  }

  report = React.createRef();
  client_name = React.createRef();
  direction = React.createRef();
  analisys = React.createRef();
  lot = React.createRef();
  ff = React.createRef();
  fv = React.createRef();
  method = React.createRef();
  /*<ReportGarnic obj={this.props.obj} />
    */

  handleForm = (subform) => {
    const data = {
      rerport_number: this.report.current.value,
      client_name: this.client_name.current.value,
      direction: this.direction.current.value,
      analisys: this.analisys.current.value,
      lot: this.lot.current.value,
      ff: this.ff.current.value,
      fv: this.fv.current.value,
      method: this.method.current.value
    }
    console.log(data)
    console.log(subform)

  }


  render() {
    return (
      <div>
        <form >
          <p>N°de reporte ensayo FQ </p>
          <input
            className="input is-small"
            type="text"
            placeholder="Numero de reporte"
            ref={this.report}
          />
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label is-small">Cliente</label>
              </div>
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Nombre del cliente"
                  list ="dataclients"
                  ref={this.client_name}
                />

                <datalist id="dataclients">
                        <option value="Cliente 1" />
                        <option value="Cl2 1" />
                        <option value="Cl3 " />
                    
                </datalist>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Fecha de muestreo</label>
                  </div>
                  <DatePicker
                    className="input is-small"
                    selected={this.state.samplingDate}
                    onChange={this.handleSampling}
                  />
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Fecha de analisis</label>
                  </div>
                  <DatePicker
                    className="input is-small"
                    selected={this.state.analisysDate}
                    onChange={this.handleAnalisys}
                  />
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Muestra</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Nombre de la muestra"
                      ref={this.name}
                      defaultValue={this.props.sample}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Nombre de la muestra</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Nombre de la muestra"
                      ref={this.name}
                      defaultValue={this.props.obj.name}
                    />
                  </div>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">N° de analisis</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Nombre de la muestra"
                      ref={this.analisys}

                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Lote de proveedor</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Nombre de la muestra"
                      ref={this.lot}

                    />
                  </div>
                </div>
              </div>

              {/*first column main*/}
            </div>

            <div className="column">
              <div className="field">
                <label className="label is-small">direccion</label>
              </div>
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="direccion del cliente"
                  ref={this.direction}
                />
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Fecha de recepcion</label>
                  </div>
                  <DatePicker
                    className="input is-small"
                    selected={this.state.receptionDate}
                    onChange={this.handleReception}
                  />
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Fecha de informe</label>
                  </div>
                  <DatePicker
                    className="input is-small"
                    selected={this.state.reportDate}
                    onChange={this.handleReport}
                  />
                </div>
              </div>

              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Tipo de muestreo</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Nombre de la muestra"
                      ref={this.name}
                      defaultValue="Aleatoreo"
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Forma farmaceutica</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Nombre de la muestra"
                      ref={this.name}
                      defaultValue="N.A."
                    />
                  </div>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">FF</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      ref={this.ff}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">FV</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      ref={this.fv}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Metodo de analisis</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      ref={this.method}
                    />
                  </div>
                </div>
              </div>
              {/*second column main*/}
            </div>
          </div>
         
          

        </form>


      </div>
    );
  }
}

export default Report;
