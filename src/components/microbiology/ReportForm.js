import React, { Component } from "react";
import axios from 'axios';
import URLBack from '../../UrlBack'
  
class ReportForm extends Component {
  //Formulario para creación de reporte.
  constructor(props) {
    super(props);

    this.handleForm = this.handleForm.bind(this)
    this.changeDirection = this.changeDirection.bind(this);

    this.state = {
      clients: [],
    };

  }

  changeDirection() {
    const vl = this.client_name.current.value;
    for (var i = 0; i < this.state.clients.length; i++) {
      if (vl === this.state.clients[i].name) {
        this.direction.current.value = this.state.clients[i].direction;
        i = this.state.clients.length;

      }
    }
  }

  report = React.createRef();
  client_name = React.createRef();
  direction = React.createRef();
  analisys = React.createRef();
  lot = React.createRef();
  name_provider = React.createRef();
  method = React.createRef();
  sample = React.createRef();
  sample_name = React.createRef();
  sample_code = React.createRef();
  farmaceutic_shape = React.createRef();
  sampling_type = React.createRef();

  ff = React.createRef();
  fv = React.createRef();
  report_date = React.createRef();
  reception_date = React.createRef();
  sampling_date = React.createRef();
  analisis_date = React.createRef();




  /*<ReportGarnic obj={this.props.obj} />
  */

  handleForm = (e) => {
    e.preventDefault()
    console.log(this.props.data.sample)
    const data = {

      sample: this.sample.current.value,
      sample_name: this.sample_name.current.value,
      sample_code: this.sample_code.current.value,
      report_number: this.report.current.value,
      client_name: this.client_name.current.value,
      direction: this.direction.current.value,
      analisys: this.analisys.current.value,
      lot: this.lot.current.value,
      name_provider: this.name_provider.current.value,
      method: this.method.current.value,
      farmaceutic_shape: this.farmaceutic_shape.current.value,
      sampling_type: this.sampling_type.current.value,


      ff: this.ff.current.value,
      fv: this.fv.current.value,
      date_sampling: this.sampling_date.current.value,
      date_analisis: this.analisis_date.current.value,
      date_reception: this.reception_date.current.value,
      date_report: this.report_date.current.value,
      observation: this.props.data.observation
    }
    this.props.reportAction(data)
  }
  componentDidMount() {
    let url = URLBack + "/clients";
    axios.get(url).then(res => {
      if (res.status === 200) {
        this.setState({ clients: res.data })
      }
    })
      .catch(function (error) {
        console.log(error)
      });

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}  >
          <p>N°de reporte ensayo FQ </p>

          <input
            className="input is-small is-link"
            type="text"
            placeholder="Numero de reporte"
            ref={this.report}
            defaultValue={this.props.data.report_number}
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
                  list="dataclients"
                  ref={this.client_name}
                  defaultValue={this.props.data.client_name}
                  onChange={this.changeDirection}
                />

                <datalist id="dataclients">
                  {Object.keys(this.state.clients).map(key => (
                    <option value={this.state.clients[key].name} key={key} />
                  ))}

                </datalist>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Fecha de muestreo</label>
                  </div>

                  <input
                    className="input is-small"
                    type="text"
                    placeholder="Fecha de muestreo"
                    ref={this.sampling_date}
                    defaultValue={this.props.data.date_sampling}
                  />
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Fecha de analisis</label>
                  </div>

                  <input
                    className="input is-small"
                    type="text"
                    placeholder="Fecha de analisis"
                    ref={this.analisis_date}
                    defaultValue={this.props.data.date_analisis}
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
                      placeholder="Muestra"
                      ref={this.sample}
                      defaultValue={
                        this.props.data.sample
                      }
                      list="samples"
                    />
                    <datalist id="samples">
                      {Object.keys(this.props.options.samples).map(key => (
                        <option value={this.props.options.samples[key]} key={key} />
                      ))}
                    </datalist>
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
                      ref={this.sample_name}
                      defaultValue={
                        this.props.data.sample_name
                      }

                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Codigo de la muestra</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Codigo de la muestra"
                      ref={this.sample_code}
                      defaultValue={
                        this.props.data.sample_code
                      }

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
                      defaultValue={this.props.data.analisys}

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
                      defaultValue={this.props.data.lot}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Nombre de proveedor</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Nombre de la muestra"
                      ref={this.name_provider}
                      defaultValue={this.props.data.name_provider}
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
                  defaultValue={this.props.data.direction}
                />
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Fecha de recepcion</label>
                  </div>
                  <input
                    className="input is-small"
                    type="text"
                    placeholder="Fecha de recepción"
                    ref={this.reception_date}
                    defaultValue={this.props.data.date_reception}
                  />
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Fecha de informe</label>
                  </div>
                  <input
                    className="input is-small"
                    type="text"
                    placeholder="Fecha de infrome"
                    ref={this.report_date}
                    defaultValue={this.props.data.date_report}
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
                      ref={this.sampling_type}
                      defaultValue="Aleatorio"
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
                      placeholder="Forma farmaceutica"
                      ref={this.farmaceutic_shape}
                      defaultValue={this.props.data.farmaceutic_shape}
                      list="shapes"
                    />
                    <datalist id="shapes">
                      {Object.keys(this.props.options.shapes).map(key => (
                        <option value={this.props.options.shapes[key]} key={key} />
                      ))}
                    </datalist>
                  </div>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">FF</label>
                  </div>
                  <input
                    className="input is-small"
                    type="text"
                    placeholder="Nombre de la muestra"
                    ref={this.ff}
                    defaultValue={this.props.data.ff}
                  />
                </div>

                <div className="column">
                  <div className="field">
                    <label className="label is-small">FV</label>
                  </div>
                  <input
                    className="input is-small"
                    type="text"
                    placeholder="Nombre de la muestra"
                    ref={this.fv}
                    defaultValue={this.props.data.fv}
                  />

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
                      defaultValue={this.props.data.method}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Tecnica de analisis</label>
                  </div>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      ref={this.method}
                      defaultValue={this.props.data.method}
                      list="tec"
                    />
                  </div>
                  <datalist id="tec">
                    {Object.keys(this.props.options.methods).map(key => (
                      <option value={this.props.options.methods[key]} key={key} />
                    ))}
                  </datalist>
                </div>
              </div>
              {/*second column main*/}
            </div>
          </div>
          <div className="field">
           
          </div>
          <button className="button is-small is-info" type="submit"> Siguiente </button>

        </form>
      </div>
    );
  }
}

export default ReportForm;
