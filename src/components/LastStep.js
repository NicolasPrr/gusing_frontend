import React, { Component } from 'react';


class LastStep extends Component {
    
    observations = React.createRef();
    producer = React.createRef();
    checker = React.createRef();
    handle = (e) => {
        e.preventDefault();
        const data = {
            observations: this.observations.current.value,
            producer: this.producer.current.value,
            checker: this.checker.current.value
        }
        this.props.action(data , 1)
       
    }
    handleBack = (e) => {
        e.preventDefault();
        const data = {
            observations: this.observations.current.value,
            producer: this.producer.current.value,
            checker: this.checker.current.value
        }
        this.props.action(data , -1)
       
    }
    render() {
        return (
            <div>
                
                <form onSubmit={this.handle}>
                    <div className="field">
                        Observaciones
                        <div className="control">
                            <textarea className="textarea is-primary is-small" placeholder="Observaciones" defaultValue={this.props.data.observations} ref = {this.observations} ></textarea>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                
                            <div className="field">
                                <label className="label is-small">Realizado por</label>
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Realizador" defaultValue={this.props.data.producer} ref = {this.producer} />
                                </div>
                                <p className="help">Coordinador de control de calidad</p>
                            </div>

                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label is-small">Verificado por</label>
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Verificador" defaultValue={this.props.data.checker}  ref = {this.checker }/>
                                </div>
                                <p className="help">Jefe de control de calidad</p>
                            </div>
                          
                        </div>
                    </div>
                    <button className="button is-success is-small" type="submit"> Finalizar </button>
                </form>
                <button className="button is-dark is-small" type="submit" onClick = {this.handleBack}> Retroceder </button>
            </div>


        );
    }
}

export default LastStep;