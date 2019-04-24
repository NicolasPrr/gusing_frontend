import React, { Component } from "react";

class GarnicForm extends Component {
  name = React.createRef();

  db_min = React.createRef(); //base
  db_max = React.createRef(); //rango

  lt_min = React.createRef();
  lt_max = React.createRef();

  cl_min = React.createRef();
  cl_max = React.createRef();

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
    
    this.props.createGarnic(info);
  };
  render() {
    return (
      <div className="notification">
        <form onSubmit={this.handle}>
          {/*Diametro de base*/}
          <div className="field">
            <label className="label">Nombre</label>
          </div>
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Nombre del producto"
              ref={this.name}
            />
          </div>
          {/*Diametro de base*/}
          <div className="field">
            <label className="label">Diametro de base</label>
          </div>
          <div className="columns">
            <div className="column">
              
              Base
              <div className="control">
                <input
                  className="input is-small"
                  type="number"
                  step ="0.01"
           
                  placeholder="Numero base"
                  ref={this.db_min}
                />
              </div>
            </div>

            <div className="column">

              Rango (±)
              <div className="control">
                <input
                  className="input is-small"
                  type="number"
                  placeholder="Numero rango"
                  ref={this.db_max}
                  step ="0.01"
                />
              </div>
            </div>
          </div>
          {/*Largo total*/}
          <div className="field">
            <label className="label">Largo total</label>
          </div>
          <div className="columns">
            <div className="column">

              Base
              <div className="control">
                <input
                  className="input is-small"
                  type="number"
                  placeholder="Base"
                  ref={this.lt_min}
                  step ="0.01"
               
                />
              </div>
            </div>

            <div className="column">
            Rango (±)
              <div className="control">
                <input
                  className="input is-small"
                  type="number"
                  placeholder="Numero rango"
                  ref={this.lt_max}
                  step ="0.01"
           
                />
                
              </div>
            </div>
          </div>
          {/*Calibre pared*/}
          <div className="field">
            <label className="label">Calibre pared</label>
          </div>
          ￼
          <div className="columns">
            <div className="column">
              Base
              <div className="control">
                <input
                  className="input is-small"
                  type="number"
                  placeholder="Base"
                  ref={this.cl_min}
                  step ="0.01"
           
                />
              </div>
            </div>

            <div className="column">
            Rango (±)
              <div className="control">
                <input
                  className="input is-small"
                  type="number"
                  placeholder="Numero rango"
                  ref={this.cl_max}
                  step ="0.01"
           
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="button is-fullwidth is-info is-rounded"
          >
            Crear Producto
          </button>
        </form>
      </div>
    );
  }
}

export default GarnicForm;
