
import React, { Component } from 'react';
import axios from 'axios'
import URLBack from '../../UrlBack'
import { Switch, Redirect } from 'react-router-dom'
/* 

                    <p> N° de reporte: {data.report_number} </p>
                    <p> Cliente: {data.client_name}          </p>
                    <p> N° de analisis: {data.analisys}           </p>
                    <p> Nombre de la muestra: {data.sample_name}          </p>
                    <p> Muestra: {data.sample}          </p>
                    <p> Tipo de muestreo: {data.sampling_type}          </p>
                    <p> Forma farmaceutica: {data.farmaceutic_shape}          </p>
                    <p> Fecha de recepcion: {data.date_reception}          </p>
                    <p> Fecha de reporte : {data.date_report}          </p>
                    <p> Fecha de muestreo: {data.date_sampling}          </p>
                    <p> Dirección: {data.direction}          </p>
                    <p> Fecha de fabricacion: {data.ff}          </p>
                    <p> Fecha de vencimiento: {data.fv}          </p>
                    <p> Lote: {data.lot}          </p>
                    <p> Fecha de muestreo: {data.date_sampling}          </p>
                    <p> Metodo de analisis: {data.method}          </p>



*/
const Header = (props) => {
    return (

        <div>
            <p> N° de reporte: {props.data.report_number} </p>
            <p> Cliente: {props.data.client_name}          </p>
            <p> N° de analisis: {props.data.analisys}           </p>
            <p> Nombre de la muestra: {props.data.sample_name}          </p>
            <p> Muestra: {props.data.sample}          </p>
            <p> Tipo de muestreo: {props.data.sampling_type}          </p>
            <p> Forma farmaceutica: {props.data.farmaceutic_shape}          </p>
            <p> Fecha de recepcion: {props.data.date_reception}          </p>
            <p> Fecha de reporte : {props.data.date_report}          </p>
            <p> Fecha de muestreo: {props.data.date_sampling}          </p>
            <p> Dirección: {props.data.direction}          </p>
            <p> Fecha de fabricacion: {props.data.ff}          </p>
            <p> Fecha de vencimiento: {props.data.fv}          </p>
            <p> Lote: {props.data.lot}          </p>
            <p> Fecha de muestreo: {props.data.date_sampling}          </p>
            <p> Metodo de analisis: {props.data.method}          </p>

        </div>
    )
}

const Report = (props) => {
    return (

        <div>
            <p> Diametro de base: {props.data.diameter_base} </p>
            <p> Largo total {props.data.total_length}          </p>
            <p> Calibre de pared: {props.data.wall_gauge}           </p>

        </div>
    )
}

class HeaderGeneral extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        const { reportId } = this.props.match.params;
        let url = URLBack + "/reports/" + reportId
        axios.get(url).then(res => {
            console.log(res)
            this.setState({ data: res.data })
        })
        console.log(this.state.data)
    }
    render() {
        const dat = this.state.data;
        let test = [];
        if (dat !== null){
            test.push(<Header data = {dat.report_header}/>)
            test.push(<Report data = {dat.reportable}/>)

        } 
        else
            test = null; 
        
        return (
            <div>
               
                <div className="container">
                    {test}
                </div>
            </div>
        );
    }
}
export default HeaderGeneral;