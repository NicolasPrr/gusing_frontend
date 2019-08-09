import React, { Component } from 'react'
import { isEmptyObject } from '../../../helpers'
class ProductForm extends Component {
    appaearance = React.createRef()
    param_appaearance = React.createRef()

    density = React.createRef()
    param_density = React.createRef()
    
    alcoholic = React.createRef()
    param_alcoholic = React.createRef()

    fulfillment = React.createRef()
    is_copy = React.createRef()


    handleNext = (step) => {
        let results = {
            appaearance: this.appaearance.current.value,
            param_appaearance: this.param_appaearance.current.value,
            
            density: this.density.current.value,
            param_density: this.param_density.current.value,

            alcoholic: this.alcoholic.current.value,
            param_alcoholic: this.param_alcoholic.current.value,

            fulfillment: this.fulfillment.current.value,
            is_copy: this.is_copy.current.value
        }
        this.props.setProductForm(results, step)

    }
    componentDidMount() {

        if (!isEmptyObject(this.props.dataProduct)) {
            const data = this.props.dataProduct

            this.appaearance.current.value = data.appaearance
            this.param_appaearance.current.value = data.param_appaearance

            this.density.current.value = data.density
            this.param_density.current.value = data.param_density

            this.alcoholic.current.value = data.alcoholic
            this.param_alcoholic.current.value = data.param_alcoholic
            
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
                                    <td>Determinación aspecto</td>
                                    <td><input className="input is-small" ref={this.appaearance} /></td>
                                    <td><input className="input is-small" ref={this.param_appaearance} /></td>
                                </tr>
                                <tr>
                                    <td>Determinación densidad</td>
                                    <td><input className="input is-small" ref={this.density} /></td>
                                    <td><input className="input is-small" ref={this.param_density} /></td>
                                </tr>
                                <tr>
                                    <td>Determinación grado alcohólico</td>
                                    <td><input className="input is-small" ref={this.alcoholic} /></td>
                                    <td><input className="input is-small" ref={this.param_alcoholic} /></td>
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