import React, { Component } from "react";

class GarnicForm extends Component {
  name = React.createRef();

  db_min = React.createRef();
  db_max = React.createRef();

  lt_min = React.createRef();
  lt_max = React.createRef();

  cl_min = React.createRef();
  cl_max = React.createRef();

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
    
    //this.props.createGarnic(info);
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
              {" "}
              Minimo
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Minimo"
                  ref={this.db_min}
                />
              </div>
            </div>

            <div className="column">
              {" "}
              Maximo
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Maximo"
                  ref={this.db_max}
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
              {" "}
              Minimo
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Minimo"
                  ref={this.lt_min}
                />
              </div>
            </div>

            <div className="column">
              {" "}
              Maximo
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Maximo"
                  ref={this.lt_max}
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
              {" "}
              Minimo
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Minimo"
                  ref={this.cl_min}
                />
              </div>
            </div>

            <div className="column">
              {" "}
              Maximo
              <div className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Maximo"
                  ref={this.cl_max}
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
