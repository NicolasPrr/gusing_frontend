import React, { Component } from 'react';
import ReportForm from '../ReportForm'
import {stateStep} from '../../../helpers'

class Stepper extends Component {
    constructor(){
        super()
        this.state = {
            step: 1,
            dataReport: {}, //Datos del reporte, como numero de reporte, es el encabezado
            dataProduct: {}, //Datos del producto, es el resultado de las mediciones
            dataVef: {}, //Observaciones
            dataEspec: {},
        }
        this.nextStep = this.nextStep.bind(this)
        this.headerForm = this.headerForm.bind(this)
        this.setProductForm = this.setProductForm.bind(this)
        this.verfForm = this.verfForm.bind(this)
        // this.createReport = this.createReport.bind(this)
        this.setDataVef = this.setDataVef.bind(this)
        this.renderButtons = this.renderButtons.bind(this)
        
    }
    nextStep(option) {
        //Cambia de paso
        if (this.state.step >= 0 && this.state.step <= 4) {
            const st = this.state.step + option
            this.setState({ step: st })
        }
    }
    renderButtons(numberButton) {
        //Retorna los botones de retroceder
        const st = this.state.step
        switch (numberButton) {
            case 2:
                if (st === 4)
                    return <button className="button is-small is-dark" onClick={this.nextStep.bind(this, -1)}>retroceder</button>
                else
                    return null
            default:
                break;

       }
    }
   
    renderForm(step) {
        //Selecciona que reenderizar por paso...
        //3 es observaciones
        switch (step) {
            case 1:
                return <ReportForm reportAction={this.headerForm}
                    data={this.state.dataReport}
                />
            case 2:
                return "holi"
            case 3:
                return "hola"
            default:
                return null
        }
    }
    headerForm(data) {
        this.setState({ dataReport: data })
        this.nextStep(1)
    }
    setProductForm(data, next, dataEspec) {
        this.setState({ dataProduct: data })
        this.setState({ dataEspec: dataEspec })
        this.nextStep(next)
    }
    verfForm(step) {
        //paso final, la url contiene edit, se hará la solicitud de edición.
        this.nextStep(step)
        if (window.location.pathname.includes("edit")) {
            if (step === 1) this.editReport();
        } else {
            if (step === 1) this.createReport()
        }
    }
    setDataVef(e) {
        const info = e.target.value;
        this.setState({ dataVef: info })
    }
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <ul className="steps is-small">
                            <div className={"step-item" + stateStep(1,this.state.step, "is-link")}  >
                                <div className="step-marker">1</div>
                                <div className="step-details">
                                    <p className="step-title">Paso 1</p>
                                    <p>Datos de reporte.</p>
                                </div>
                            </div>
                            <div className={"step-item" + stateStep(2,this.state.step, "is-info")}>
                                <div className="step-marker" >2</div>
                                <div className="step-details">
                                    <p className="step-title">Paso 2</p>
                                    <p>Datos del producto.</p>
                                </div>
                            </div>
                            <div className={"step-item" + stateStep(3, this.state.step, "is-link")}>
                                <div className="step-marker" >3</div>
                                <div className="step-details">
                                    <p className="step-title">Paso 3</p>
                                    <p>Observaciones.</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="columns has-text-centered   ">
                    <div className="column">
                        {this.renderButtons(2)}

                    </div>
                    <div className="column">
                        {this.renderButtons(1)}
                    </div>
                </div>
                {this.renderForm(this.state.step)}

            </div>
        );
    }
}

export default Stepper;