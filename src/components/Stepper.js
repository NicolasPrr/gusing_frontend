import React, { Component } from 'react';
import Report from './colapsibles/garnic/Report'



class Stepper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }
        this.nextStep = this.nextStep.bind(this)
    }

    stateStep(step) {
        if (step === this.state.step) return " is-active is-warning"
        if (step < this.state.step) return " is-completed is-warning"
        else return ""
    }
    nextStep(option) {
        if (this.state.step >= 0 && this.state.step <= 4) {
            const st = this.state.step + option
            this.setState({ step: st })
        }
    }
    renderButtons(numberButton) {
        const st = this.state.step
        switch (numberButton) {
            case 1:
                if (st > 0 && st < 3)
                    return <button className="button is-small is-dark" onClick={this.nextStep.bind(this, 1)}>Siguiente </button>
                else if (st == 3) return <button className="button is-small is-success" onClick={this.nextStep.bind(this, 1)}>Finalizar </button>
                else return null
                break;
            case 2:
                if (st > 1 && st <= 4)
                    return <button className="button is-small is-dark" onClick={this.nextStep.bind(this, -1)}>retroceder</button>
                else return null
                break
        }
    }
    renderForm(step) {
        switch (step) {
            case 1:
                return this.props.rnd
            case 2:
                return this.props.rnd2
            case 3:
        }
    }
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <ul className="steps is-small">
                            <div className={"step-item" + this.stateStep(1)}  >
                                <div className="step-marker">1</div>
                                <div className="step-details">
                                    <p className="step-title">Paso 1</p>
                                    <p>Datos de reporte.</p>
                                </div>
                            </div>
                            <div className={"step-item" + this.stateStep(2)}>
                                <div className="step-marker" >2</div>
                                <div className="step-details">
                                    <p className="step-title">Paso 2</p>
                                    <p>Datos del producto.</p>
                                </div>
                            </div>
                            <div className={"step-item" + this.stateStep(3)}>
                                <div className="step-marker" >3</div>
                                <div className="step-details">
                                    <p className="step-title">Paso 3</p>
                                    <p>Verificacion.</p>
                                </div>
                            </div>
                        </ul>
                        <div className="columns has-text-centered   ">
                            <div className="column">
                                {this.renderButtons(2)}

                            </div>
                            <div className="column">
                                {this.renderButtons(1)}
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderForm(this.state.step)}
            </div>
        );
    }
}

export default Stepper; 