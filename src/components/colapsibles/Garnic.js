import React, { Component } from 'react';
import HeroDark from '../HeroDark'
import LeftMenu from '../LeftMenu';
import GarnicForm from './GarnicForm'
import axios from "axios";
import URLBack from '../../UrlBack'
import SearchBox from '../SearchBox'

class Garnic extends Component {
    state = {
        opt: 0,
        garnics: []
    }
    render_option = (option) => {
        this.setState({ opt: option })
    }
    lookingProduct = (data) => {
        let url = URLBack + "/colapsible_garnics"

        axios.get(url).then(res => {
            console.log(res)
            

        })
    }
    createGarnic = (data) => {
        let url = URLBack + "/colapsible_garnics"
        axios.post(url, { colapsible_garnic: data }).then(res => {
        }).catch(function (error) {
            console.log(error)
        });
    }
    render() {
        let rnd;
        if (this.state.opt === 0) rnd = null
        if (this.state.opt === 1) rnd = <SearchBox lookingProduct={this.lookingProduct} />
        if (this.state.opt === 2) rnd = <GarnicForm createGarnic={this.createGarnic} />
        return (
            <div>
                <HeroDark title="Colapsible" subtitle="garnic" />
                <div >
                    <div className="columns">
                        <div className="column is-one-fifth"><LeftMenu render_form={this.render_option} /></div>
                        <div className="column">{rnd}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}


export default Garnic;