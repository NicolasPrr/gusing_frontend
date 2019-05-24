import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from 'axios';
import URLBack from '../../../UrlBack'
import Switch from '../../bulma/Switch'


function isEmptyObject(obj) {
  return (Object.getOwnPropertyNames(obj).length === 0);
}
function chooseFormat(isTrue) {
  if (isTrue) {
    return "MMM-yy"
  }
  return "dd-MMM-yy" //Only mmm-yy
}
class ReportForm extends Component {
  //Formulario para creación de reporte.
  constructor(props) {
    super(props);
    this.handleSampling = this.handleSampling.bind(this);
    this.handleAnalisys = this.handleAnalisys.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.handleReception = this.handleReception.bind(this);
    this.handleExpiration = this.handleExpiration.bind(this);
    this.handleFabrication = this.handleFabrication.bind(this);
    this.changeDirection = this.changeDirection.bind(this);

    this.handleForm = this.handleForm.bind(this)
    this.changeDateFormat = this.changeDateFormat.bind(this)

    this.state = {
      samplingDate: new Date(),
      analisysDate: new Date(),
      receptionDate: new Date(),
      reportDate: new Date(),
      manufactoringDate: new Date(),
      expirationDate: new Date(),
      clients: [],
      formatFF: false,
      formatFV: false,

    };

  }

  changeDateFormat(id, now) {
    this.setState({ [id]: now })
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
  handleFabrication(date) {
    this.setState({
      manufactoringDate: date
    });
  }

  handleExpiration(date) {
    this.setState({
      expirationDate: date
    });
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
  ff = React.createRef();
  fv = React.createRef();
  method = React.createRef();
  sample = React.createRef();
  sample_name = React.createRef();
  farmaceutic_shape = React.createRef();
  sampling_type = React.createRef();

  /*<ReportGarnic obj={this.props.obj} />
  */

  handleForm = (e) => {
    e.preventDefault()
    console.log(this.props.data.sample)
    const data = {

      sample: this.sample.current.value,
      sample_name: this.sample_name.current.value,
      report_number: this.report.current.value,
      client_name: this.client_name.current.value,
      direction: this.direction.current.value,
      analisys: this.analisys.current.value,
      lot: this.lot.current.value,
      name_provider: this.name_provider.current.value,
      method: this.method.current.value,
      farmaceutic_shape: this.farmaceutic_shape.current.value,
      sampling_type: this.sampling_type.current.value,

      ff: this.state.manufactoringDate,
      fv: this.state.expirationDate,
      date_sampling: this.state.samplingDate,
      date_analisis: this.state.analisysDate,
      date_reception: this.state.receptionDate,
      date_report: this.state.reportDate,
      formatFF: this.state.formatFF,
      formatFV: this.state.formatFV,
    }
    this.props.reportAction(data)
  }
  componentDidMount() {
    setTimeout(() => {
      const data = this.props.data
      if (data != null) {
        this.setState(
          {
            reportDate: data.date_report,
            samplingDate: data.date_sampling,
            analisysDate: data.date_analisis,
            receptionDate: data.date_reception,
            expirationDate: data.fv,
            manufactoringDate: data.ff,
            formatFF: data.formatFF,
            formatFV: data.formatFV
          })
      }
    }, 1500);

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
    let samples;
    let samples_name;
    let method = "Dimensional"
    if (!isEmptyObject(this.props.data)) {
      samples = this.props.data.sample;
      samples_name = this.props.data.sample_name;
      method = this.props.data.method;
    }
    console.log("Props")
    console.log(this.props)

    return (
      <div className="notification" >
        <form onSubmit={this.handleForm}  >
          <p>N°de reporte ensayo FQ </p>

          <input
            className="input is-small"
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
                    <option value={this.state.clients[key].name} />
                  ))}

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
                    dateFormat="dd-MMM-yy"
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
                    dateFormat="dd-MMM-yy"

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
                      ref={this.sample}
                      defaultValue={
                        samples
                      }
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
                      ref={this.sample_name}
                      defaultValue={
                        samples_name
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
                  <DatePicker
                    className="input is-small"
                    selected={this.state.receptionDate}
                    onChange={this.handleReception}
                    dateFormat="dd-MMM-yy"
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
                    dateFormat="dd-MMM-yy"
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
                      placeholder="Nombre de la muestra"
                      ref={this.farmaceutic_shape}
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
                  <DatePicker
                    className="input is-small"
                    selected={this.state.manufactoringDate}
                    onChange={this.handleFabrication}
                    isClearable={true}
                    dateFormat={chooseFormat(this.state.formatFF)}
                  />
                  <Switch isTrue={this.state.formatFF} id="formatFF" changeStatus={this.changeDateFormat} />
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label is-small">FV</label>
                  </div>
                  <DatePicker
                    className="input is-small"
                    selected={this.state.expirationDate}
                    onChange={this.handleExpiration}
                    isClearable={true}
                    dateFormat={chooseFormat(this.state.formatFV)}
                  />
                  <Switch isTrue={this.state.formatFV} id="formatFV" changeStatus={this.changeDateFormat} />
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
                      defaultValue={method}
                    />
                  </div>
                </div>
              </div>
              {/*second column main*/}
            </div>
          </div>
          <div className="field">
            <label className="label is-small">*En caso de NO tener fecha, DEJAR EN BLANCO, el sistema lo reconocera como 'N.A'</label>
          </div>
          <button className="button is-small is-info" type="submit"> Siguiente </button>

        </form>
      </div>
    );
  }
}

export default ReportForm;
