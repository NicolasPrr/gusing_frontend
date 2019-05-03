import React, { Component } from 'react';
import CreateType from './CreateType';
import SearchBox from '../SearchBox';
import axios from 'axios';
import URLBack from '../../UrlBack';
import EditType from './EditType';
import Swal from 'sweetalert2';
import CreateSupply from './CreateSupply'
import { setTimeout } from 'timers';
import { Link } from 'react-router-dom';
function formatTooltip(features) {
    let string = ""
    for (var i = 0; i < features.length; i++) {
        string += features[i].name + ": " + features[i].especification + " | "
    }
    return string
}
const Table = (props) => {
    //tabla que mostrara los tipos de insumos
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
                            <td><a onClick={props.render_create.bind(this, key)}>
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

const TableSupplies = (props) => {
    let info = props.data
    return (
        <div className="notification " >
            <table className="table is-fullwidth  is-size-7 " >
                <thead>
                    <tr>
                        <td><abbr >id</abbr></td>
                        <th>Nombre tipo</th>
                        <th className="has-text-centered">Cantidad de atributos</th>
                        <th className="has-text-centered">Crear informe</th>
                        <th className="has-text-centered"><abbr title="Opciones">Editar</abbr></th>
                        <th className="has-text-centered"><abbr title="Opciones">Borrar</abbr></th>
                    </tr>
                </thead>
                <tbody>

                    {Object.keys(info).map(key => (
                        <tr key={key}>
                            <th >{info[key].id}</th>
                            <td>
                                {info[key].name}
                            </td>


                            <td className="has-text-centered">
                                <button className="button  tooltip is-small is-tooltip-multiline " data-tooltip={formatTooltip(info[key].features)}>
                                    {info[key].features.length}
                                </button>
                            </td>
                            <td className="has-text-centered">
                                <a>
                                    <Link to={{
                                        pathname: "/supply/report/create",
                                        state: { supply: info[key] }
                                    }} >
                                        <span className="icon is-small has-text-dark">
                                            <i class="far fa-sticky-note"></i>
                                        </span>
                                    </Link>
                                </a>
                            </td>

                            <td className="has-text-centered"><a><span className="icon is-small has-text-link" onClick={props.setSupplie.bind(this, key)}>
                                <i className="fas fa-lg fa-edit   "></i>
                            </span></a></td>
                            <td className="has-text-centered"><a><span className="icon has-text-danger is-small" onClick={props.actionDelete.bind(this, key)}>
                                <i className="fas fa-trash-alt"></i>
                            </span></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

class HomeSupply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type_list: [],
            render_modal: false,
            supplies: [],
            key: null,
            render_create: false,
            render_supply_table: false,
            supplie: null,
        }
        this.addItem = this.addItem.bind(this); //Agregar elemento a los tipos de insumo
        this.activeEditModal = this.activeEditModal.bind(this); //editar tipo de insumo
        this.editRequest = this.editRequest.bind(this); //Solicutud de edicion de tipo de insumo
        this.deleteRequest = this.deleteRequest.bind(this); //Borra el tipo de insumo
        this.renderAddSupply = this.renderAddSupply.bind(this);// Renderiza el componente para crear un insumo
        this.deleteSupplyRequest = this.deleteSupplyRequest.bind(this);//borra el insumo
        this.setSupplie = this.setSupplie.bind(this);
        this.getTypes = this.getTypes.bind(this); 
    }
    activeEditModal(key) {
        this.setState({ key: key, render_modal: true });
    }
    removeModal = () => {
        //en caso de que se de click en la x del modal, no se renderizara y se mantendra el elemento insumo actual (key).
        this.setState({ render_modal: false })
    }
    deleteSupplyRequest(key) {
        const id = this.state.supplies[key].id;
        const url = `${URLBack}/supplies/${id}`
        Swal({
            title: 'Quieres eliminar este insumo,?',
            text: "Se eliminaran los reportes asociados",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy de acuerdo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                axios.delete(url).then(res => {
                    Swal({
                        position: 'top-end',
                        type: 'success',
                        title: 'Se ha eliminado el insumo y los reportes asociados',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    let supplies = [...this.state.supplies];
                    supplies.splice(key, 1)
                    this.setState({ supplies: supplies })
                }).catch(function (error) {
                    console.log(error);
                });
            }
        })
    }
    addItem(item) {
        //items de tipo de insumo
        let items = [...this.state.type_list];
        items.push(item);
        this.setState({ type_list: items });
    }
    setSupplie(key) {
        //renderiza el form paraa crear o editar 
        this.setState({ supplie: this.state.supplies[key], render_create: false })
        setTimeout(() => {
            this.setState({ render_create: true })
        }, 100);
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
    renderAddSupply(key) {
        const id = this.state.type_list[key].id;
        let url = `${URLBack}/supplies/type/${id}`
        axios.get(url).then(res => {
            //console.log(res)
            this.setState({ supplies: res.data })
        }).catch(
            function (error) {
                console.log(error)
            })
        this.setState({ key: key, render_create: true, supplie: null, render_supply_table: true })
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
        });
    }
    getTypes(name){
        const url = `${URLBack}/type_supplies/search`;
        axios.post(url, {name: name}).then(res => {
            this.setState({type_list: res.data})
        }).catch(function (error){
            console.log(error);
        })
    }
    getAllRequest() {
        //Obtiene todos los tipos de insumo
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
        let create;
        let suppliesTable;
        const key = this.state.key;
        if (this.state.render_modal)
            modal = <EditType
                data={this.state.type_list[key]}
                exit={this.removeModal}
                request={this.editRequest} />;
        else
            modal = null;

        if (this.state.render_create) {
            //create  también servira para la edición de insumos
            create = <CreateSupply
                data={this.state.type_list[this.state.key]}
                edit_data={this.state.supplie}
            />

        } else {
            create = null;
        }
        if (this.state.render_supply_table) {
            suppliesTable = <TableSupplies
                data={this.state.supplies}
                actionDelete={this.deleteSupplyRequest}
                setSupplie={this.setSupplie}
            />
        } else {
            suppliesTable = null;
        }

        return (
            <div>
                <div className="columns">
                    <div className="column is-one-third">
                        <CreateType addItem={this.addItem} />
                        <SearchBox action = {this.getTypes}/>
                        <Table
                            data={this.state.type_list}
                            edit={this.activeEditModal}
                            delete={this.deleteRequest}
                            render_create={this.renderAddSupply}
                        />
                    </div>
                    <div className="column">
                        {create}
                        {suppliesTable}
                    </div>
                    {modal}
                </div>


            </div>

        );
    }
}

export default HomeSupply;