import React, { Component } from 'react';


class LastStep extends Component {
    
    observations = React.createRef();
    producer = React.createRef();
    checker = React.createRef();
    handle = (e) => {
        e.preventDefault();
        const data = {
            observation: this.observations.current.value,
        }
        this.props.action(data , 1)
       
    }
    handleBack = (e) => {
        e.preventDefault();
        const data = {
            observation: this.observations.current.value,
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
                            <textarea className="textarea is-primary is-small" placeholder="Observaciones" defaultValue={this.props.data.observation} ref = {this.observations} ></textarea>
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