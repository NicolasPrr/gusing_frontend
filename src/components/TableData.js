import React, { Component } from 'react';
import Swal from 'sweetalert2'

class TableData extends Component {
    constructor(props){
        super(props)
        this.show = this.show.bind(this)
        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
        this.report = this.report.bind(this)
    }
    show(obj){
        this.props.show(obj)
    }

    edit(obj){
        this.props.edit(obj)
    }
    report(obj){
        this.props.report(obj)
    }
    delete(obj, key){
        const txt = "Nombre del elemento: " + obj.name + ". Se borraran todos los elementos asociados de este tipo" 
        Swal({
            title: 'Quieres eliminar el elemento?',
            text: txt,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy de acuerdo!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.props.delete(obj, key)
            }
          })

    }

    render() {
        const info = this.props.data

        return (
            <div>
                <table className="table is-fullwidth ">
                    <thead>
                        <tr>
                            <td><abbr >id</abbr></td>
                            <th>Nombre</th>
                            <th><abbr title="Opciones"> Ver</abbr></th>
                            <th><abbr title="Opciones">Editar</abbr></th>
                            <th><abbr title="Opciones">Crear informe</abbr></th>
                            <th><abbr title="Opciones">Borrar</abbr></th>
                        </tr>
                    </thead>
                    <tbody>

                    {Object.keys(info).map(key => (
                        <tr key = {key}>    
                        <th>{info[key].id}</th>
                        <td>{info[key].name}</td>
                        <td><button className="button is-info is-small" onClick = {this.show.bind(this,info[key])} >Ver</button></td>
                        <td><button className="button is-success is-small" onClick = {this.edit.bind(this,info[key])} >Editar</button></td>
                        <td><button className="button is-dark is-small" onClick = {this.report.bind(this, info[key])} >Crear informe</button></td>
                        <td><button className="delete is-large" onClick = {this.delete.bind(this,info[key] , key)}></button></td>
                    </tr>
                    ))}



                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;