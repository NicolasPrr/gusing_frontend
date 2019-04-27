import React, { Component } from 'react';
import axios from 'axios'
import UrlBack from '../../UrlBack'

import Swal from 'sweetalert2';
import URLBack from '../../UrlBack';
class CreateType extends Component {
    constructor(props){
        super(props);
        this.doRequest = this.doRequest.bind(this);
    }
    name = React.createRef();
    doRequest(e){
        e.preventDefault();
        
        const data = {name: this.name.current.value};
        const url = `${URLBack}/type_supplies`;
        axios.post(url, {type_supply: data}).then(res => {
            if(res.status === 201){
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Se ha agregado el tipo de insumo',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.props.addItem(res.data);
            }
        }).catch(function (error){
            console.log(error)
        });
    }
    render() {
        return (
            <div className="notification" >
                Crea un tipo de insumo
                <form onSubmit ={this.doRequest}>
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input ref = {this.name} className="input is-small" type="text" placeholder="Tipo de insumo" />
                        </div>
                        <button className="button is-small is-dark">
                            Click para crear
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateType;