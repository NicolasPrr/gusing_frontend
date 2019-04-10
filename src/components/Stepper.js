import React, { Component } from 'react';
import Report from './Report'
import ReportGarnic from './colapsibles/garnic/ReportGarnic'
import LastStep from './LastStep'
import axios from 'axios'
import URLBack from '../UrlBack'
import Swal from 'sweetalert2'


class Stepper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            dataReport: {},
            dataProduct: {},
            dataVef: {}
        }
        this.nextStep = this.nextStep.bind(this)
        this.headerForm = this.headerForm.bind(this)
        this.productForm = this.productForm.bind(this)
        this.verfForm = this.verfForm.bind(this)
        this.createReport = this.createReport.bind(this)

    }

    stateStep(step) {
        if (step === this.state.step)
            return " is-active is-warning"
        if (step < this.state.step)
            return " is-completed is-warning"
        else
            return ""
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
            case 2:
                if (st > 1 && st <= 4)
                    return <button className="button is-small is-dark" onClick={this.nextStep.bind(this, -1)}>retroceder</button>
                else
                    return null
            default:
                break;

        }
    }
    choseForm(arg) {
        switch (arg) {
            case "garnic":
                return <ReportGarnic obj={this.props.obj} productAction={this.productForm} data={this.state.dataProduct} />

            default:
                return null
        }
    }
    renderForm(step) {
        switch (step) {
            case 1:
                return <Report obj={this.props.obj} sample={this.props.sample} reportAction={this.headerForm} data={this.state.dataReport} />
            case 2:
                return this.choseForm(this.props.mode)
            case 3:
                return <LastStep data={this.state.dataVef} action={this.verfForm} />
            default:
                return null
        }
    }
    createReport(data) {
        let url = URLBack + "/report_garnics";
        let report = this.state.dataReport;
        report.observation = data.observation;
        this.setState({dataReport: report}) 
        axios.post(url, { report_garnic: this.state.dataProduct, id_asociation: this.props.obj.id , report: this.state.dataReport}).then(res => {
            if (res.status === 201) {
                console.log(res.data)
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha agregado el reporte',
                    showConfirmButton: false,
                    timer: 1500
                })

            }

        }).catch(function (error) {
            console.log(error)
            Swal({
                position: 'top-end',
                type: 'error',
                title: 'No se ha podido agregar el reporte',
                text: 'Posiblemente se ha repetido el numero de reporte!',
                showConfirmButton: false,
                timer: 2500
            })
        });

    }

    headerForm(data) {
        this.setState({ dataReport: data })
        this.nextStep(1)
    }
    productForm(data) {
        this.setState({ dataProduct: data })
        this.nextStep(1)
    }
    verfForm(data, step) {
        this.setState({ dataVef: data })
        this.nextStep(step)

        if (step === 1) this.createReport(data)
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