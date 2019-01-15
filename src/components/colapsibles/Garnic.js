import React, { Component } from 'react';
import HeroDark from '../HeroDark'
import LeftMenu from '../LeftMenu';
import GarnicForm from './GarnicForm'
import axios from "axios";
import URLBack from '../../UrlBack'
import SearchBox from '../SearchBox'
import TableData from '../TableData'
import ModalGarnic from './ModalGarnic'
import EditGarnic from './EditGarnic'
import Swal from 'sweetalert2'
class Garnic extends Component {
    state = {
        opt: 0,
        garnics: [],
        garnic: null,
        mode: null
    }
    render_option = (option) => {
        this.setState({ opt: option })
    }
    lookingProduct = (data) => {
        let url = URLBack + "/colapsible_garnics"
        axios.get(url).then(res => {
            this.setState({garnics: res.data})
        })
    }
    createGarnic = (data) => {
        let url = URLBack + "/colapsible_garnics"
        axios.post(url, { colapsible_garnic: data }).then(res => {
            if(res.status === 201 ){
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
            if(res.status === 204 ){
                console.log(this.state.garnics.splice(key,1))
                
                Swal({
                position: 'top-end',
                type: 'success',
                title: 'Cambios realizados',
                showConfirmButton: false,
                timer: 1500
                })

                this.setState({garnic: null })
            }
            
        }).catch(function (error) {
            console.log(error)
        });   
    }
    
    editGarnic = (data) => {
        let url = URLBack + "/colapsible_garnics/" + this.state.garnic.id
        alert(url)
        axios.put(url, { colapsible_garnic: data }).then(res => {
            if(res.status === 200 ){
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
        this.setState({garnic: object, mode: "show"})
        //habilita la visualizacion de los datos
    }
    editFeatures = (object) => {
        this.setState({garnic: object, mode: "edit"})
        //habilita la edicion de los datos
    }
    exitModal = () => {
        this.setState({garnic: null, mode: null})
    }
    render() {
        let rnd = []
        let showGarnic = null
        //opt, es la opcion, si se pondra el formulario o la lista
        if (this.state.opt === 0) rnd = null
        if (this.state.opt === 1){ 
            rnd.push( <SearchBox lookingProduct={this.lookingProduct} key = {0} />)
            if(this.state.garnics.length > 0 )rnd.push( <TableData data= {this.state.garnics} key = {1}  show = {this.showFeatures} edit = {this.editFeatures} delete = {this.deleteGarnic}/> )
        }
        if (this.state.opt === 2) rnd = <GarnicForm createGarnic={this.createGarnic} />
        const garnic = this.state.garnic
        if (this.state.mode == null ) showGarnic = null
            
        else if(this.state.mode === "edit") showGarnic =   <EditGarnic data = {garnic} exit = {this.exitModal} editGarnic = {this.editGarnic} />
        else if(this.state.mode === "show") showGarnic =   <ModalGarnic data = {garnic} exit = {this.exitModal}/>

        return (
            <div>
                <HeroDark title="Colapsible" subtitle="garnic" />
                <div >
                    <div className="columns">
                        <div className="column is-one-fifth"><LeftMenu render_form={this.render_option} /></div>
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