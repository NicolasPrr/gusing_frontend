import React, { Component } from 'react'
import { isEmptyObject } from '../../../helpers'
class ProductForm extends Component {
    appaearance = React.createRef()
    color = React.createRef()
    desintegration = React.createRef()

    weight = React.createRef()
    param_weight = React.createRef()
    height = React.createRef()
    param_height = React.createRef()

    hardness = React.createRef()
   
    friability = React.createRef()
   
    fulfillment = React.createRef()
    is_copy = React.createRef()


    handleNext = (step) => {
        let results = {

            appaearance: this.appaearance.current.value,
            color: this.color.current.value,
            desintegration: this.desintegration.current.value,

            weight: this.weight.current.value,
            param_weight: this.param_weight.current.value,

            height: this.height.current.value,
            param_height: this.param_height.current.value,

            hardness: this.hardness.current.value,

            friability: this.friability.current.value,

            fulfillment: this.fulfillment.current.value,
            is_copy: this.is_copy.current.value
        }
        this.props.setProductForm(results, step)

    }
    componentDidMount() {

        if (!isEmptyObject(this.props.dataProduct)) {
            const data = this.props.dataProduct

            this.appaearance.current.value = data.appaearance
            this.color.current.value = data.color
            this.desintegration.current.value = data.desintegration


            this.weight.current.value = data.weight
            this.param_weight.current.value = data.param_weight

            this.height.current.value = data.height
            this.param_height.current.value = data.param_height

            this.hardness.current.value = data.hardness
     
            this.friability.current.value = data.friability
     
            this.fulfillment.current.value = data.fulfillment
            this.is_copy.current.value = data.is_copy
        }

    }
    render() {
        return (
            <div >
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
                                    <td>Redonda - Plana</td>
                                </tr>
                                <tr>
                                    <td>Determinación color</td>
                                    <td><input className="input is-small" ref={this.color} /></td>
                                    <td>Blanca</td>
                                </tr>
                                <tr>
                                    <td>Determinación desintegración</td>
                                    <td><input className="input is-small" ref={this.desintegration} /></td>
                                    <td>Max 10 min</td>
                                </tr>
                                <tr>
                                    <td>Determinación peso promedio</td>
                                    <td><input className="input is-small" ref={this.weight} /></td>
                                    <td><input className="input is-small" ref={this.param_weight} list="weight" /></td>
                                </tr>
                                <datalist id="weight">
                                    <option value="100 ± 10 mg" key={0} />
                                    <option value="300 ± 10 mg" key={1} />
                                </datalist>
                                <tr>
                                    <td>Determinación dimensiones alto x ancho</td>
                                    <td><input className="input is-small" ref={this.height} /></td>
                                    <td><input className="input is-small" ref={this.param_height} list="height" /></td>
                                </tr>
                                <datalist id="height">
                                    <option value="9.02  ± 0.3 mm x 3.6  ± 0.8 mm" key={0} />
                                    <option value="6,3 ± 0.3  mm x 3.1  ± 0.8 mm" key={1} />
                                </datalist>
                                <tr>
                                    <td>Determinación dureza</td>
                                    <td><input className="input is-small" ref={this.hardness} /></td>
                                    <td> 4 - 6 kgf</td>
                                </tr>
                                <tr>
                                    <td>Determinación friabilidad</td>
                                    <td><input className="input is-small" ref={this.friability} /></td>
                                    <td> Max 1 % </td>
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
                        <option value={true}>
                            Cumple
                         </option>
                        <option value={false}>
                            No cumple
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