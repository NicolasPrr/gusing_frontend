
import React, { Component } from 'react';
import axios from 'axios'
import './textbackground.css'
import URLBack from '../../UrlBack'
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
const Encabezado1 = (props) => {
    return (
        <div>
            <table className="table is-fullwidth is-bordered is-size-7">
                <thead>
                    <tr>
                        <td className=" is-title has-text-centered">Control de calidad</td >
                    </tr>
                </thead>
            </table>
        </div>
    );
}
const Encabezado2 = (props) => {
    return (
        <div>
            <table className="table is-fullwidth is-bordered is-size-7">
                <thead>
                    <tr>
                        <td className="  has-text-centered">TITULO REPORTE ENSAYO  PT-PP</td >
                        <td className="  has-text-centered">Codigo FR-CC -51</td >
                    </tr>
                </thead>
            </table>
        </div>
    );
}
const Encabezado3 = (props) => {
    return (
        <div>
            <table className="table is-fullwidth is-bordered is-size-7">
                <thead>
                    <tr>
                        <td className=" has-text-centered " >Version 04</td >
                        <td className=" has-text-centered">VIGENCIA DESDE EL 28 DE DICIEMBRE DEL 2018</td >
                        <td className=" has-text-centered">Pagina 1 de 1</td >
                    </tr>
                </thead>
            </table>
        </div>
    );
}
const Header = (props) => {
    const report_number = props.data.report_number;
    const client_name = props.data.client_name;
    const direction = props.data.direction;
    const date_sampling = formateDate(props.data.date_sampling);
    const date_reception = formateDate(props.data.date_reception);
    const date_analisis = formateDate(props.data.date_analisis);
    const date_report = formateDate(props.data.date_report);
    const sample = props.data.sample;
    const sample_name = props.data.sample_name;
    const sampling_type = props.data.sampling_type;
    const farmaceutic_shape = props.data.farmaceutic_shape;
    const analisys = props.data.analisys;
    const lot = props.data.lot;
    const ff = formateDate(props.data.ff);
    const fv = formateDate(props.data.fv);
    const method = props.data.method;
    return (
        <div className="box is-zise-7">

            <div className="columns">
                <div className="column has-text-left is-size-7 ">
                    <p><strong>N° de reporte FQ: </strong> {report_number} </p>
                </div>
            </div>
            <div className="columns">
                <div className="column  has-text-justified is-size-7">
                    <p> <strong>Cliente: </strong> {client_name}</p>
                    <p> <strong>Muestra:</strong> {sample}          </p>
                    <p> <strong>Nombre de la muestra:</strong> {sample_name}          </p>
                    <p> <strong>N° de analisis: </strong> {analisys} </p>
                    <p> <strong> Lote de proveedor: </strong>  {lot}          </p>


                </div>
                <div className="column has-text-justified is-size-7">
                    <p> <strong>Dirección:</strong> {direction} </p>
                    <p> <strong>Tipo de muestreo: </strong> {sampling_type}          </p>
                    <p> <strong>Forma farmaceutica:</strong> {farmaceutic_shape}          </p>
                    <p> <strong>Metodo de analisis:</strong> {method}          </p>
                    <p> <strong>Fecha de recepción:</strong> {date_reception}          </p>
                    

                </div>
                <div className="column  has-text-justified is-size-7">
                    <p> <strong>Fecha de fabricacion: </strong> {ff}          </p>
                    <p> <strong> Fecha de vencimiento:</strong> {fv}          </p>
                    <p> <strong>Fecha de muestreo: </strong> {date_sampling}          </p>
                    <p> <strong>Fecha de analisis: </strong> {date_analisis}          </p>
                    <p> <strong>Fecha de informe:</strong> {date_report}          </p>
             



                </div>

            </div>

        </div>
    )
}
const Observation = (props) => {
    return (
        <div className="box is-size-7">
            <p> <strong>Observaciones: </strong> </p>
            <p> {props.data}</p>
        </div>
    )
}
const Note = () => {

    return (
        <div id="note" className="columns">
            <div className="column">
                <p className=" has-text-centered">

                    Nota: Solo se puede hacer producción parcial
                    o total de este certificado con previa autorización de Laboratorios Gusing.
                    El resultado es valido únicamente para la muestra analizada. MA= Material de analisis,
                    FQ = Fisicoquimico, NA = No aplica.

                </p>


            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <div id="footer">
            <p className=" has-text-centered">

                Laboratorios Gusing 100% Productos Naturales y Homeopaticos <br />
                Carrera 10 Este N°30-03 San Mateo-Soacha PBX 761-75-96<br /> www.laboratoriosgusing.com
            </p>
        </div>
    )
}
const Signature = () => {
    return (
        <div id="signature">
            <div className="columns"    >
                <div className="column">
                    <p>Realizado por:</p>
                    <br />
                    <hr />
                    Coordinador control de calidad
                </div>

                <div className="column">
                    <p>Verificado por: </p>
                    <br />
                    <hr />
                    Jefe de control de calidad
            </div>

            </div>
        </div>
    )
}
const Report = (props) => {
    /*
    <h2 class="subtitle">
                Parametros y especificacion
            </h2>
    */
    //Datos de especificacion
    const max_diameter_base = props.data1.max_diameter_base;
    const min_diameter_base = props.data1.min_diameter_base;
    const max_total_lenght = props.data1.max_total_lenght;
    const min_total_lenght = props.data1.max_total_lenght;
    const max_wall_gauge = props.data1.max_wall_gauge;
    const min_wall_gauge = props.data1.min_wall_gauge;
    //datos resultados
    const diameter_base = props.data.diameter_base;
    const total_lenght = props.data.total_lenght;
    const wall_gauge = props.data.wall_gauge;

    return (

        <div id="content">

            <table className="table is-fullwidth is-bordered is-size-7">
                <thead>
                    <tr>
                        <th> Nombre del parametro   </th>
                        <th> Resultados        </th>
                        <th> Especificación minima  </th>
                        <th> Especificación maxima  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Diametro de base</td>
                        <td>{diameter_base}</td>
                        <td>{min_diameter_base}</td>
                        <td>{max_diameter_base}</td>
                    </tr>

                    <tr>
                        <td>Largo total</td>
                        <td>{total_lenght}</td>
                        <td>{min_total_lenght}</td>
                        <td>{max_total_lenght}</td>
                    </tr>

                    <tr>
                        <td>Calibre pared</td>
                        <td>{wall_gauge}</td>
                        <td>{min_wall_gauge}</td>
                        <td>{max_wall_gauge}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
function formateDate(dateInput) {
    const months = ["Ene", "Feb", "Mar", "Abr","May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    var Regexp = /(\d{4})-(\d{2})-(\d{2})/
    let [inp, year, month, day] = Regexp.exec(dateInput)
    month = months[parseInt(month) - 1];
    year = year[2] + year[3];

    return day + "-" + month + "-" + year

}
class HeaderGeneral extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        this.testDate = this.testDate.bind(this);
    }
    testDate() {
        let date = (this.state.data.report_header.date_reception);
        console.log(formateDate(date))
    }
    componentDidMount() {
        const { reportId } = this.props.match.params;
        let url = URLBack + "/reports/" + reportId
        axios.get(url).then(res => {
            console.log(res)
            this.setState({ data: res.data })
        })
        console.log(this.state.data)
        alert("Para imprimir, por favor presionar las teclas Ctrl + P")
    }
    render() {
        const dat = this.state.data;
        let test = [];
        if (dat !== null) {
            test.push(<Header data={dat.report_header} />)
            test.push(
                <Report data={dat.reportable} data1={dat.especificable} />
            )
            test.push(<Observation data={dat.report_header.observation} />)
        }
        else
            test = null;

        return (
                <div className="container">
                    <div className="columns is-gapless">
                        <div className="column is-3 box">
                            <span className="image">
                                <br/>
                                <img src="/resources/LogoGusing.png" />
                            </span>
                        </div>
                        <div className="column">
                            <Encabezado1 />
                            <Encabezado2 />
                            <Encabezado3 />
                        </div>
                    </div>

                    <div>
                        {test}
                    </div>
                    <div id="background">
                        <p id="bg-text">COPIA CONTROLADA</p>
                    </div>
                    <Signature />
                    <Note />
                    <Footer />
           
                </div>
           
        );
    }
}
export default HeaderGeneral;