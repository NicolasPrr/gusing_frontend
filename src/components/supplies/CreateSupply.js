import React, { Component } from 'react';
import axios from 'axios'
import URLBack from '../../UrlBack';
import Swal from 'sweetalert2';

/*Puede editar o crear un insumo siempre, la condicion es que reciba los datos props del insumo*/
function Menu(props) {
    if (props.edit_data !== null) {
        return <h1 className="title">Edita un insumo de {props.data.name}</h1>
    }
    return (
        <h1 className="title">Crea un insumo de {props.data.name}</h1>
    );
}
function OptionMenu(props) {
    if (props.edit_data !== null) {
        return (
            <button className="button is-info is-small is-pulled-right" onClick={props.editRequest} type="submit">
                Editar insumo
           </button>
        )
    }
    return (
        <button className="button is-success is-small is-pulled-right" onClick={props.createRequest} type="submit">
            Agregar insumo
       </button>
    )


}

class Name extends Component {
    name = React.createRef();
    change = () => {
        let value = this.name.current.value;
        this.props.action(value, this.props.id);
    }
    render() {
        let defaultName = this.props.name
        return (
            <div className="field ">
                <div className="control is-expanded">
                    <input className=" is-small input is-dark" type="text"
                        placeholder="nombre de la especificación"
                        ref={this.name}
                        onChange={this.change}
                        defaultValue={defaultName}
                    />
                </div>
            </div >
        );
    }
}
class Especification extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode: null
        }
    }

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
        let data = []          
        let defaultEspc = this.props.espec
        return (
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input className=" is-small input is-dark"
                        defaultValue={defaultEspc}
                        type="text"
                        placeholder="Especificacion, Ejemplo 3±10"
                        ref={this.espec}
                        onChange={this.change}
                        list="data"
                    />
                    <datalist id="data">
                        {Object.keys(data).map(key => (
                            <option value={data[key]} />
                        ))}
                    </datalist>
                </div>
                <div className="control">
                    <button className="button is-small is-info" onClick={this.addChar} >
                        ±
                    </button>
                </div>
                <div className="control">
                    <button className="button is-small is-danger" onClick={this.remove} >
                        Remover
                    </button>
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
        this.createRequest = this.createRequest.bind(this);
        this.editRequest = this.editRequest.bind(this);
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
        const data = this.props.edit_data;
        let names = [];
        let espec = [];
        if (data !== null) {
            for (var i = 0; i < data.features.length; i++) {
                names.push(data.features[i].name);
                espec.push(data.features[i].especification);
            }
            this.setState({ name: names, espc: espec })

        } else {
            this.addItem();

        }
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
        this.setState({ name: [], espc: [] })
        setTimeout(() => {
            this.setState({
                name: name_r,
                espc: espc_r,
            })
        }, 100);
    }
    editRequest() {
        const id = this.props.edit_data.id;
        let features = [];
        for (var i = 0; i < this.state.espc.length; i++) {
            features.push({ name: this.state.name[i], especification: this.state.espc[i] })
        }
        const url = `${URLBack}/supplies/${id}`
        const info = {
            name: this.name.current.value,
        }
        axios.put(url, { supply: info, features }).then(res => {
            if (res.status === 200) {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha editado el insumo',
                    showConfirmButton: false,
                    timer: 1500
                })
                // this.setState({ name: [], espc: [] })
                window.location.reload();

            }
        }).catch(function (error) {
            console.log(error);
        })
        
    }
    
    createRequest() {
        let url;
        let features = [];
        for (var i = 0; i < this.state.espc.length; i++) {
            features.push({ name: this.state.name[i], especification: this.state.espc[i] })
        }
        const info = {
            name: this.name.current.value,
            type_supply_id: this.props.data.id,
        }
        url = `${URLBack}/supplies`
        axios.post(url, {
            supply: info,
            features,
        }).then(res => {
            if (res.status === 201) {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha agregado el insumo',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
    name = React.createRef();

    render() {
        let names = this.state.name;
        let espec = this.state.espc;

        let name_input;
        if (this.props.edit_data === null) {
            name_input = null;
        } else {
            name_input = this.props.edit_data.name;
        }
        return (

            <div className="notification">
                <Menu data={this.props.data} edit_data={this.props.edit_data} />
                <div className="control is-expanded">
                    <input className=" is-small input is-dark" type="text"
                        placeholder="Nombre del producto"
                        ref={this.name}
                        onChange={this.change}
                        defaultValue={name_input}

                    />
                </div>

                <div className="columns">
                    <div className="column">
                        Nombre de Especificación:
                        {Object.keys(names).map(key => (
                            <Name name={names[key]} action={this.addToName} key={key} id={key} />
                        ))
                        }
                    </div>
                    <div className="column">
                        Especificación:
                        {Object.keys(espec).map(k => (
                            <Especification espec={espec[k]} key={k} id={k} action={this.addToEspec.bind(this)} remove={this.removeItem} />

                        ))
                        }
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link is-small" onClick={this.addItem}>
                        Agregar especificación(item)
                       </button>
                    <OptionMenu edit_data={this.props.edit_data} createRequest={this.createRequest} editRequest={this.editRequest} />
                </div>

            </div>
        );
    }
}

export default CreateSupply;