import React, { Component } from 'react';
function Menu(props) {
    return (
        <h1 className="title">Crea un insumo de {props.data.name}</h1>
    );
}


class Name extends Component {
    name = React.createRef();
    change = () => {
        let value = this.name.current.value;
        this.props.action(value, this.props.id);
    }
    render() {
        return (
            <div className="field ">
                <div className="control is-expanded">
                    <input className=" is-small input is-primary" type="text"
                        placeholder="nombre de la especificación"
                        ref={this.name}
                        onChange={this.change}
                        defaultValue={this.props.name}
                    />
                </div>
            </div >
        );
    }
}
class Especification extends Component {
    espec = React.createRef();
    addChar = () => {
        let value = `${this.espec.current.value}±`;
        this.espec.current.value = value;
        this.change();
    }
    change = () => {
        let value = this.espec.current.value;
        this.props.action(value, this.props.id);
    }
    remove = () => {
        this.props.remove(this.props.id);
    }
    render() {
        return (
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input className=" is-small input is-dark" type="text"
                        placeholder="Especificacion, Ejemplo 3±10"
                        ref={this.espec}
                        onChange={this.change}
                        defaultValue={this.props.espec}
                    />
                </div>
                <div className="control">
                    <a className="button is-small is-info" onClick={this.addChar} >
                        ±
                    </a>
                </div>
                <div className="control">
                    <a className="button is-small is-danger" onClick={this.remove} >
                        Remover
                    </a>
                </div>
            </div >
        );
    }
}


class CreateSupply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: [],
            espc: [],
        };
        this.addToEspec = this.addToEspec.bind(this);
        this.addToName = this.addToName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    addToEspec(value, key) {
        let espc = [...this.state.espc]
        espc[key] = value;
        this.setState({ espc: espc })
    }
    addToName(value, key) {
        let name = [...this.state.name]
        name[key] = value;
        this.setState({ name: name })
    }
    componentDidMount() {
        this.addItem();
    }
    addItem() {
        let name_r = this.state.name;
        let espc_r = this.state.espc;
        name_r.push("");
        espc_r.push("");
        this.setState({
            name: name_r,
            espc: espc_r,
        })
    }
    removeItem(key) {
        let name_r = [...this.state.name];
        let espc_r = [...this.state.espc];
        name_r.splice(key, 1);
        espc_r.splice(key, 1);
        this.setState({
            name: name_r,
            espc: espc_r,
        })
    }
    name = React.createRef();
    render() {
        return (
            <div className="notification">
                <Menu data={this.props.data} />
               <div className="control is-expanded">
                    <input className=" is-small input is-dark" type="text"
                        placeholder="Nombre del producto"
                        ref={this.name}
                        onChange={this.change}
                        
                    />
                </div>                    <div className="columns">
                        <div className="column">
                            Nombre de Especificación:
                        {Object.keys(this.state.name).map(key => (
                                <Name name={this.state.name[key]} action={this.addToName} key={key} id={key} />
                            ))
                            }
                        </div>
                        <div className="column">
                            Especificación:
                        {Object.keys(this.state.name).map(key => (
                                <Especification espec={this.state.espc[key]} key={key} id={key} action={this.addToEspec.bind(this)} remove={this.removeItem} />

                            ))
                            }
                        </div>
                    </div>
                    <div className="field">
                        <button className="button is-link is-small" onClick={this.addItem}>
                            Agregar item
                       </button>
                        <button className="button is-success is-small is-pulled-right" onClick={this.addItem} type="submit">
                            Agregar insumo
                      </button>
                    </div>
         
            </div>
        );
    }
}

export default CreateSupply;