import React, { Component } from "react";

class ReportGarnic extends Component {
    constructor(props){
        super(props)
        this.handle = this.handle.bind(this)
    }
    handle = ( e ) =>{
        e.preventDefault();
        this.props.handleF("hey")
        
    }
    render() {
        return (

            <div>
                <div className="columns">
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column">
                                <div className="field">
                                    <label className="label is-small">Diametro de base</label>
                                </div>
                                <div className="control">
                                    <input className="input is-small" type="text" ref={this.name} />
                                </div>

                                <div className="field">
                                    <label className="label is-small">Largo total</label>
                                </div>

                                <div className="control">
                                    <input className="input is-small" type="text" ref={this.name} />
                                </div>

                                <div className="field">
                                    <label className="label is-small">Calibre de pared</label>
                                </div>
                                <div className="control">
                                    <input className="input is-small" type="text" ref={this.name} />
                                </div>


                            </div>

                            <div className="column">
                                <div className="field">
                                    <label className="label is-small">Especificacion</label>
                                </div>
                                <div className="field">
                                    <label className="label is-small">{this.props.obj.min_diameter_base}  - {this.props.obj.max_diameter_base}  </label>
                                </div>

                                <div className="field">
                                    <label className="label is-small">Especificacion</label>
                                </div>
                                <div className="field">
                                    <label className="label is-small">{this.props.obj.min_total_lenght}  - {this.props.obj.max_total_lenght}  </label>
                                </div>

                                <div className="field">
                                    <label className="label is-small">Especificacion</label>
                                </div>
                                <div className="field">
                                    <label className="label is-small">{this.props.obj.min_wall_gauge}  - {this.props.obj.max_wall_gauge}  </label>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <button
            onClick = {this.handle}
            className="button is-fullwidth is-info is-rounded"
          >
            Crear Producto
          </button>
            </div>
        );
    }
}

export default ReportGarnic;
