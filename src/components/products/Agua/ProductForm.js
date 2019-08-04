import React, { Component } from 'react'
import { isEmptyObject } from '../../../helpers'
class ProductForm extends Component {
    conductivity = React.createRef()
    ph = React.createRef()
    organic = React.createRef()
    fulfillment = React.createRef()
    is_copy = React.createRef()


    handleNext = (step) => {
        alert(step)
        let results = {
            conductivity: this.conductivity.current.value,
            ph: this.ph.current.value,
            organic: this.organic.current.value,
            fulfillment: this.fulfillment.current.value,
            is_copy: this.is_copy.current.value
        }
        this.props.setProductForm(results, step)

    }
    componentDidMount(){ 
        
        if (!isEmptyObject(this.props.dataProduct)){
            const data = this.props.dataProduct
            
            this.ph.current.value =             data.ph
            this.conductivity.current.value =   data.conductivity
            this.organic.current.value =        data.organic
            this.fulfillment.current.value =    data.fulfillment
            this.is_copy.current.value =        data.is_copy
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
                                    <td>Determinación conductividad</td>
                                    <td><input className="input is-small" ref={this.conductivity} /></td>
                                    <td> {"< 1.3 µS/cm"} </td>
                                </tr>
                                <tr>
                                    <td>Determinación pH</td>
                                    <td><input className="input is-small" ref={this.ph} /></td>
                                    <td>5 - 7 </td>
                                </tr>
                                <tr>
                                    <td>Determinación (OTC) Total Organic Carbon</td>
                                    <td><input className="input is-small" ref={this.organic} /></td>
                                    <td>≤ 500 ppb</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                {/*fulliment*/}
                <div className="field">
                    <label className="label is-small">Cumplimiento</label>
                </div>
                <div className="select is-rounded is-small">
                    <select ref={this.fulfillment} >
                        <option value={0}>
                            No cumple
                        </option>
                        <option value={1}>
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
                        <option value={0}>
                            No
                        </option>
                        <option value={1}>
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