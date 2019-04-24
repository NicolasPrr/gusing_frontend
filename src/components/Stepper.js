import React, { Component } from 'react';
import Report from './Report'
import ReportGarnic from './colapsibles/garnic/ReportGarnic'
import LastStep from './LastStep'
import axios from 'axios'
import URLBack from '../UrlBack'
import Swal from 'sweetalert2'
function selectUrlRequest(type){
    //Retorna la url despues y el el tipo de require 
    //http://localhost:3000/report_garnics
    switch(type){
        //"[url, requiereDatabase]"
        case "ReportGarnic":
            return  ["/report_garnics" , "report_garnic"]
        default:
            return null;
    }
        
}
class Stepper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            dataReport: {}, //Datos del reporte, como numero de reporte, es el encabezado
            dataProduct: {}, //Datos del producto, es el resultado de las mediciones
            dataVef: {}, //Observaciones
            dataEspec: {}, // Datos de especificaciones
            mode: null,
            defaultReport: null,
        }
        this.nextStep = this.nextStep.bind(this)
        this.headerForm = this.headerForm.bind(this)
        this.productForm = this.productForm.bind(this)
        this.verfForm = this.verfForm.bind(this)
        this.createReport = this.createReport.bind(this)

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
            case "ReportGarnic":
            //obj infomracion de las especificaciones del producto más el nombre de la muestra.
            //productAction  accion del producto, maneja el stepper.
            //data, infromacion del resultado del producto.
                return <ReportGarnic obj={this.state.dataEspec} productAction={this.productForm} data={this.state.dataProduct} />
            default:
                return null
        }
    }
    renderForm(step) {
        //Selecciona que reenderizar por paso...
        //mode es el tipo de producto, se renderiza un formulario para cada tipo.
        //3 es observaciones
        switch (step) {
            case 1:
                return <Report obj={this.props.obj} sample={this.props.sample} reportAction={this.headerForm} data={this.state.dataReport} />
            case 2:
                return this.choseForm(this.state.mode)
            case 3:
                return <LastStep data={this.state.dataVef} action={this.verfForm} />
            default:
                return null
        }
    }
    createReport(data) {
        const [url_complement, require ] = selectUrlRequest(this.state.mode)
        let url = URLBack + url_complement;
        let report = this.state.dataReport;
        report.observation = data.observation;
        this.setState({ dataReport: report })

        axios.post(url, { [require]: this.state.dataProduct,
             id_asociation: this.state.dataEspec.id, 
             report: this.state.dataReport
         }).then(res => {
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
    editReport(data) {
        const [url_complement, require ] = selectUrlRequest(this.state.mode)
        let url = URLBack + url_complement + "/" + this.state.defaultReport.reportable_id;
        selectUrlRequest(this.state.mode)
        let report = this.state.dataReport;
        report.observation = data.observation;
        this.setState({ dataReport: report })
        
        axios.put(url, { [require]: this.state.dataProduct,
             id_report: this.state.defaultReport.id, 
             report: this.state.dataReport
         }).then(res => {
            if (res.status === 201) {
                console.log(res.data)
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

    //Se avanza un paso, se guarda el estado
    headerForm(data) {
        this.setState({ dataReport: data })
        this.nextStep(1)
    }
    productForm(data) {
        //paso del producto
        this.setState({ dataProduct: data })
        this.nextStep(1)
    }
    verfForm(data, step) {
        //paso final, la url contiene edit, se hará la solicitud de edición.
        this.setState({ dataVef: data })
        this.nextStep(step)
        if(window.location.pathname.includes("edit")){
            this.editReport(data);
        }else{
            if (step === 1) this.createReport(data)
        }
    }
    componentDidMount() {
        let report_header;
        //Cargamos los datos desde la peticion buscando el match
        //Si se hace una solicitud de edición o clonar se accede al if
        if (this.props.match !== undefined) {
            const { reportId } = this.props.match.params;
            let url = URLBack + "/reports/" + reportId;
            let  mode ;
            axios.get(url).then(res => {
                console.log(res)
                report_header = res.data.report_header;
                this.setState({ dataReport: report_header, 
                    dataProduct: res.data.reportable,
                     dataVef: {observation: res.data.report_header.observation},
                     dataEspec: res.data.especificable,
                     defaultReport: report_header,
                     })
                //Seleccionamos el modo para renderizarlo luego
                mode = report_header.reportable_type;
                this.setState({mode: mode})
            })
            console.log(this.state.data)


        }
        if(this.props.mode !== undefined) this.setState({mode: this.props.mode})
        if(this.props.obj  !== undefined) this.setState({dataEspec: this.props.obj})
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