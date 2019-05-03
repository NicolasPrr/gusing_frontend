import React, { Component } from "react";

class DesflanatForm extends Component {
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

    this.props.createDesflanat(info);
  };
  render() {
    return (
      <div className="notification">
        <form onSubmit={this.handle}>
          <div className="columns">
            <div className="column">

              <div className="field">
                <label className="label is-small">Nombre</label>
              </div>
              <div className="control">
                {/*Nombre */}
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Nombre del producto"
                  ref={this.name}
                />
              </div>
              <div className="field">
                <label className="label is-small">Espesor de pared</label>
              </div>
              <input
                className="input is-small"
                type="number"
                placeholder="Base de espesor de pared"
                ref={this.wall_gauge}
                step="0.01"
              />
              <div className="field">
                <label className="label is-small">Diametro base</label>
              </div>
              <input
                className="input is-small"
                type="number"
                placeholder="Diametro base"
                ref={this.diameter_base}
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
              />


              {/* END COLUMN */}
            </div>

            <div className="column">
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
                />
              </div>
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
              />


              {/*end column */}
            </div>

          </div>
          <button
            type="submit"
            className="button is-fullwidth is-info is-rounded is-small"
          >
            Crear Producto
          </button>
        </form>
      </div>
    );
  }
}

export default DesflanatForm;
