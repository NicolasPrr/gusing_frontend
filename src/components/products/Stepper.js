import React, { Component } from 'react';
import ReportForm from './ReportForm'
import { stateStep } from '../../helpers'
import ProductForm from './water/ProductForm'
import LastStep from '../LastStep'
import axios from 'axios'
import Swal from 'sweetalert2'
import URLBack from '../../UrlBack'
import { chooseMainURL, chooseObject,chooseNameOjbect } from './printer/Helpers'


class Stepper extends Component {
    constructor() {
        super()
        this.state = {
            step: 1,
            dataReport: {
                sample: "Agua", client_name: "Laboratorios Gusing S.A.S",
                direction: "Cra 10 este N 30-03 San Mateo - Soacha",
                observation: ""
            }, //Datos del reporte, como numero de reporte, es el encabezado
            dataProduct: {}, //Datos del producto, es el resultado de las mediciones
        }
        this.nextStep = this.nextStep.bind(this)
        this.headerForm = this.headerForm.bind(this)
        this.setProductForm = this.setProductForm.bind(this)
        this.verfForm = this.verfForm.bind(this)
        this.createReport = this.createReport.bind(this)
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
    editReport() {
        const { reportId } = this.props.match.params;
        
        const location = window.location.pathname
        const nameObject = chooseNameOjbect(location)
        let url = `${URLBack}${chooseMainURL(location)}${reportId}`
        let finalObject = Object.assign(this.state.dataReport, this.state.dataProduct)
        
        axios.put(url, {
            [nameObject] : finalObject,       
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
    createReport() {
        const location = window.location.pathname
        let finalObject = Object.assign(this.state.dataReport, this.state.dataProduct)
        let url = `${URLBack}${chooseMainURL(location)}`;
        const nameObject = chooseNameOjbect(location)
        axios.post(url, {
            [nameObject] : finalObject,
           
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

    renderForm(step) {
        //Selecciona que reenderizar por paso...
        //3 es observaciones
        switch (step) {
            case 1:
                return <ReportForm reportAction={this.headerForm}
                    data={this.state.dataReport}
                />
            case 2:
                return <ProductForm
                    setProductForm={this.setProductForm}
                    dataProduct={this.state.dataProduct}
                />
            case 3:
                return <LastStep
                    dataVef={this.state.dataReport.observation} 
                    action={this.verfForm} 
                    setDataVef={this.setDataVef} />

            default:
                return null
        }
    }
    headerForm(data) {
        this.setState({ dataReport: data })
        this.nextStep(1)
    }
    setProductForm(data, next) {
        this.setState({ dataProduct: data })
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
        let report = this.state.dataReport
        report.observation = info
        this.setState({ dataReport: report })
    }
    componentDidMount(){
        const location = window.location.pathname;
        if(location.includes('edit') || location.includes('clone')){
            const { reportId } = this.props.match.params;
            let url = `${URLBack}${chooseMainURL(location)}${reportId}}`
            axios.get(url).then(res =>{
                this.setState({
                    dataReport: res.data,
                    dataProduct: chooseObject(location, res.data) 
                })
            }).catch(error => {
                console.log(error)
            })
            

        }
    }
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <ul className="steps is-small">
                            <div className={"step-item" + stateStep(1, this.state.step, "is-link")}  >
                                <div className="step-marker">1</div>
                                <div className="step-details">
                                    <p className="step-title">Paso 1</p>
                                    <p>Datos de reporte.</p>
                                </div>
                            </div>
                            <div className={"step-item" + stateStep(2, this.state.step, "is-info")}>
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