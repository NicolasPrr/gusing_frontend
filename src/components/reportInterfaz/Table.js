import React, { Component } from 'react';
import Swal from 'sweetalert2'
import {  Link } from 'react-router-dom'

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
        let hovered = "is-selected is-warning";
        let current = this.state.currentRow;

        if (current !== key && current !== null) {
            selected[current] = null;
        }
        selected[key] = hovered;
        this.setState({ selected: selected, currentRow: key })
    }
    disableHover(key) {
        let selected = [...this.state.selected]
        let current = this.state.currentRow;
        selected[current] = null;
        this.setState({ selected: selected, currentRow: current })

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
    componentDidMount() {
        let size = this.props.data.length;
        let arraySelected = [];
        for (var i = 0; i < size; i++) arraySelected.push(null);
        this.setState({ selected: arraySelected })
    }
    render() {
        let info = this.props.data
        return (
            <div>
                <p className="is-small">Numero de reportes: {info.length} </p>
                <table className="table is-fullwidth is-bordered is-size-7 ">
                    <thead>
                        <tr>
                            <th><abbr >N° de reporte</abbr></th>
                            <th>Cliente</th>
                            <th>Muestra</th>
                            <th>Nombre  muestra</th>
                            <th>Fecha de informe</th>
                            <th>Imprimir</th>
                            <th>Editar</th>
                            <th>Duplicar</th>
                            <th>Eliminar</th>
                
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(info).map(key => (
                            <tr key={key}  onMouseEnter={this.enableHover.bind(this, key)} onMouseLeave={this.disableHover.bind(this, key)}>
                                <td>{info[key].report_number}</td>
                                <td className="has-text-centered">{info[key].client_name}</td>
                                <td className="has-text-centered">{info[key].sample}</td>
                                <td className="has-text-centered">{info[key].sample_name}</td>
                                <td className="has-text-centered">{info[key].date_report}</td>
                                <td className="has-text-centered">
                                    <button className ="button is-small">
                                        <Link to={"/print/" + info[key].id} target="_blank"  >
                                            <span className="icon is-small has-text-success ">
                                                <i className="fas fa-lg fa-print   "></i>
                                            </span>
                                        </Link>
                                    </button>
                                </td>
                                <td className="has-text-centered">
                                    <button className ="button is-small">
                                        <Link to={"/edit/report/" + info[key].id} target="_blank"  >

                                            <span className="icon is-small">
                                                <i className="fas fa-edit"></i>
                                            </span>
                                        </Link>
                                    </button>

                                </td>
                                <td className="has-text-centered">
                                    <button className ="button is-small">
                                        <Link to={"/clone/report/" + info[key].id} target="_blank"  >
                                            <span className="icon  is-small has-text-primary">
                                                <i className="fas fa-clone"></i>
                                            </span>
                                        </Link>
                                    </button>

                                </td>
                                <td className="has-text-centered">
                                    <button className ="button is-small">

                                        <span className="icon has-text-danger is-small" onClick={this.delete.bind(this, key)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </span>

                                    </button>
                                </td>

                            </tr>
                        ))}

                    </tbody>


                </table>

            </div>

        );
    }

}

export default Table;