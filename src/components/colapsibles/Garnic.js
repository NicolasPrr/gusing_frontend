import React, { Component } from 'react';
import HeroDark from '../HeroDark'
import LeftMenu from '../LeftMenu';
import GarnicForm from './garnic/GarnicForm'
import axios from "axios";
import URLBack from '../../UrlBack'
import SearchBox from '../SearchBox'
import TableData from '../TableData'
import ModalGarnic from './garnic/ModalGarnic'
import EditGarnic from './garnic/EditGarnic'
import Swal from 'sweetalert2'
import Stepper from '../Stepper'


class Garnic extends Component {
    state = {
        opt: 0,
        garnics: [],
        garnic: null,
        mode: null,
        data: null
    }
    render_option = (option) => {
        this.setState({ opt: option })
    }
    lookingProduct = (data) => {
        let url = URLBack + "/colapsible_garnics"
        axios.get(url).then(res => {
            this.setState({ garnics: res.data })
        })
    } 
    createGarnic = (data) => {
        let url = URLBack + "/colapsible_garnics"
        axios.post(url, { colapsible_garnic: data }).then(res => {
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
    deleteGarnic = (data, key) => {
        let url = URLBack + "/colapsible_garnics/" + data.id
        axios.delete(url).then(res => {
            if (res.status === 204) {
                console.log(this.state.garnics.splice(key, 1))

                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Cambios realizados',
                    showConfirmButton: false,
                    timer: 1500
                })

                this.setState({ garnic: null })
            }

        }).catch(function (error) {
            console.log(error)
        });
    }
    componentDidMount(){
        let url = URLBack + "/colapsible_garnics"
        axios.get(url).then(res => {
            this.setState({ garnics: res.data })
        })

    }
    editGarnic = (data) => {
        let url = URLBack + "/colapsible_garnics/" + this.state.garnic.id
        alert(url)
        axios.put(url, { colapsible_garnic: data }).then(res => {
            if (res.status === 200) {
                let gars = [...this.state.garnics];
                gars[this.state.key_i] = res.data
                this.setState({ garnics: gars })

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
        this.setState({ garnic: object, mode: "show" })
        //habilita la visualizacion de los datos
    }
    editFeatures = (object, key_id) => {
        this.setState({ garnic: object, mode: "edit", key_i: key_id })
        //habilita la edicion de los datos
    }
    showReport = (object) => {
        this.setState({ garnic: object, opt: 3 })
    }
    exitModal = () => {
        this.setState({ garnic: null, mode: null })
    }
    option_create = () => {
        if (this.state.opt === 3) return "create"
        else return null
    }
    /*
    showGarnic renderiza los modal, una para la edicion  y el otro para ver los datos
    rnd se encarga de renderizar la opcion, es decir, si selecciona crear o listar, esto se debe al modo, si esta en modo editar
    o modo ver, o modo crear formulario.

    opt == 0 -> opcion no seleccionada
    otp == 1 -> lista los datos
    opt == 2 -> crear
    opt == 3 -> reporte

    */

    render() {
        let rnd = []
        let showGarnic = null
        let render_create
        //opt, es la opcion, si se pondra el formulario o la lista
        if (this.state.opt === 0)
            rnd = null
        if (this.state.opt === 1) {
            rnd.push(<SearchBox lookingProduct={this.lookingProduct} key={0} />)
            if (this.state.garnics.length > 0)
                rnd.push(<TableData data={this.state.garnics} key={1} show={this.showFeatures} edit={this.editFeatures} delete={this.deleteGarnic} report={this.showReport} />)
        }
        if (this.state.opt === 2)
            rnd = <GarnicForm createGarnic={this.createGarnic} />
        if (this.state.opt === 3) {
            render_create = "create"
            // rnd = <Report obj = {this.state.garnic}  sample = "Garnic"/>
            rnd = <Stepper   obj = {this.state.garnic} sample = "Colapsible"  mode = "garnic" />
        }
        //modals            
        const garnic = this.state.garnic
        if (this.state.mode === null)
            showGarnic = null
        else if (this.state.mode === "edit")
            showGarnic = <EditGarnic data={garnic} exit={this.exitModal} editGarnic={this.editGarnic} />
        else if (this.state.mode === "show")
            showGarnic = <ModalGarnic data={garnic} exit={this.exitModal} />


        return (
            <div>
                <HeroDark title="Colapsible" subtitle="garnic" />
                <div >
                    <div className="columns">
                        <div className="column is-one-fifth"><LeftMenu render_form={this.render_option} create={render_create} /></div>
                        <div className="column">{rnd}
                            {showGarnic}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}


export default Garnic;