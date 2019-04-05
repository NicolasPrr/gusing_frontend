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
    handleCreationDate = (date) =>{
        this.setState({creationDate: date})
    }
    handle (e) {
        const data = {
            number_report : this.number_report.current.value,
            client_name : this.client.current.value
        }
        console.log(data)
        alert("data")
        alert("hey")
        //this.props.action( data)
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handle}>
                    <div className="columns">
                        <div className="column is-one-fifth">
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
                                        <select disabled>
                                            <option>Selecciona muestra</option>
                                            <option>Colapsible </option>
                                            <option>Envases de vidrio </option>
                                            <option>Envases plasticos </option>
                                            <option>Tapas </option>
                                            <option>Gotero y dosificadores </option>
                                            <option>Linners </option>
                                            <option>Tapon y agrafe </option>
                                            <option>Otro </option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="field">
                                <label className="label is-small">Fecha de creacion del informe</label>
                                <div className="control">
                                    <DatePicker disabled
                                        className="input is-small"
                                        selected={this.state.creationDate}
                                        onChange={this.handleCreationDate}
                                        dateFormat="dd-MMM-yy"
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                    <button type ="submit" className="button is-dark is-small" onClick={this.props.action}> Buscar</button>
                </form>
            </div>



        );
    }
}

export default SearchBox;