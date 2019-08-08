import React, { Component } from 'react';
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
                                <label className="label is-small">Nombre de muestra</label>
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Nombre de la muestra" ref={this.sample} />
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