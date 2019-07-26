import React, { Component } from 'react';
import DatePicker from "react-datepicker";
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creationDate: new Date(),
        }
        this.handle = this.handle.bind(this)
    }

    number_report = React.createRef();
    client = React.createRef();
    sample = React.createRef();

    handleCreationDate = (date) => {
        this.setState({ creationDate: date })
    }
    handle(e) {
        e.preventDefault();
        const data = {
            number_report: this.number_report.current.value,
            client_name: this.client.current.value,
            sample: this.sample.current.value
        }
        this.props.search(data)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handle}>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <label className="label is-small">Numero de reporte</label>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Dejar los demás espacios vacios" ref={this.number_report} />
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label is-small">Cliente</label>
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Cliente" ref={this.client} />
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label is-small">Muestra</label>
                                <div className="control">
                                    <div className="select is-small">
                                        <select ref ={this.sample}>
                                            <option value="">Selecciona muestra</option>
                                            <option value="colapsible">Colapsible </option>
                                            <option value="envases de vidrio" >Envases de vidrio </option>
                                            <option value="envases de plastico">Envases de  plastico </option>
                                            <option value="tapas">Tapas </option>
                                            <option value="gotero">Gotero </option>
                                            <option value="dosificadores">Dosificadores </option>
                                            <option value="linners">Linners </option>
                                            <option value="Tapón y Agrafe">Tapón y Agrafe </option>
                                            <option value="otro">Otro </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <label className="label is-small has-text-centered">Click para buscar</label>

                            <button type="submit" className="button is-fullwidth is-link is-rounded is-small" onClick={this.props.action}> Buscar</button>
                            
                        </div>
                    </div>
                </form>
            </div>



        );
    }
}

export default SearchBox;