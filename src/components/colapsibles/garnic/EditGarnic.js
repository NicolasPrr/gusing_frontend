import React, { Component } from 'react';
import $ from 'jquery';

class EditlGarnic extends Component {

    name = React.createRef();
    db_min = React.createRef();
    db_max = React.createRef();
    lt_min = React.createRef();
    lt_max = React.createRef();
    cl_min = React.createRef();
    cl_max = React.createRef();
    componentDidMount() {
        $(".modal").addClass("is-active");
      }
    handle = (e) =>{
        $(".modal").removeClass("is-active");
        this.props.exit();
    }

    exitModal = (e) => {
        $(".modal").removeClass("is-active");
        this.props.exit();
    }
    handle = e => {
        e.preventDefault();
    
        const info = {
          name: this.name.current.value,
          
          diameter_base: this.db_min.current.value.replace(",", "."),
          range_diameter_base: this.db_max.current.value.replace(",", "."),
    
          total_length: this.lt_min.current.value.replace(",", "."),
          range_total_length: this.lt_max.current.value.replace(",", "."),
    
          wall_gauge: this.cl_min.current.value.replace(",", "."),
          range_wall_gauge: this.cl_max.current.value.replace(",", ".")
        };
        
        this.props.editGarnic(info);
        this.exitModal(e)
      };
    renderModal(params) {
        if (params === null) return null
        else {
            
            return <div className="modal">
                <div className="modal-background"></div>
                <form>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <input
                                className="input is-medium"
                                type="text"
                                
                                ref={this.name}
                                defaultValue = {params.name}
                            />

                            <button className="delete" aria-label="close" onClick={this.exitModal}></button>


                        </header>
                        <section className="modal-card-body">
                            <label className="label">Diametro de base</label>
                            <div className="columns">
                                <div className="column">
                                    Medida base: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.diameter_base}
                                        ref ={this.db_min}
                                    />
                                </div>
                                <div className="column">
                                    Rango (±)               : <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.range_diameter_base}
                                        ref ={this.db_max}
                                    />
                                </div>
                            </div>

                            <label className="label">Largo total</label>
                            <div className="columns">
                                <div className="column">
                                    Medida base: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.total_length}
                                        ref ={this.lt_min}
                                    />
                                </div>
                                <div className="column">
                                    Rango (±)               : <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.range_total_length}
                                        ref ={this.lt_max}
                                    />
                                </div>
                            </div>
                            <label className="label">Calibre de pared</label>
                            <div className="columns">
                                <div className="column">
                                    Medida base: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.wall_gauge}
                                        ref ={this.cl_min}
                                    />
                                </div>
                                <div className="column">
                                    Rango (±)               : <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.range_wall_gauge}
                                        ref ={this.cl_max}
                                    />
                                </div>
                            </div>


                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success" onClick = {this.handle}>Guardar cambios</button>
                            
                        </footer>

                    </div>
                </form>
            </div>
        }
    }

    /*componentDidMount(){
        $(".modal").addClass("is-active"); 
    }*/
    render() {

        return (
            <div>
                {this.renderModal(this.props.data)}
            </div>

        );
    }
}
export default EditlGarnic;