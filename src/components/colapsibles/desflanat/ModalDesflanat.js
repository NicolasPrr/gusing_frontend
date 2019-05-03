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
                        <p className="modal-card-title">{params.name} </p>
                        <button className="delete" aria-label="close" onClick={this.exitModal}></button>
                    </header>
                    <section className="modal-card-body">
                        {/*Altura */}
                        <label className="label">Altura</label>
                        Especificacion: {params.height}

                        {/*diametro base */}
                        <label className="label">Diametro de base</label>
                        Medida: {params.diameter_base}   ±  {params.range_diameter_base}
                        {/*Espesor de pared*/}
                        <label className="label">Espesor de pared</label>
                        Medida: {params.wall_gauge}   ±  {params.range_wall_gauge}
                        {/*Rango altura rosca*/}
                        <label className="label">Rango diametro rosca</label>
                        Medida: {params.height_bagel}   ±  {params.range_height_bagel}
                        {/*Rango diametro rosca*/}
                        <label className="label">Rango altura rosca</label>
                        Medida: {params.diameter_bagel}   ±  {params.range_diameter_bagel}
                         {/*Rango Peso*/}
                         <label className="label">Rango Peso</label>
                        Medida: {params.weight}   ±  {params.range_weight}


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