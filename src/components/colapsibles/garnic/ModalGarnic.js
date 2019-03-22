import React, { Component } from 'react';
import $ from 'jquery';

class ModalGarnic extends Component {
    componentDidMount() {
        $(".modal").addClass("is-active");
    }
    renderModal(params) {
        if (params === null) return null
        else {
            return <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                    <div className="control">
                     </div>
                        <p className="modal-card-title">{params.name} </p>
                        
                        <button className="delete" aria-label="close" onClick={this.exitModal}></button>
                    </header>
                    <section className="modal-card-body">
                   
                    <label className="label">Diametro de base</label>
                    <div className = "columns">
                        <div className = "column">
                        Minimo: { params.min_diameter_base  }
                        </div> 
                        <div className = "column">
                        Maximo: {params.max_diameter_base  }
                        </div>
                    </div>

                     <label className="label">Largo total</label>
                    <div className = "columns">
                        <div className = "column">
                        Minimo: { params.min_total_lenght  }
                        </div> 
                        <div className = "column">
                        Maximo: {params.max_total_lenght }
                        </div>
                    </div>
                    <label className="label">Calibre de pared</label>
                      <div className = "columns">
                        <div className = "column">
                        Minimo: { params.min_wall_gauge  }
                        </div> 
                        <div className = "column">
                        Maximo: {params.max_wall_gauge  }
                        </div>
                    </div>


                    </section>
                    
                </div>
            </div>
        }
    }

    /*componentDidMount(){
        $(".modal").addClass("is-active"); 
    }*/
    exitModal = (e) => {
        $(".modal").removeClass("is-active");
        this.props.exit();

    }
    render() {

        return (
            <div>
                {this.renderModal(this.props.data)}
            </div>

        );
    }
}
export default ModalGarnic;