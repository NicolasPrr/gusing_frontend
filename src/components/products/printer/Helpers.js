import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './table.sass';
import WaterForm from '../water/ProductForm'
import CapsuleForm from '../capsule/ProductForm'
import LiquidForm from '../liquid/ProductForm'
import MaterialForm from '../material/ProductForm'

const urlWater = 'report_waters'
const urlCapsule = 'report_capsules'
const urlLiquid = 'report_liquids'
const urlMaterial = 'report_materials'

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


    if (props.data === undefined || props.data === null) return null

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
                            <p className="text" onClick={notification.bind(this, report_number)}> <strong>N° de reporte FQ: </strong> {report_number} </p>
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
export const Observation = (props) => {
    return (
        <div className="box is-size-7">
            <p> <strong>Observaciones: </strong> </p>
            <p> {props.data}</p>
        </div>
    )
}
export const Note = () => {

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


export const Footer = () => {
    return (
        <div id="footer">
            <p className=" has-text-centered">

                Laboratorios Gusing 100% Productos Naturales y Homeopaticos S.A.S <br />
                Carrera 10 Este N°30-03 San Mateo-Soacha PBX 781-75-98<br /> www.laboratoriosgusing.com
            </p>
        </div>
    )
}
export const Signature = () => {
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

export function renderIsOk(props) {
    let isok = "No"
    if (props) isok = "Si"
    return (
        <React.Fragment>
            <strong> Cumplimiento de parametros: </strong>
            <label>{isok}</label>
        </React.Fragment>
    )
}

export const WaterTable = (props) => {
    if (props === undefined || props === null) return null
    return (
        <div>
            <table className="tables is-fullwidth is-bordered is-size-7">
                <thead>
                    <tr>
                        <th>Nombre del resultado</th>
                        <th>Resultado</th>
                        <th>Parametros de referencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Determinación conductividad</td>
                        <td>{props.data.conductivity}</td>
                        <td> {"< 1.3 µS/cm"} </td>
                    </tr>
                    <tr>
                        <td>Determinación pH</td>
                        <td>{props.data.ph}</td>
                        <td>5 - 7 </td>
                    </tr>
                    <tr>
                        <td>Determinación (OTC) Total Organic Carbon</td>
                        <td>{props.data.organic}</td>
                        <td>≤ 500 ppb</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export const CapsuleTable = (props) => {
    if (props === undefined || props === null) return null
    return (
        <div>
            <table className="tables is-fullwidth is-bordered is-size-7">
                <thead>
                    <tr>
                        <th>Nombre del resultado</th>
                        <th>Resultado</th>
                        <th>Parametros de referencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Determinación aspecto</td>
                        <td>{props.data.appearance}</td>
                        <td> Gelatina dura </td>
                    </tr>
                    <tr>
                        <td>Determinación color</td>
                        <td>{props.data.color}</td>
                        <td>{props.data.param_color}</td>
                    </tr>
                    <tr>
                        <td>Determinación desintegración</td>
                        <td>{props.data.desintegration}</td>
                        <td>Max 10 min</td>
                    </tr>
                    <tr>
                        <td>Determinación peso promedio</td>
                        <td>{props.data.weight}</td>
                        <td>{props.data.param_weight}</td>
                    </tr>
                    <tr>
                        <td>Determinación dimensiones alto x ancho</td>
                        <td>{props.data.height}</td>
                        <td>{props.data.param_height}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export const LiquidTable = (props) => {
    if (props === undefined || props === null) return null
    return (
        <div>
            <table className="tables is-fullwidth is-bordered is-size-7">
                <thead>
                    <tr>
                        <th>Nombre del resultado</th>
                        <th>Resultado</th>
                        <th>Parametros de referencia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Determinación aspecto</td>
                        <td>{props.data.appaearance}</td>
                        <td> {props.data.param_appaearance} </td>
                    </tr>
                    <tr>
                        <td>Determinación color</td>
                        <td>{props.data.color}</td>
                        <td>{props.data.param_color}</td>
                    </tr>
                    <tr>
                        <td>Determinación ph</td>
                        <td>{props.data.ph}</td>
                        <td>{props.data.param_ph}</td>
                    </tr>
                    <tr>
                        <td>Determinación densidad</td>
                        <td>{props.data.density}</td>
                        <td>{props.data.param_density}</td>
                    </tr>
                    <tr>
                        <td>Determinación grado alcoholico</td>
                        <td>{props.data.alcoholic}</td>
                        <td>{props.data.param_alcoholic}</td>
                    </tr>
                    <tr>
                        <td>Determinación volumen</td>
                        <td>{props.data.volume}</td>
                        <td>{props.data.param_volume}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export function chooseMainURL(location) {

    if (location.includes(urlWater)) return '/report_waters/'
    if (location.includes(urlCapsule)) return '/report_capsules/'
    if (location.includes(urlLiquid)) return '/report_liquids/'
    if (location.includes(urlMaterial)) return '/report_materials/'
}
export function chooseNameOjbect(location) {
    if (location.includes(urlWater)) return 'report_water'
    if (location.includes(urlCapsule)) return 'report_capsule'
    if (location.includes(urlLiquid)) return 'report_liquid'
    if (location.includes(urlMaterial)) return 'report_material'
}
export function chooseObject(location, obj) {
    //Selecciona los parametros segun la localización, paso 2
    let obj2 = {}
    if (location.includes(urlWater)) {
        obj2 = {
            ph: obj.ph,
            organic: obj.organic,
            conductivity: obj.conductivity,

            is_copy: obj.is_copy,
            fulfillment: obj.fulfillment,
        }
    }
    if (location.includes(urlCapsule)) {
        obj2 = {
            appearance: obj.appearance,
            color: obj.color,
            param_color: obj.param_color,
            desintegration: obj.desintegration,
            weight: obj.weight,
            param_weight: obj.param_weight,
            height: obj.height,
            param_height: obj.param_height,

            fulfillment: obj.fulfillment,
            is_copy: obj.is_copy
        }
    }
    if (location.includes(urlLiquid)) {
        obj2 = {
            appaearance: obj.appaearance,
            param_appearance: obj.appearance,
            color: obj.color,
            param_color: obj.param_color,
            ph: obj.ph,
            param_ph: obj.param_ph,
            density: obj.density,
            param_density: obj.param_density,

            alcoholic: obj.alcoholic,
            param_alcoholic: obj.param_alcoholic,

            volume: obj.volume,
            param_volume: obj.param_volume,

            fulfillment: obj.fulfillment,
            is_copy: obj.is_copy
        }
    }
    if (location.includes(urlMaterial)) {
        obj2 = {
            appaearance: obj.appaearance,
            param_appearance: obj.appearance,
            density: obj.density,
            param_density: obj.param_density,
            alcoholic: obj.alcoholic,
            param_alcoholic: obj.param_alcoholic,
          
            fulfillment: obj.fulfillment,
            is_copy: obj.is_copy
        }
    }

    return obj2
}
export function chooseForm(set, data, location) {

    if (location.includes(urlWater)) {
        return <WaterForm
            setProductForm={set}
            dataProduct={data} />
    }
    if (location.includes(urlCapsule)) {
        return <CapsuleForm
            setProductForm={set}
            dataProduct={data} />

    }
    if (location.includes(urlLiquid)) {
        return <LiquidForm
            setProductForm={set}
            dataProduct={data} />
    }
    if (location.includes(urlMaterial)) {
        return <MaterialForm
            setProductForm={set}
            dataProduct={data} />
    }
}
export function initReport(location) {
    let dataReport = {}
    if (location.includes(urlWater)) {
        dataReport = {
            sample: "Agua",
            client_name: "Laboratorios Gusing S.A.S",
            direction: "Cra 10 este N 30-03 San Mateo - Soacha",
            farmaceutic_shape: "N.A.",
            sampling_type: "Aleatorio",
            observation: ""
        }
    }
    if (location.includes(urlCapsule)) {
        dataReport = {
            sampling_type: "Aleatorio",
            observation: ""
        }
    }
    if (location.includes(urlLiquid)) {
        dataReport = {
            sampling_type: "Aleatorio",
            observation: ""
        }
    }
    if (location.includes(urlMaterial)) {
        dataReport = {
            sampling_type: "Aleatorio",
            farmaceutic_shape: "N.A.",
            client_name: "Laboratorios Gusing S.A.S",
            direction: "Cra 10 este N 30-03 San Mateo - Soacha",
            observation: ""
        }
    }

    return dataReport
}
export function initOption(location) {
    let options = { samples: [], shapes: [] }
    if (location.includes(urlCapsule)) {
        options = { samples: ["PT", "PT-EST"], shapes: ["Capsula N° 0", "Capsula N° 1"] }
    }
    if (location.includes(urlLiquid)) {
        options = { samples: ["PT", "PP", "PT-EST"], shapes: ["Gota", "Ampolla", "Vial", "Capsula", "Tableta", "Granulado", "Polvo", "Ungüento", "Gel"] }
    }
    if (location.includes(urlMaterial)) {
        options = { samples: ["MP", "TM"], shapes: [] }
    }
    return options
}

export function chooseTable(location, data) {
    if (location.includes(urlWater)) {
        return <WaterTable
            data={data}
            key={0} />
    }
    if (location.includes(urlCapsule)) {
        return <CapsuleTable
            data={data}
            key={0} />
    }
    if (location.includes(urlLiquid)) {
        return <LiquidTable
            data={data}
            key={0} />
    }

}