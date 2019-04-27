import React, { Component } from 'react';
import $ from 'jquery';

class editType extends Component {

    name = React.createRef()
  
    componentDidMount() {
        $(".modal").addClass("is-active");
    }
    exitModal = (e) => {
        e.preventDefault();
        this.props.exit();
        $(".modal").removeClass("is-active");

    }
    handle = e => {
        e.preventDefault();
        const info = {
            name: this.name.current.value,
        };
        this.props.request(info);
       // this.exitModal(e)
    };
    renderModal(params) {
        if (params === null) return null
        else {
            return (
                <div className="modal">
                    <div className="modal-background"></div>
                    <form>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <button className="delete" aria-label="close" onClick={this.exitModal}></button>
                            </header>
                            <section className="modal-card-body">
                                <label className="label">Nombre tipo</label>
                                <input
                                    className="input"
                                    type="text"
                                    defaultValue={params.name}
                                    ref={this.name}
                                />
                            </section>
                            <footer className="modal-card-foot">
                                <button className="button is-success" onClick={this.handle}>Guardar cambios</button>
                            </footer>
                        </div>
                    </form>
                </div>
            );
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
export default editType;