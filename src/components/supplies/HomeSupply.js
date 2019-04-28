import React, { Component } from 'react';
import CreateType from './CreateType';
import SearchBox from '../SearchBox';
import axios from 'axios';
import URLBack from '../../UrlBack';
import EditType from './EditType';
import Swal from 'sweetalert2';
import CreateSupply from './CreateSupply'
const Table = (props) => {
    const info = props.data
    return (
        <div className="notification">
            <table className="table is-fullwidth  is-size-7">
                <thead>
                    <tr>
                        <td><abbr >id</abbr></td>
                        <th>Nombre tipo</th>
                        <th><abbr title="Opciones">Editar</abbr></th>
                        <th><abbr title="Opciones">Borrar</abbr></th>
                    </tr>
                </thead>
                <tbody>

                    {Object.keys(info).map(key => (
                        <tr key={key}>
                            <th >{info[key].id}</th>
                            <td><a onClick={props.render_create.bind(this,key)}>
                             {info[key].name}
                              </a></td>
                            <td><a><span className="icon is-small has-text-success " onClick={props.edit.bind(this, key)}>
                                <i className="fas fa-lg fa-edit   "></i>
                            </span></a></td>
                            <td><a><span className="icon has-text-danger is-small" onClick={props.delete.bind(this, key)}>
                                <i className="fas fa-trash-alt"></i>
                            </span></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
class HomeSupply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type_list: [],
            render_modal: false,
            key: null,
            render_create: false,
        }
        this.addItem = this.addItem.bind(this);
        this.activeEditModal = this.activeEditModal.bind(this);
        this.editRequest = this.editRequest.bind(this);
        this.deleteRequest = this.deleteRequest.bind(this);
        this.renderAddSupply = this.renderAddSupply.bind(this)
    }
    activeEditModal(key) {
        this.setState({ key: key, render_modal: true });
    }
    removeModal = () => {
        this.setState({ key: null, render_modal: false })
    }
    addItem(item) {
        let items = [...this.state.type_list];
        items.push(item);
        this.setState({ type_list: items });
    }
    editRequest(info) { //info : {name: name}
        const id = this.state.type_list[this.state.key].id;
        const url = `${URLBack}/type_supplies/${id}`;
        axios.put(url, { type_supply: info }).then(res => {
            let types = this.state.type_list;
            if (res.status === 200) {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha editado el tipo de insumo',
                    showConfirmButton: false,
                    timer: 1500
                })
                types[this.state.key] = res.data;
                this.setState({ type_list: types })
            }
        }).catch(function (error) {
            console.log(error)
        });
    }
    renderAddSupply(key){
        this.setState({key: key,render_create: true })
    }
    deleteRequest(key) {
        Swal({
            title: 'Quieres eliminar el tipo,?',
            text: "Se eliminaran los reportes y los insumos asociados",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy de acuerdo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                const id = this.state.type_list[key].id;
                const url = `${URLBack}/type_supplies/${id}`;
                axios.delete(url).then(res => {
                    Swal({
                        position: 'top-end',
                        type: 'success',
                        title: 'Se ha eliminado todos los insumos asociados a el',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    let types = [...this.state.type_list];
                    types.splice(key, 1)
                    this.setState({ type_list: types, render_create: false })
                }).catch(function (error) {
                    console.log(error);
                });
            }
        })


    }
    getAllRequest() {
        const url = `${URLBack}/type_supplies`;
        axios.get(url).then(res => {
            if (res.status === 200) this.setState({ type_list: res.data })
        }).catch(function (error) {
            console.log(error);
        });
    }
    componentDidMount() {
        this.getAllRequest();
    }
    render() {
        let modal;
        let create ;
        const key = this.state.key;
        if (this.state.render_modal)
            modal = <EditType
                data={this.state.type_list[key]}
                exit={this.removeModal}
                request={this.editRequest} />;
        else
            modal = null;

        if(this.state.render_create)
            create = <CreateSupply 
            data = {this.state.type_list[this.state.key]}/>
        else
            create = null;
        
        return (
            <div className="columns">
                <div className="column is-one-third">
                    <CreateType addItem={this.addItem} />
                    <SearchBox />
                    <Table
                        data={this.state.type_list}
                        edit={this.activeEditModal}
                        delete={this.deleteRequest}
                        render_create = {this.renderAddSupply}
                        />
                </div>
                <div className="column">
                    {create}
                </div>
                {modal}
            </div>

        );
    }
}

export default HomeSupply;