import React, { Component } from 'react'
import { isEmptyObject } from '../../../helpers'
class ProductForm extends Component {
    appearance = React.createRef()
    color = React.createRef()
    param_color = React.createRef()
    desintegration = React.createRef()
    weight = React.createRef()
    param_weight = React.createRef()
    height = React.createRef()
    param_height = React.createRef()

    fulfillment = React.createRef()
    is_copy = React.createRef()


    handleNext = (step) => {
        let results = {
            appearance: this.appearance.current.value,
            color: this.color.current.value,
            param_color: this.param_color.current.value,
            desintegration: this.desintegration.current.value,
            weight: this.weight.current.value,
            param_weight: this.param_weight.current.value,
            height: this.height.current.value,
            param_height: this.param_height.current.value,

            fulfillment: this.fulfillment.current.value,
            is_copy: this.is_copy.current.value
        }
        this.props.setProductForm(results, step)

    }
    componentDidMount() {

        if (!isEmptyObject(this.props.dataProduct)) {
            const data = this.props.dataProduct
            
            this.appearance.current.value =data.appearance
            this.color.current.value = data.color
            this.param_color.current.value = data.param_color
            this.desintegration.current.value= data.desintegration
            this.weight.current.value= data.weight
            this.param_weight.current.value=  data.param_weight
            this.height.current.value = data.height
            this.param_height.current.value = data.param_height
            

            this.fulfillment.current.value = data.fulfillment
            this.is_copy.current.value = data.is_copy
            console.log(data)
        }

    }
    render() {
        return (
            <div>
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
                                    <td><input className="input is-small" ref={this.appearance}/></td>
                                    <td>Gelatina dura</td>
                                </tr>
                                <tr>
                                    <td>Determinación color</td>
                                    <td><input className="input is-small" ref={this.color} /></td>
                                    <td><input className="input is-small" list="colors" ref={this.param_color} /></td>
                                </tr>
                                <datalist id="colors">
                                    <option value="Blanco-Blanco" key={0} />
                                    <option value="Blanco-Azul" key={1} />
                                    <option value="Blanco-Verde" key={2} />
                                    <option value="Blanco-Rojo" key={3} />
                                    <option value="Transparente" key={4} />
                                </datalist>
                                <tr>
                                    <td>Determinación desintegración</td>
                                    <td><input className="input is-small" ref={this.desintegration} /></td>
                                    <td>Max 10 min</td>
                                </tr>
                                <tr>
                                    <td>Determinación peso promedio</td>
                                    <td><input className="input is-small" ref={this.weight} /></td>
                                    <td><input className="input is-small" list="weight" ref={this.param_weight} /></td>
                                    <datalist id="weight">
                                        <option value="550 mg - 580 mg" key={0} />
                                        <option value="540 mg - 580 mg" key={1} />
                                        <option value="530 mg - 570 mg" key={2} />
                                        <option value="580 mg - 620 mg" key={3} />
                                    </datalist>
                                    </tr>
                                <tr>
                                    <td>Determinación Dimensiones alto x ancho (mm)</td>
                                    <td><input className="input is-small" ref={this.height} /></td>
                                    <td><input className="input is-small" list="height" ref={this.param_height} /></td>
                                    <datalist id="height">
                                        <option value="7.1- 7.7 X 20.92 - 21.92 mm" key={0} />
                                        <option value="6.4 - 7.0 X 18.25 - 19.85 mm" key={1} />
                                    </datalist>
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