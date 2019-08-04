import React, { Component } from 'react';
import ReportForm from './ReportForm';
import axios from 'axios'
import URLBack from '../../../UrlBack'
import Swal from 'sweetalert2'
import ResultForm from './ResultForm';
import {isEmptyObject } from '../../../helpers'

const LastStep = (props) => {
    let value = props.dataVef;
    if (isEmptyObject(value)) {
        value = null;
    }
    return (
        <div>
            <form>
                <div className="field">
                    Observaciones
                        <div className="control">
                        <textarea className="textarea is-primary is-small"
                            placeholder="Observaciones"
                            defaultValue={value}
                            onChange={props.setDataVef}
                        >
                        </textarea>
                    </div>
                </div>
                <button className="button is-success is-small" type="submit" onClick={props.action.bind(this, 1)} > Finalizar </button>
            </form>
            <button className="button is-dark is-small" type="submit" onClick={props.action.bind(this, -1)} > Retroceder </button>
        </div >
    );
}
class StepperSupply extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            dataReport: {}, //Datos del reporte, como numero de reporte, es el encabezado
            dataProduct: {}, //Datos del producto, es el resultado de las mediciones
            dataVef: {}, //Observaciones
            dataEspec: {}, // Datos de especificaciones
        }
        this.nextStep = this.nextStep.bind(this)
        this.headerForm = this.headerForm.bind(this)
        this.setProductForm = this.setProductForm.bind(this)
        this.verfForm = this.verfForm.bind(this)
        this.createReport = this.createReport.bind(this)
        this.setDataVef = this.setDataVef.bind(this)

    }

    stateStep(step) {
        //Activa el paso actual.
        if (step === this.state.step)
            return " is-active is-warning"
        if (step < this.state.step)
            return " is-completed is-warning"
        else
            return ""
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
                return <ResultForm
                    dataEspec={this.state.dataEspec}
                    dataProduct={this.state.dataProduct}
                    setProductForm={this.setProductForm}
                />
            case 3:
                return <LastStep dataVef={this.state.dataVef} action={this.verfForm} setDataVef={this.setDataVef} />
            default:
                return null
        }
    }
    createReport() {
        let url = `${URLBack}/report_supplies`;
        let dataReport = this.state.dataReport;
        dataReport.isok = this.state.dataProduct.isok;
        dataReport.is_copy = this.state.dataProduct.is_copy;
        dataReport.observation = this.state.dataVef
        const features = this.state.dataEspec;
        this.setState({ dataReport: dataReport });
        axios.post(url, {
            report_supply: this.state.dataReport,
            results: this.state.dataProduct,
            features: features,
        }).then(res => {
            if (res.status === 201) {
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
    editReport() {
        let url = `${URLBack}/report_supplies/${this.state.id}`
        // selectUrlRequest(this.state.mode)
        let dataReport = this.state.dataReport;
        dataReport.isok = this.state.dataProduct.isok;
        dataReport.is_copy = this.state.dataProduct.is_copy;
        dataReport.observation = this.state.dataVef
        const features = this.state.dataEspec;
        this.setState({ dataReport: dataReport });
        
        axios.put(url, {
            report_supply: dataReport,
            features: features,
            results: this.state.dataProduct,
        }).then(res => {
            if (res.status === 200) {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha editado el reporte',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }).catch(function (error) {
            console.log(error)
            Swal({
                position: 'top-end',
                type: 'error',
                title: 'No se ha podido editar el reporte',
                text: 'Posiblemente se ha repetido el numero de reporte!',
                showConfirmButton: false,
                timer: 2500
            })
        });

    }
    setDataVef(e) {
        const info = e.target.value;
        this.setState({ dataVef: info })
    }
    //Se avanza un paso, se guarda el estado
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
    componentDidMount() {
        let supply;
        let dataEspec = [];
        //const {supply} = this.props.location.state;
        //&& isEmptyObject(this.state.dataReport))
        const name = window.location.pathname; 
        if (name.includes("edit") || name.includes("clone")) {
            const { reportId } = this.props.match.params;
            let url = URLBack + "/report_supplies/" + reportId;
            axios.get(url).then(res => {
                console.log(res)
                let inputs = []
                for(let i = 0; i < res.data.result_supplies.length; i++){
                    inputs.push(res.data.result_supplies[i].result)
                }
                let result = {
                    isok: res.data.isok,
                    inputs: inputs,
                    is_copy: res.data.is_copy
                };
                // res.inputs = res.data.result_supplies
                this.setState({dataEspec: res.data.features})
                this.setState({dataReport: res.data})
                this.setState({dataProduct: result})
                this.setState({id: res.data.id})
                this.setState({dataVef: res.data.observation})
                // this.setState({dataProduct: {inputs: {res.data.results_supllies}}})
            })

        } else {

            if (this.props.location.state !== undefined) {
                supply = this.props.location.state.supply
                const data = { sample: supply.type_supply.name, sample_name: supply.name, supply_id: supply.id }
                for (let i = 0; i < supply.features.length; i++)
                    dataEspec.push(supply.features[i])

                this.setState({
                    dataReport: data,
                    dataEspec: dataEspec,
                })
                this.setState({ dataSupply: this.props.location.state });
            }
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

export default StepperSupply; 