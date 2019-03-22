import React, { Component } from 'react';
import $ from 'jquery';

class EditClient extends Component {

    name = React.createRef();
    direction = React.createRef();
    componentDidMount() {
        $(".modal").addClass("is-active");
      }
    exitModal = (e) => {
        this.props.exit(null,null);
        $(".modal").removeClass("is-active");
        
    }
    handle = e => {
        e.preventDefault();
        const info = {
          name: this.name.current.value,
          direction : this.direction.current.value
        };

        this.props.editClient(info);
       // this.exitModal(e)
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
                            <label className="label">Dirección</label>
                            <div className="columns">
                                <div className="column">
                                     <input
                                        className="input is-small"
                                        type="text"
                                        defaultValue = {params.direction}
                                        ref ={this.direction}
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
export default EditClient;