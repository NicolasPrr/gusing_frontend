import React, { Component } from "react";

import DatePicker from "react-datepicker";
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    //       this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <p>N°de reporte ensayo FQ </p>
        <input
          className="input is-small"
          type="text"
          placeholder="Numero de reporte"
          ref={this.name}
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
                ref={this.name}
              />
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <div className="field">
                  <label className="label is-small">Fecha de muestreo</label>
                </div>
                <DatePicker
                  className="input is-small"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
              </div>
              <div className="column">
                <div className="field">
                  <label className="label is-small">Fecha de analisis</label>
                </div>
                <DatePicker
                  className="input is-small"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
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
                    value={this.props.sample}
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
                    value={this.props.garnic.name}
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
                    ref={this.name}
                   
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
                    ref={this.name}
                   
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
                ref={this.name}
              />
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <div className="field">
                  <label className="label is-small">Fecha de recepcion</label>
                </div>
                <DatePicker
                  className="input is-small"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
              </div>
              <div className="column">
                <div className="field">
                  <label className="label is-small">Fecha de informe</label>
                </div>
                <DatePicker
                  className="input is-small"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
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
                    value="Aleatoreo"
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
                    value="N.A."
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
                    ref={this.name}
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
                    ref={this.name}
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
                    ref={this.name}
                  />
                </div>
              </div>
            </div>

            {/*second column main*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
