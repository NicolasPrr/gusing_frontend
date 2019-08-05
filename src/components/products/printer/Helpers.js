import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

//Codigo de empresión para reporte
const Encabezado1 = (props) => {
    return (
        <div>
            <table className="table is-fullwidth is-bordered is-size-7 ">
                <thead>
                    <tr>
                        <td className=" is-title has-text-centered">{props.name}</td >
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
                        <td className="  has-text-centered">{props.title}</td >
                        <td className="  has-text-centered">{props.code}</td >
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
                        <td className=" has-text-centered"> {props.version}</td >
                        <td className=" has-text-centered">  {props.date}</td >
                        <td className=" has-text-centered"> {props.page}</td >
                    </tr>
                </thead>
            </table>
        </div>
    );
}
export const HeaderReport = () => {
    return (
        <div className="columns is-gapless">
            <div className="column is-3  testbox">
                <span className="image">
                    <br />
                    {/* <img src="/resources/LogoGusing.png" /> */}
                    <img alt="gusing" src="/resources/LogoInpv2.png" />
                </span>
            </div>
            <div className="column">
                <Encabezado1 name="CONTROL DE CALIDAD" />
                <Encabezado2 title="TITULO: REPORTE DE ENSAYO DE MATERIALES"
                    code="Codigo FR-CC -65"
                />
                <Encabezado3 version="Version 04"
                    date="FECHA DEVIGENCIA DESDE EL 28 DE FEBRERO DE 2017"
                    page="Pagina 1 de 1"
                />
            </div>
        </div>
    )
}

export const InformationReport = (props) => {


    if(props.data === undefined || props.data === null) return null

    const report_number = props.data.report_number;
    const client_name = props.data.client_name;
    const direction = props.data.direction;
    const date_sampling = props.data.date_sampling;
    const date_reception = props.data.date_reception;
    const date_analisis = props.data.date_analisis;
    const date_report = props.data.date_report;
    const sample = props.data.sample;
    const sample_name = props.data.sample_name;
    const sampling_type = props.data.sampling_type;
    const farmaceutic_shape = props.data.farmaceutic_shape;
    const analisys = props.data.analisys;
    const lot = props.data.lot;
    const name_provider = props.data.name_provider;
    const ff = props.data.ff;
    const fv = props.data.fv;
    const method = props.data.method;


    function notification(str) {
        alert(`Se ha copiado al portapapeles el numero: ${str}`)
    }
    return (
        <div className="box is-zise-7">


            <div className="columns">
                <div className="column  has-text-justified is-size-7">


                    <CopyToClipboard text={report_number}>
                        <span>
                            <p className="text" onClick={notification.bind(this,report_number)}> <strong>N° de reporte FQ: </strong> {report_number} </p>
                            <p className="text"> <strong>N° de analisis: </strong> {analisys} </p>
                        </span>
                    </CopyToClipboard>
                    <p> <strong>Cliente: </strong> {client_name}</p>
                    <p> <strong>Dirección:</strong> {direction} </p>
                    <p> <strong> Lote de proveedor: </strong>  {lot}          </p>
                    <p> <strong> Nombre de proveedor: </strong>  {name_provider}          </p>


                </div>
                <div className="column has-text-justified is-size-7">
                    <p> <strong>Muestra:</strong> {sample}          </p>
                    <p> <strong>Nombre de la muestra:</strong> {sample_name}          </p>
                    <p> <strong>Tipo de muestreo: </strong> {sampling_type}          </p>
                    <p> <strong>Forma farmaceutica:</strong> {farmaceutic_shape}          </p>
                    <p> <strong>Metodo de analisis:</strong> {method}          </p>


                </div>
                <div className="column  has-text-left is-size-7">
                    <p> <strong>Fecha de fabricacion: </strong> {ff}          </p>
                    <p> <strong>Fecha de vencimiento:</strong> {fv}          </p>
                    <p> <strong>Fecha de muestreo: </strong> {date_sampling}          </p>
                    <p> <strong>Fecha de analisis: </strong> {date_analisis}          </p>
                    <p> <strong>Fecha de recepción:</strong> {date_reception}          </p>
                    <p> <strong>Fecha de informe:</strong> {date_report}          </p>
                </div>
            </div>

        </div>
    )
}
