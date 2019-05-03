
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
                        <td className=" is-title has-text-centered">CONTROL DE CALIDAD</td >
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
                        <td className="  has-text-centered">TITULO: REPORTE ENSAYO DE MATERIALES  PT-PP</td >
                        <td className="  has-text-centered">Codigo FR-CC -65</td >
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
                        <td className=" has-text-centered">VIGENCIA DESDE EL 28 DE FEBRERO DE 2017</td >
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
                <div className="column  has-text-justified is-size-7">
                    <p><strong>N° de reporte FQ: </strong> {report_number} </p>
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
                Carrera 10 Este N°30-03 San Mateo-Soacha PBX 781-75-98<br /> www.laboratoriosgusing.com
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
                    Jefe control de calidad
            </div>

            </div>
        </div>
    )
}
function renderColorIsOk(i, color, isok) {
    if (parseInt(i) === 0) {
        return (
            <React.Fragment>
                <tr>
                    <td> Color</td>
                    <td> {color} </td>
                </tr>

                <tr>
                    <td> Cumple</td>
                    <td> {isok} </td>
                </tr>
            </React.Fragment>
        )
    }

}
const Report = (props) => {
    let features = [];
    let results = []
    let attrResults = [];
    let attrFeatures = [];

    let attrResults2 = [];
    let attrFeatures2 = [];

    for (let i = 0; i < props.features.length; i++) {
        if (i < 4) {
            attrFeatures.push(props.features[i])
            attrResults.push(props.results[i])
        } else {
            attrFeatures2.push(props.features[i])
            attrResults2.push(props.results[i])
        }
    }
    features.push(attrFeatures)
    results.push(attrResults)
    if (props.features.length >= 4) {
        features.push(attrFeatures2)
        results.push(attrResults2)
    }
    console.log(features)

    // const results = props.results
    return (

        <div id="content">
            <div className="columns">
                {Object.keys(features).map(key => (

                    <div className="column">

                        <table className="table is-fullwidth is-bordered is-size-7">
                            <thead>
                                <tr>
                                    <th> Parametro   </th>
                                    <th> Resultados       </th>
                                    <th> Especificación    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(features[key]).map(subkey => (
                                    <tr>
                                        <td> {features[key][subkey].name}</td>
                                        <td> {results[key][subkey].result} </td>
                                        <td> {features[key][subkey].especification}</td>

                                    </tr>
                                ))}

                                {renderColorIsOk(key, props.color, props.isok)}
                            </tbody>




                        </table>



                    </div>

                ))}




                {/*             
                
                <div className="column">

                    <table className="table is-fullwidth is-bordered is-size-7">
                        <thead>
                            <tr>
                                <th> Parametro   </th>
                                <th> Resultados       </th>
                                <th> Especificación    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(features).map(key => (
                                <tr>
                                    <td> {features[key].name}</td>
                                    <td> {results[key].result} </td>
                                    <td> {features[key].especification}</td>

                                </tr>
                            ))}

                            <tr>
                                <td> Color</td>
                                <td> {props.color} </td>
                            </tr>

                            <tr>
                                <td> Cumple</td>
                                <td> {props.isok} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="column">

                    <table className="table is-fullwidth is-bordered is-size-7">
                        <thead>
                            <tr>
                                <th> Parametro   </th>
                                <th> Resultados       </th>
                                <th> Especificación    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(features).map(key => (
                                <tr>
                                    <td> {features[key].name}</td>
                                    <td> {results[key].result} </td>
                                    <td> {features[key].especification}</td>

                                </tr>
                            ))}

                        </tbody>
                    </table>


                </div> */}
            </div>
        </div>
    )
}
function formateDate(dateInput) {
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
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
        let url = URLBack + "/report_supplies/" + reportId
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
            test.push(<Header data={dat} />)
            test.push(
                <Report features={dat.features} results={dat.result_supplies} color={dat.color} isok={dat.isok} />
            )
            test.push(<Observation data={dat.observation} />)
        }
        else
            test = null;

        return (
            <div className="container">
                <div className="columns is-gapless">
                    <div className="column is-3 box">
                        <span className="image">
                            <br />
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