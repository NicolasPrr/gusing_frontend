import React, { Component } from 'react'
import { isEmptyObject } from '../../../helpers'
class ProductForm extends Component {
    appearance = React.createRef()
    param_appearance = React.createRef()

    color = React.createRef()
    param_color = React.createRef()

    ph = React.createRef()
    param_ph = React.createRef()

    density = React.createRef()
    param_density = React.createRef()

    alcoholic = React.createRef()
    param_alcoholic = React.createRef()

    volume = React.createRef()
    param_volume = React.createRef()

    fulfillment = React.createRef()
    is_copy = React.createRef()


    handleNext = (step) => {
        let results = {
            appearance: this.appearance.current.value,
            param_appearance: this.appearance.current.value,
            color: this.color.current.value,
            param_color: this.param_color.current.value,
            
            ph: this.ph.current.value,
            param_ph: this.param_ph.current.value,
            
            density: this.density.current.value,
            param_density: this.param_density.current.value,
            
            alcoholic: this.alcoholic.current.value,
            param_alcoholic: this.param_alcoholic.current.value,
            
            volume: this.density.current.value,
            param_volume: this.param_volume.current.value,


            fulfillment: this.fulfillment.current.value,
            is_copy: this.is_copy.current.value
        }
        this.props.setProductForm(results, step)

    }
    componentDidMount() {

        if (!isEmptyObject(this.props.dataProduct)) {
            const data = this.props.dataProduct
            
            this.appearance.current.value =data.appearance
            this.param_appearance.current.value =data.param_appearance
            
            this.color.current.value = data.color
            this.param_color.current.value = data.param_color
            
            this.ph.current.value = data.ph
            this.param_ph.current.value = data.param_ph

            this.density.current.value = data.density
            this.param_density.current.value = data.param_density
            
            this.alcoholic.current.value = data.alcoholic
            this.param_alcoholic.current.value = data.param_alcoholic
            
            this.volume.current.value = data.volume
            this.param_volume.current.value = data.param_volume
            
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
                                    <td><input className="input is-small" ref={this.appearance}/></td>
                                    <td><input className="input is-small" ref={this.param_appearance}/></td>
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
                                    <td>Determinación pH</td>
                                    <td><input className="input is-small" ref={this.ph} /></td>
                                    <td><input className="input is-small" ref={this.param_ph} list="ph" /></td>
                                 <datalist id="ph">
                                    <option value="4.0 - 6.0" key={0} />
                                    <option value="5.5 - 7.5" key={1} />
                                    <option value="5.8 - 6.5" key={2} />
                                    <option value="6.0 - 7.4" key={3} />
                                    <option value="6.0 - 7.5" key={4} />
                                    <option value="6.0 - 8.0" key={5} />
                                    <option value="5.0 - 7.0" key={5} />
                                </datalist> 
                                </tr>
                                <tr>
                                    <td>Determinación densidad</td>
                                    <td><input className="input is-small" ref={this.density} /></td>
                                    <td><input className="input is-small" list="density" ref={this.param_density} /></td>
                                    <datalist id="density">
                                        <option value="1,100 - 1,400 g/mL" key={0} />
                                        <option value="0,930 -  0,980 g/mL" key={1} />
                                        <option value="0,91 - 1,01 g/mL" key={2} />
                                        <option value="0,95 - 1,5 g/mL " key={3} />
                                    </datalist>
                                    </tr>
                                <tr>
                                    <td>Determinación grado alcohólico</td>
                                    <td><input className="input is-small" ref={this.alcoholic} /></td>
                                    <td><input className="input is-small"  ref={this.param_alcoholic}/></td>
                                </tr>
                                <tr>
                                    <td>Determinación volumen</td>
                                    <td><input className="input is-small" ref={this.volume} /></td>
                                    <td><input className="input is-small"  ref={this.param_volume}/></td>
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