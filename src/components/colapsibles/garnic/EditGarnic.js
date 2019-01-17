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
          
          min_diameter_base: this.db_min.current.value.replace(",", "."),
          max_diameter_base: this.db_max.current.value.replace(",", "."),
    
          min_total_lenght: this.lt_min.current.value.replace(",", "."),
          max_total_lenght: this.lt_max.current.value.replace(",", "."),
    
          min_wall_gauge: this.cl_min.current.value.replace(",", "."),
          max_wall_gauge: this.cl_max.current.value.replace(",", ".")
        };
        
        this.props.editGarnic(info);
        this.exitModal(e)
      };
    renderModal(params) {
        if (params === null) return null
        else {
            
            return <div class="modal">
                <div class="modal-background"></div>
                <form>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <input
                                className="input is-medium"
                                type="text"
                                
                                ref={this.name}
                                defaultValue = {params.name}
                            />

                            <button class="delete" aria-label="close" onClick={this.exitModal}></button>


                        </header>
                        <section class="modal-card-body">
                            <label className="label">Diametro de base</label>
                            <div className="columns">
                                <div className="column">
                                    Minimo: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.min_diameter_base}
                                        ref ={this.db_min}
                                    />
                                </div>
                                <div className="column">
                                    Maximo: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.max_diameter_base}
                                        ref ={this.db_max}
                                    />
                                </div>
                            </div>

                            <label className="label">Largo total</label>
                            <div className="columns">
                                <div className="column">
                                    Minimo: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.min_total_lenght}
                                        ref ={this.lt_min}
                                    />
                                </div>
                                <div className="column">
                                    Maximo: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.max_total_lenght}
                                        ref ={this.lt_max}
                                    />
                                </div>
                            </div>
                            <label className="label">Calibre de pared</label>
                            <div className="columns">
                                <div className="column">
                                    Minimo: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.min_wall_gauge}
                                        ref ={this.cl_min}
                                    />
                                </div>
                                <div className="column">
                                    Maximo: <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.max_wall_gauge}
                                        ref ={this.cl_max}
                                    />
                                </div>
                            </div>


                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success" onClick = {this.handle}>Guardar cambios</button>
                            
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