import React, { Component } from 'react';
import HeroDark from '../HeroDark'
import LeftMenu from '../LeftMenu';
import DesflanatForm from './desflanat/DesflanatForm'
import axios from "axios";
import URLBack from '../../UrlBack'
import SearchBox from '../SearchBox'
import TableData from '../TableData'
import ModalDesflanat from './desflanat/ModalDesflanat'
import EditDesflanat from './desflanat/EditDesflanat'
import Swal from 'sweetalert2'
import Stepper from '../Stepper'


class Desflanat extends Component {
    state = {
        opt: 0,
        desflanats: [],
        desflanat: null,
        mode: null,
        data: null
    }
    render_option = (option) => {
        this.setState({ opt: option })
    }
    lookingProduct = (data) => {
        let url = URLBack + "/colapsible_desflanats"
        axios.get(url).then(res => {
            this.setState({ desflanats: res.data })
        })
    } 
    createDesflanat = (data) => {
        let url = URLBack + "/colapsible_desflanats"
        axios.post(url, { colapsible_desflanat: data }).then(res => {
            if (res.status === 201) {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha agregado el elemento',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        }).catch(function (error) {
            console.log(error)
        });
    }
    deleteDesflanat = (data, key) => {
        let url = URLBack + "/colapsible_desflanats/" + data.id
        axios.delete(url).then(res => {
            if (res.status === 204) {
                console.log(this.state.desflanats.splice(key, 1))

                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Cambios realizados',
                    showConfirmButton: false,
                    timer: 1500
                })

                this.setState({ desflanat: null })
            }

        }).catch(function (error) {
            console.log(error)
        });
    }
    componentDidMount(){
        let url = URLBack + "/colapsible_desflanats"
        axios.get(url).then(res => {
            this.setState({ desflanats: res.data })
        })

    }
    editDesflanat = (data) => {
        let url = URLBack + "/colapsible_desflanats/" + this.state.desflanat.id
        alert(url)
        axios.put(url, { colapsible_desflanat: data }).then(res => {
            if (res.status === 200) {
                let gars = [...this.state.desflanats];
                gars[this.state.key_i] = res.data
                this.setState({ desflanats: gars })

                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha editado con exito',
                    showConfirmButton: false,
                    timer: 1500
                })


            }

        }).catch(function (error) {
            console.log(error)
        });
    }

    showFeatures = (object) => {
        this.setState({ desflanat: object, mode: "show" })
        //habilita la visualizacion de los datos
    }
    editFeatures = (object, key_id) => {
        this.setState({ desflanat: object, mode: "edit", key_i: key_id })
        //habilita la edicion de los datos
    }
    showReport = (object) => {
        this.setState({ desflanat: object, opt: 3 })
    }
    exitModal = () => {
        this.setState({ desflanat: null, mode: null })
    }
    option_create = () => {
        if (this.state.opt === 3) return "create"
        else return null
    }
    /*
    showDesflanat renderiza los modal, una para la edicion  y el otro para ver los datos
    rnd se encarga de renderizar la opcion, es decir, si selecciona crear o listar, esto se debe al modo, si esta en modo editar
    o modo ver, o modo crear formulario.

    opt == 0 -> opcion no seleccionada
    otp == 1 -> lista los datos
    opt == 2 -> crear
    opt == 3 -> reporte

    */

    render() {
        let rnd = []
        let showDesflanat = null
        let render_create
        //opt, es la opcion, si se pondra el formulario o la lista
        if (this.state.opt === 0)
            rnd = null
        if (this.state.opt === 1) {
            rnd.push(<SearchBox lookingProduct={this.lookingProduct} key={0} />)
            if (this.state.desflanats.length > 0)
                rnd.push(<TableData data={this.state.desflanats} key={1} show={this.showFeatures} edit={this.editFeatures} delete={this.deleteDesflanat} report={this.showReport} />)
        }
        if (this.state.opt === 2)
            rnd = <DesflanatForm createDesflanat={this.createDesflanat} />
        if (this.state.opt === 3) {
            render_create = "create"
            // rnd = <Report obj = {this.state.desflanat}  sample = "Desflanat"/>
            rnd = <Stepper   obj = {this.state.desflanat} sample = "Colapsible"  mode = "ReportDesflanat" />
        }
        //modals            
        const desflanat = this.state.desflanat
        if (this.state.mode === null)
            showDesflanat = null
        else if (this.state.mode === "edit")
            showDesflanat = <EditDesflanat data={desflanat} exit={this.exitModal} editDesflanat={this.editDesflanat} />
        else if (this.state.mode === "show")
            showDesflanat = <ModalDesflanat data={desflanat} exit={this.exitModal} />


        return (
            <div>
                <HeroDark title="Colapsible" subtitle="desflanat" />
                <div >
                    <div className="columns">
                        <div className="column is-one-fifth"><LeftMenu render_form={this.render_option} create={render_create} /></div>
                        <div className="column">{rnd}
                            {showDesflanat}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}


export default Desflanat;