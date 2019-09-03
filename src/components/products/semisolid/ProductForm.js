import React, { Component } from 'react'
import { isEmptyObject } from '../../../helpers'
class ProductForm extends Component {
    appaearance = React.createRef()
    param_appaearance = React.createRef()
    
    color = React.createRef()
    param_color = React.createRef()
    
    viscosity = React.createRef()
    param_viscosity = React.createRef()
    
    
    fulfillment = React.createRef()
    is_copy = React.createRef()


    handleNext = (step) => {
        let results = {
            
            appaearance: this.appaearance.current.value,
            param_appaearance: this.param_appaearance.current.value,
            
            color: this.color.current.value,
            param_color: this.param_color.current.value,
            
            viscosity: this.viscosity.current.value,
            param_viscosity: this.param_viscosity.current.value,
        
            fulfillment: this.fulfillment.current.value,
            is_copy: this.is_copy.current.value
        }
        this.props.setProductForm(results, step)

    }
    componentDidMount() {

        if (!isEmptyObject(this.props.dataProduct)) {
            const data = this.props.dataProduct
            
            this.appaearance.current.value =data.appaearance
            this.param_appaearance.current.value =data.param_appaearance
            
            this.color.current.value = data.color
            this.param_color.current.value = data.param_color
            
            this.viscosity.current.value= data.viscosity
            this.param_viscosity.current.value= data.param_viscosity
            

            this.fulfillment.current.value = data.fulfillment
            this.is_copy.current.value = data.is_copy
            console.log(data)
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
                                    <td><input className="input is-small" ref={this.appaearance}/></td>
                                    <td><input className="input is-small" ref={this.param_appaearance}/></td>
                                </tr>
                                <tr>
                                    <td>Determinación color</td>
                                    <td><input className="input is-small" ref={this.color} /></td>
                                    <td><input className="input is-small" list="colors" ref={this.param_color} /></td>
                                </tr>
                                {/* <datalist id="colors">
                                    <option value="Blanco-Blanco" key={0} />
                                    <option value="Blanco-Azul" key={1} />
                                    <option value="Blanco-Verde" key={2} />
                                    <option value="Blanco-Rojo" key={3} />
                                    <option value="Transparente" key={4} />
                                </datalist> */}
                                <tr>
                                    <td>Determinación viscosidad</td>
                                    <td><input className="input is-small" ref={this.viscosity} /></td>
                                    <td><input className="input is-small" ref={this.param_viscosity} /></td>
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