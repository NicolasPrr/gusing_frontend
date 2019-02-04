import React, { Component } from "react";

class ReportGarnic extends Component {
    constructor(props) {
        super(props)
        this.handle = this.handle.bind(this)
        
    }
    
    diameter_base =    React.createRef();
    total_lenght = React.createRef();
    wall_gauge  = React.createRef(); 

    handle = (e) => {
        e.preventDefault();
        const data = {
            diameter_base: this.diameter_base.current.value,
            total_lenght: this.total_lenght.current.value,
            wall_gauge: this.wall_gauge.current.value
        }
        this.props.productAction(data)
       
    }
    render() {
        return (

            <div>
                <form  onSubmit = {this.handle}>
                    <div className="columns">
                        <div className="column">
                            <div className="columns is-mobile">
                                <div className="column">
                                    <div className="field">
                                        <label className="label is-small">Diametro de base</label>
                                    </div>
                                    <div className="control">
                                        <input className="input is-small" type="text" ref={this.diameter_base} defaultValue={this.props.data.diameter_base}/>
                                    </div>

                                    <div className="field">
                                        <label className="label is-small">Largo total</label>
                                    </div>

                                    <div className="control">
                                        <input className="input is-small" type="text" ref={this.total_lenght}   defaultValue={this.props.data.total_lenght} />
                                    </div>

                                    <div className="field">
                                        <label className="label is-small">Calibre de pared</label>
                                    </div>
                                    <div className="control">
                                        <input className="input is-small" type="text" ref={this.wall_gauge}   defaultValue={this.props.data.wall_gauge}/>
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

                    <button className="button is-small is-info" type="submit"> Siguiente </button>
                </form>
            </div>
        );
    }
}

export default ReportGarnic;
