import React, { Component } from 'react';
import Header from '../pdfsGeneration/Header'
import HeaderGeneral from './HeaderGeneral'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'

function dateR(data) {
    var regDate = /(\d{4}-\d{2}-\d{2})[A-Z]{1,2}(\d{1,2}:\d{2}:\d{2}).*/
    var [exp, date, hour] = regDate.exec(data)
    return [date, hour]
}
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goTo: false,
            key_r: null,
            selected: [],
            currentRow: null
        }
        this.downloadLink = this.downloadLink.bind(this);
        this.delete = this.delete.bind(this);
        this.enableHover = this.enableHover.bind(this);
        this.disableHover = this.disableHover.bind(this);
    }

    enableHover(key) {
        let selected = [...this.state.selected]
        let hovered = "is-selected";
        let current = this.state.currentRow;

        if (current != key && current != null) {
            selected[current] = null;
        }
        selected[key] = hovered;
        this.setState({ selected: selected, currentRow: key })
    }
    disableHover(key){
        let selected = [...this.state.selected]
        let current = this.state.currentRow;
        selected[current] = null;
        this.setState({selected: selected, currentRow: current})

    }
    downloadLink(key) {
        this.setState({ goTo: true, key_r: key })
        this.renderRedirect(this.props.data[key].id)
    }

    delete(key) {
        const txt = "Numero de reporte: " + this.props.data[key].report_number
        Swal({
            title: 'Quieres eliminar el reporte?',
            text: txt,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy de acuerdo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                this.props.deleteRequest(this.props.data[key].id, key)
            }
        })

    }
    renderRedirect = (id) => {
        if (this.state.goTo) {
            return <Redirect push to={'/reports/' + id} />
        }
    }
    componentDidMount() {
        let size = this.props.data.length;
        let arraySelected = [];
        for (var i = 0; i < size; i++) arraySelected.push(null);
        this.setState({ selected: arraySelected })
    }
    render() {
        let info = this.props.data
        if (this.state.goTo === true)
            return <Redirect push to={'/reports/' + this.props.data[this.state.key_r].id} />

        //        return <HeaderGeneral  data = {info[this.state.key_r]} />

        return (
            <div>
                <p className="is-small">Numero de reportes: {info.length} </p>
                <table className="table is-fullwidth is-bordered">
                    <thead>
                        <tr>
                            <th><abbr >N° de reporte</abbr></th>
                            <th>Cliente</th>
                            <th>Muestra</th>
                            <th>Nombre de la muestra</th>
                            <th>Fecha de creación</th>
                            <th>Visualizar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(info).map(key => (
                            <tr key={key} className={this.state.selected[key]} onMouseEnter={this.enableHover.bind(this, key)} onMouseLeave={this.disableHover.bind(this, key)}>
                                <td >{info[key].report_number}</td>
                                <td>{info[key].client_name}</td>
                                <td>{info[key].sample}</td>
                                <td>{info[key].sample_name}</td>

                                <td>{dateR(info[key].created_at)[0]} </td>
                                <td><button className="button is-link is-small" onClick={this.downloadLink.bind(this, key)}>Visualizar</button></td>
                                <td><button className="button is-danger is-small" onClick={this.delete.bind(this, key)}>Eliminar</button></td>
                            </tr>
                        ))}

                    </tbody>


                </table>

            </div>

        );
    }

}

export default Table;