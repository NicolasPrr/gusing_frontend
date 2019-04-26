import React, { Component } from 'react';
import $ from 'jquery';

class EditDesflanat extends Component {

    name = React.createRef();
    height = React.createRef();
  
    diameter_base = React.createRef(); //base
    range_diameter_base = React.createRef(); //rango
  
    wall_gauge = React.createRef();//base
    range_wall_gauge = React.createRef();//rango
  
    height_bagel = React.createRef();
    range_height_bagel = React.createRef();
  
    range_diameter_bagel = React.createRef();
    diameter_bagel = React.createRef();
  
    weight = React.createRef();
    range_weight = React.createRef();
    componentDidMount() {
        $(".modal").addClass("is-active");
    }
    handle = (e) => {
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
            height: this.height.current.value,
      
      
            wall_gauge: this.wall_gauge.current.value.replace(",", "."),
            range_wall_gauge: this.range_wall_gauge.current.value.replace(",", "."),
      
            diameter_base: this.diameter_base.current.value.replace(",", "."),
            range_diameter_base: this.range_diameter_base.current.value.replace(",", "."),
      
            range_diameter_bagel: this.range_diameter_bagel.current.value.replace(",", "."),
            diameter_bagel: this.diameter_bagel.current.value.replace(",", "."),
      
            weight: this.weight.current.value.replace(",", "."),
            range_weight: this.range_weight.current.value.replace(",", "."),
            
            height_bagel: this.height.current.value.replace(",", ".") ,
            range_height_bagel: this.range_height_bagel.current.value.replace(",", ".") 
        };

        this.props.editDesflanat(info);
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
                                defaultValue={params.name}
                            />

                            <button className="delete" aria-label="close" onClick={this.exitModal}></button>
                        </header>
                        <section className="modal-card-body">

                            <div className="columns">
                                <div className="column">

                                    <div className="field">
                                        <label className="label is-small">Espesor de pared</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        placeholder="Base de espesor de pared"
                                        ref={this.wall_gauge}
                                        step="0.01"
                                        defaultValue={params.wall_gauge}
                                    />
                                    <div className="field">
                                        <label className="label is-small">Diametro base</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        placeholder="Diametro base"
                                        ref={this.diameter_base}
                                        defaultValue={params.diameter_base}
                                        step="0.01"
                                    />
                                    <div className="field">
                                        <label className="label is-small">Altura de rosca</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        placeholder="Diametro base"
                                        step="0.01"
                                        ref={this.height_bagel}
                                        defaultValue={params.height_bagel}
                                    />


                                    <div className="field">
                                        <label className="label is-small">Diametro de rosca</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        placeholder="Diametro base"
                                        step="0.01"
                                        ref={this.diameter_bagel}
                                        defaultValue={params.diameter_bagel}
                                    />
                                    <div className="field">
                                        <label className="label is-small">Peso</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        placeholder="Peso"
                                        step="0.01"
                                        ref={this.weight}
                                        defaultValue={params.weight}
                                    />


                                    {/* END COLUMN */}
                                </div>

                                <div className="column">
                                    
                                    {/*Rango espesor pared */}
                                    <div className="field">
                                        <label className="label is-small">Rango (±)</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        step="0.01"
                                        placeholder="Rango de espesor de pared"
                                        ref={this.range_wall_gauge}
                                        defaultValue={params.wall_gauge}
                                    />
                                    {/*rango diametro base */}
                                    <div className="field">
                                        <label className="label is-small">Rango (±)</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        step="0.01"
                                        placeholder="Rango diametro base"
                                        ref={this.range_diameter_base}
                                        defaultValue={params.range_diameter_base}
                                    />
                                    {/*rango altura rosca bas */}
                                    <div className="field">
                                        <label className="label is-small">Rango (±)</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        step="0.01"
                                        placeholder="Rango altura rosca"
                                        ref={this.range_height_bagel}
                                        defaultValue={params.range_height_bagel}
                                    />

                                    {/*rango diametro de rosca */}
                                    <div className="field">
                                        <label className="label is-small">Rango (±)</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        step="0.01"
                                        placeholder="Rango diametro rosca"
                                        ref={this.range_diameter_bagel}
                                        defaultValue={params.range_diameter_bagel}
                                    />
                                    {/*rango peso */}
                                    <div className="field">
                                        <label className="label is-small">Rango (±)</label>
                                    </div>
                                    <input
                                        className="input is-small"
                                        type="number"
                                        step="0.01"
                                        placeholder="Rango peso"
                                        ref={this.range_weight}
                                        defaultValue={params.range_weight   }
                                    />


                                    {/*end column */}
                                </div>
                            </div>
                            <div className="control">
                                        <div className="field">
                                            <label className="label is-small">Altura</label>
                                        </div>

                                        {/*Altura */}
                                        <input
                                            className="input is-small"
                                            type="text"
                                            placeholder="Altura"
                                            ref={this.height}
                                            
                                            defaultValue={params.height}
                                        />
                                    </div>

                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success" onClick={this.handle}>Guardar cambios</button>

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
export default EditDesflanat;