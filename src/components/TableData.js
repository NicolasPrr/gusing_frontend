import React, { Component } from 'react';
import ItemTable from './ItemTable'
class TableData extends Component {
    constructor(props){
        super(props)
        this.show = this.show.bind(this)
    }
    show(obj){
        this.props.show(obj)
    }

    edit(obj){
        this.props.edit(obj)
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
                        </tr>
                    </thead>
                    <tbody>

                    {Object.keys(info).map(key => (
                        <tr key = {key}>
                        <th>{info[key].id}</th>
                        <td>{info[key].name}</td>
                        <td><a className="button is-info is-small" onClick = {this.show.bind(this,info[key])} >Ver</a></td>
                        <td><a className="button is-success is-small" onClick = {this.edit.bind(this,info[key])} >Editar</a></td>
                        <td><a className="button is-dark is-small" onClick = {""    } >Crear informe</a></td>
                    </tr>
                    ))}



                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;