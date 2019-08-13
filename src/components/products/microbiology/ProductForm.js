import React, { Component } from 'react'
import { isEmptyObject } from '../../../helpers'
const aeroibics_data = ["Max 100 UFC/g", "Max 100 UFC/mL", "Max 100 UFC/mL",
    "Max 500 UFC/mL", "< 1 UFC/4 horas", "Max 5 UFC/4 horas", "Max 50 UFC/4 horas",
    "Max 100 UFC/4 horas", "< 15 UFC/25cm2", "< 1 UFC/25cm2", "< 200 UFC/m3",
    "NA", "< 50 UFC/25cm2", "< 20 UFC/25cm2", "< 5 UFC/25cm2", "Max 100 UFC/100g",
    "Máx 100UFC/100mL", "Máx  20 UFC/4 horas", "<1 UFC/mL", "Max 10 UFC/mL"
]
const mold = ["Max 100 UFC/g", "Max 10 UFC/mL", "Max 10 UFC/g", "< 1 UFC/100 mL", "< 1 UFC/4 horas ",
    "< 15 UFC/25cm2", "< 1 UFC/25cm2", "< 200 UFC/m3", "NA", "Max 10 UFC/100mL", "Max 100 UFC/4 horas",
    "< 5/UFC4 horas", "< 1 UFC/4 horas", "< 15 UFC/25 cm2", "< 1 UFC/25 cm2", "< 200 UFC/m3", "< 50 UFC/25 cm2",
    "< 20 UFC/25 cm2", "< 5 UFC/25 cm2", "Max 10 UFC/g", "Max 500 UFC/100g", "Max 100 UFC/100mL",
    "Máx 20 UFC/4 horas", "Max 5/UFC4 horas", "<1 UFC/mL",
]
const detect = ["Detectado", "No detectado", "NA"]
const fulfillment = ["Cumple", "No cumple", "NA"]
class ProductForm extends Component {

    aeorobic = React.createRef()
    param_aeorobic = React.createRef()

    mold = React.createRef()
    param_mold = React.createRef()

    coliform = React.createRef()
    param_coliform = React.createRef()

    coli = React.createRef()
    param_coli = React.createRef()

    mona = React.createRef()
    param_mona = React.createRef()

    aureus = React.createRef()
    param_aureus = React.createRef()

    sterility = React.createRef()
    param_sterility = React.createRef()

    endotoxin = React.createRef()
    param_endotoxin = React.createRef()

    fulfillment = React.createRef()
    is_copy = React.createRef()


    handleNext = (step) => {
        let results = {

            aeorobic: this.aeorobic.current.value,
            param_aeorobic: this.aeorobic.current.value,

            mold: this.mold.current.value,
            param_mold: this.param_mold.current.value,

            coliform: this.coliform.current.value,
            param_coliform: this.param_coliform.current.value,

            coli: this.coli.current.value,
            param_coli: this.param_coli.current.value,

            mona: this.mona.current.value,
            param_mona: this.param_mona.current.value,

            aureus: this.mona.current.value,
            param_aureus: this.param_aureus.current.value,

            sterility: this.sterility.current.value,
            param_sterility: this.param_sterility.current.value,

            endotoxin: this.endotoxin.current.value,
            param_endotoxin: this.param_endotoxin.current.value,

            fulfillment: this.fulfillment.current.value,
            is_copy: this.is_copy.current.value
        }
        this.props.setProductForm(results, step)

    }
    componentDidMount() {

        if (!isEmptyObject(this.props.dataProduct)) {
            const data = this.props.dataProduct

            this.aeorobic.current.value = data.aeorobic
            this.param_aeorobic.current.value = data.param_aeorobic

            this.mold.current.value = data.mold
            this.param_mold.current.value = data.param_mold

            this.coliform.current.value = data.coliform
            this.param_coliform.current.value = data.param_coliform

            this.coli.current.value = data.coli
            this.param_coli.current.value = data.param_coli

            this.mona.current.value = data.mona
            this.param_mona.current.value = data.param_mona

            this.aureus.current.value = data.aureus
            this.param_aureus.current.value = data.param_aureus

            this.sterility.current.value = data.sterility
            this.param_sterility.current.value = data.param_sterility

            this.endotoxin.current.value = data.endotoxin
            this.param_endotoxin.current.value = data.param_endotoxin

            this.fulfillment.current.value = data.fulfillment
            this.is_copy.current.value = data.is_copy
        }

    }
    render() {
        return (
            <div className="container box">
                <div className="columns is-vcentered">
                    <div className="column">

                        <h1 className="subtitle">Resutlados de análisis</h1>

                        <table className="table is-fullwidth is-bordered is-size-7">
                            <thead>
                                <tr>
                                    <th>Nombre del resultado</th>
                                    <th>Resultado</th>
                                    <th>Parametros de referencia</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Recuento de Aerobios(RTMA)</td>
                                    <td><input className="input is-small" ref={this.aeorobic} /></td>
                                    <td><input className="input is-small" ref={this.param_aeorobic} list="aero" /></td>
                                </tr>
                                <tr>
                                    <td>Recuento de Mohos y Levaduras(RTCHL)</td>
                                    <td><input className="input is-small" ref={this.mold} /></td>
                                    <td><input className="input is-small" ref={this.param_mold} list="mold" /></td>
                                </tr>
                                <tr>
                                    <td>Recuento de Coliformes  Totales (CT)</td>
                                    <td><input className="input is-small" ref={this.coliform} /></td>
                                    <td><input className="input is-small" ref={this.param_coliform} list="ct" /></td>
                                </tr>
                                <tr>
                                    <td>Detección Escherichia coli</td>
                                    <td><input className="input is-small" ref={this.coli} list ="detect"/></td>
                                    <td><input className="input is-small" ref={this.param_coli} list ="detect" /></td>
                                </tr>
                                <tr>
                                    <td>Detección Pseudomona aeruginosa</td>
                                    <td><input className="input is-small" ref={this.mona} list ="detect" /></td>
                                    <td><input className="input is-small" ref={this.param_mona} list="detect" /></td>
                                </tr>
                                <tr>
                                    <td>Detección Sthaphylococcus aureus</td>
                                    <td><input className="input is-small" ref={this.aureus} list ="detect" /></td>
                                    <td><input className="input is-small" ref={this.param_aureus}  list ="detect"/></td>
                                </tr>

                                <tr>
                                    <td>Prueba de Esterilidad</td>
                                    <td><input className="input is-small" ref={this.sterility} list ="full" /></td>
                                    <td><input className="input is-small" ref={this.param_sterility} list="full" /></td>
                                </tr>
                                <tr>
                                    <td>Prueba de Endotoxinas</td>
                                    <td><input className="input is-small" ref={this.endotoxin} list ="full" /></td>
                                    <td><input className="input is-small" ref={this.param_endotoxin} list ="endo"/></td>
                                </tr>
                                <datalist id="aero">
                                    {Object.keys(aeroibics_data).map(key => (
                                        <option value={aeroibics_data[key]} key={key} />
                                    ))}

                                </datalist>
                                <datalist id="mold">
                                    {Object.keys(mold).map(key => (
                                        <option value={mold[key]} key={key} />
                                    ))}
                                </datalist>
                                <datalist id="detect">
                                    {Object.keys(detect).map(key => (
                                        <option value={detect[key]} key={key} />
                                    ))}
                                </datalist>
                                <datalist id="full">
                                    {Object.keys(fulfillment).map(key => (
                                        <option value={fulfillment[key]} key={key} />
                                    ))}
                                </datalist>

                                <datalist id="ct">
                                    <option value="< 1 UFC/ 100 mL" key={0} />
                                    <option value="NA" key={1} />
                                </datalist>
                                <datalist id="endo">
                                    <option value="< 0,25 UE/mL" key={0} />
                                    <option value="> 0,25 UE/mL" key={1} />
                                    <option value="NA" key={1} />
                                </datalist>
                            </tbody>
                        </table>
                    </div>

                </div>
                {/*fulliment*/}
                <div className="field">
                    <label className="label is-small">Cumplimientos</label>
                </div>
                <div className="select is-rounded is-small">
                    <select ref={this.fulfillment} >
                        <option value={false}>
                            No cumple
                        </option>
                        <option value={true}>
                            Cumple
                         </option>
                    </select>
                </div>
                {/*fulliment*/}
                <div className="field">
                    <label className="label is-small">Copia controlada</label>
                </div>
                <div className="select is-rounded is-small">
                    <select ref={this.is_copy}>
                        <option value={false}>
                            No
                        </option>
                        <option value={true}>
                            Si
                         </option>
                    </select>
                </div>
                <div className="field  is-pulled-right">
                    <button className="button is-small is-info " type="submit" onClick={this.handleNext.bind(this, 1)}> Siguiente </button>
                </div>
                <div className="field  is-pulled-right">
                    <button className="button is-small is-dark" type="submit" onClick={this.handleNext.bind(this, -1)}> Retroceder </button>
                </div>


            </div>
        )
    }
}

export default ProductForm