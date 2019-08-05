
import React, { Component } from 'react';
import axios from 'axios'
import './textbackground.css'
import URLBack from '../../../UrlBack'
import './table.sass';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {HeaderReport, InformationReport} from './Helpers'
import Error from '../../LandingPage/Error'

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

                    Nota: Solo se puede hacer reproducción parcial
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

                Laboratorios Gusing 100% Productos Naturales y Homeopaticos S.A.S <br />
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
function renderIsOk(props) {
    console.log(props)
    if (props === null)
        return null
    if (props === "No") {
    }
    return (
        <React.Fragment>
            <strong> Cumplimiento de parametros: </strong>
            <label for="isFulliment">{props}</label>
        </React.Fragment>
    )
}

const Report = (props) => {
    let features = [];
    let results = []
    let attrResults = [];
    let attrFeatures = [];

    let attrResults2 = [];
    let attrFeatures2 = [];
    const nullObject = {
        result: null
    }
    //En el caso de que la cantidad especificaciones sean mayor a la cantidad de los resultados, se ingresa el objeto null
    // con el objetivo de que no tire error
    for (let i = 0; i < props.features.length; i++) {
        if (i < 5) {
            attrFeatures.push(props.features[i])
            if (i < props.results.length)
                attrResults.push(props.results[i])
            else
                attrResults.push(nullObject)

        } else {
            attrFeatures2.push(props.features[i])
            if (i < props.results.length)
                attrResults2.push(props.results[i])
            else
                attrResults2.push(nullObject)
        }
    }
    features.push(attrFeatures)
    results.push(attrResults)
    if (props.features.length > 5) {
        features.push(attrFeatures2)
        results.push(attrResults2)
    }
    console.log(features)
    console.log(results)
    console.log(props.features.length)

    // const results = props.results
    return (

        <div id="content">
            <div className="columns">
                {Object.keys(features).map(key => (

                    <div className="column">

                        <table className="tables is-fullwidth is-bordered is-size-7">
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
                            </tbody>
                        </table>
                    </div>

                ))}
            </div>
        </div>
    )
}
function formateDate(dateInput, onlyMonth) {
    if (dateInput === null) return "N.A";
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    var Regexp = /(\d{4})-(\d{2})-(\d{2})/
    let [, year, month, day] = Regexp.exec(dateInput)
    month = months[parseInt(month) - 1];
    year = year[2] + year[3];
    if (onlyMonth) {
        return month + "-" + year;
    } else {
        return day + "-" + month + "-" + year;
    }

}
class Printer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            error: false,
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
            // console.log(res)
            this.setState({ data: res.data })
            alert("Para imprimir, por favor presionar las teclas Ctrl + P")
        }).catch( error =>{
            console.log(error)
            this.setState({error: true})
        })

        // if(rta) this.setState({textbackground: "COPIA CONTROLADA"})
    }
    render() {
        if(this.state.error) return <Error/>
        const dat = this.state.data;
        let isok = null;
        let test = [];
        let bcktxt = ""
        if (dat !== null) {
            isok = dat.isok;
            test.push(
                <Report features={dat.features} results={dat.result_supplies} color={dat.color} isok={dat.isok} />
            )
            test.push(<Observation data={dat.observation} />)
            if (dat.is_copy === "Si") {
                bcktxt = "COPIA CONTROLADA"
            }
        }
        else {
            test = null;
        }
        return (
            <div className="container">
                <HeaderReport/>
                <InformationReport data={dat} />

                {renderIsOk(isok)}
                <div id="background">
                    <p id="bg-text">{bcktxt}</p>
                </div>
                <Signature />
                <Note />
                <Footer />

            </div>

        );
    }
}
export default Printer;