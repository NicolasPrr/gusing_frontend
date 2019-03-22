import React, { Component } from 'react';
import axios from 'axios';
import URLBack from '../../UrlBack'
import Swal from 'sweetalert2'
import EditClient from './EditClient';
class Clients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: [],
            client: null,
            mode: null,
            key_c: null,
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
        this.editClientRequest = this.editClientRequest.bind(this)
    }
    cli = React.createRef();
    dir = React.createRef();
    handleAdd(e) {
        e.preventDefault();
        const client = this.cli.current.value;
        const direction = this.dir.current.value;
        const data = {
            name: client,
            direction: direction
        }

        let url = URLBack + "/clients"
        axios.post(url, { client: data }).then(res => {
            console.log(res)
            if (res.status === 201) {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha agregado el cliente',
                    showConfirmButton: false,
                    timer: 1500
                })
                var newArray = this.state.clients;
                newArray.push(res.data);
                this.setState({ clients: newArray })
            }
        }).catch(function (error) {
            console.log(error)
        });
    }
    handleEdit(key, modes) {
        //habilita  o deshabilita el modal
        this.setState({ client: this.state.clients[key], mode: modes, key_c: key })
    }
    editClientRequest(info) {
         //hace la solitud para editar el cliente, actualiza el estado 
        let id = this.state.client.id;
        let clients;
        let key = this.state.key_c;
        let url = URLBack + "/clients/" + id;
        axios.put(url , {client: info}).then(res => {
            console.log(res.status)
            if(res.status === 200){
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha editado el cliente',
                    showConfirmButton: false,
                    timer: 1500
                })
                clients = this.state.clients;
                console.log(clients)
                clients[key] = res.data;
                this.setState({clients: clients, key: null, client: null})
            }
        })
     }
    handleDelete(key, id) {
        //borra directamente el cliente
        let url = URLBack + "/clients/" + id;
        axios.delete(url).then(res => {
            console.log(res)
            if (res.status === 204) {
                let clients = [...this.state.clients];
                console.log(clients.splice(key, 1));
                console.log(clients)
                this.setState({ clients: clients })
            }
        })
    }

    componentDidMount() {
        let url = URLBack + "/clients";
        axios.get(url).then(res => {
            if (res.status === 200) {
                this.setState({ clients: res.data })
            }
        })
            .catch(function (error) {
                console.log(error)
            });
    }
    editClient(mode) {
        if (mode === null) {
            return null
        }
        if (mode === "edit") {
            return (
                <EditClient data={this.state.client} exit={this.handleEdit}  editClient={this.editClientRequest}/>
            )
        }
    }
    render() {
        const clients = this.state.clients;
        return (
            <div className="container">
                <form onSubmit={this.handleAdd}>
                    <div className="columns">
                        <div className="column">
                            <div class="field">
                                <label class="label is-small">Cliente</label>
                                <div class="control has-icons-left">
                                    <input class="input is-small" placeholder="Cliente " ref={this.cli} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-hands-helping"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div class="field">
                                <label class="label is-small">Dirección</label>
                                <div class="control has-icons-left is-expand" >
                                    <input class="input is-small" type="text" placeholder="Direccion" ref={this.dir} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </span>
                                </div>
                                <button className="button is-success is-small">Agregar cliente</button>
                            </div>
                        </div>
                    </div>

                </form>
                <table className="table is-fullwidth ">
                    <thead>
                        <tr>
                            <th>Nombre del cliente</th>
                            <th>Dirección</th>
                            <th><abbr>Editar</abbr></th>
                            <th><abbr>Borrar</abbr></th>
                        </tr>
                    </thead>
                    <tbody>

                        {Object.keys(clients).map(key => (
                            <tr key={key}>
                                <td>{clients[key].name}</td>
                                <td>{clients[key].direction}</td>
                                <td><button className="button is-small is-warning" onClick={this.handleEdit.bind(this, key, "edit")}>Editar</button></td>
                                <td><button className="button is-small is-danger" onClick={this.handleDelete.bind(this, key, clients[key].id)}>Eliminar</button></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                {this.editClient(this.state.mode)}
            </div>
        );
    }
}

export default Clients;