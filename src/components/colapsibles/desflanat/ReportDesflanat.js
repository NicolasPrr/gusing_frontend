import React, { Component } from "react";
//Cuando se está creando el reporte  se renderiza este formulario
function colorSelected(key, props) {
    const color = [
        "N.A",
        "Ámbar",
        "Azul",
        "Cristal",
        "Blanco",
        "Plateado",
        "Gris",
        "Contramarcado",
        "Rojo"
    ]
    if (color[key] === props)
        return "selected"
    else
        return null
}
function fulfillmentSelected(key, props) {
    const st = ["No", "Si"]
    if (props === st[key]) return "selected"
    else return null
}
class ReportDesflanat extends Component {
    constructor(props) {
        super(props)
        this.handle = this.handle.bind(this)

    }

    diameter_base = React.createRef();
    total_lenght = React.createRef();
    wall_gauge = React.createRef();
    color = React.createRef();
    fulfillment = React.createRef();
    handle = (e) => {
        e.preventDefault();
        const data = {
            diameter_base: this.diameter_base.current.value,
            total_lenght: this.total_lenght.current.value,
            wall_gauge: this.wall_gauge.current.value,
            color: this.color.current.value,
            fulfillment: this.fulfillment.current.value
        }
        this.props.productAction(data)
    }

    render() {
        return (

            <div>
                <form onSubmit={this.handle}>
                    <div className="columns">
                        <div className="column">
                            <div className="columns is-mobile">
                                <div className="column">
                                    <div className="field">
                                        <label className="label is-small">Diametro de base</label>
                                    </div>
                                    <div className="control">
                                        <input className="input is-small" type="text" ref={this.diameter_base} defaultValue={this.props.data.diameter_base} />
                                    </div>

                                    <div className="field">
                                        <label className="label is-small">Largo total</label>
                                    </div>

                                    <div className="control">
                                        <input className="input is-small" type="text" ref={this.total_lenght} defaultValue={this.props.data.total_lenght} />
                                    </div>

                                    <div className="field">
                                        <label className="label is-small">Calibre de pared</label>
                                    </div>
                                    <div className="control">
                                        <input className="input is-small" type="text" ref={this.wall_gauge} defaultValue={this.props.data.wall_gauge} />
                                    </div>
                                    <div className="field">
                                        <label className="label is-small">Color</label>
                                    </div>

                                    <div className="control">
                                        <div className="select is-rounded is-small">
                                            <select ref={this.color} defaultValue={this.props.color}>
                                                <option selected={colorSelected(0, this.props.data.color)} value="N.A">N.A    </option>
                                                <option selected={colorSelected(1, this.props.data.color)} value="Ámbar">Ambar</option>
                                                <option selected={colorSelected(2, this.props.data.color)} value="Azul">Azul</option>
                                                <option selected={colorSelected(3, this.props.data.color)} value="Cristal">Cristal</option>
                                                <option selected={colorSelected(4, this.props.data.color)} value="Blanco">Blanco</option>
                                                <option selected={colorSelected(5, this.props.data.color)} value="Plateado">Plateado</option>
                                                <option selected={colorSelected(6, this.props.data.color)} value="Gris">Gris</option>
                                                <option selected={colorSelected(7, this.props.data.color)} value="Contramarcado">Contramarcado</option>

                                                <option selected={colorSelected(8, this.props.data.color)} value="Rojo">Rojo</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label is-small">Cumplimiento</label>
                                    </div>
                                    <div className="select is-rounded is-small">
                                        <select ref={this.fulfillment} defaultValue={this.props.fulfillment}>
                                            <option value="No"
                                            selected = {fulfillmentSelected(0,this.props.data.fulfillment)} >  
                                              No cumple    </option>
                                            <option value="Si"   selected = {fulfillmentSelected(1,this.props.data.fulfillment)}>   
                                             Cumple    </option>

                                        </select>
                                    </div>



                                </div>

                                <div className="column">
                                    <div className="field">
                                        <label className="label is-small">Especificacion</label>
                                    </div>
                                    <div className="field">
                                        <label className="label is-small">{this.props.obj.diameter_base}  ±  {this.props.obj.range_diameter_base}  </label>
                                    </div>

                                    <div className="field">
                                        <label className="label is-small">Especificacion</label>
                                    </div>
                                    <div className="field">
                                        <label className="label is-small">{this.props.obj.total_length}  ± {this.props.obj.range_total_length}  </label>
                                    </div>

                                    <div className="field">
                                        <label className="label is-small">Especificacion</label>
                                    </div>
                                    <div className="field">
                                        <label className="label is-small">{this.props.obj.wall_gauge}  ± {this.props.obj.range_wall_gauge}  </label>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="button is-small is-info" type="submit"> Siguiente </button>
                </form>
            </div>
        );
    }
}

export default ReportDesflanat;
