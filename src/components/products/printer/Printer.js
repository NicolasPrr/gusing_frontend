
import React, { Component } from 'react';
import axios from 'axios'
import './textbackground.css'
import URLBack from '../../../UrlBack'
import { HeaderReport, InformationReport, Observation, Note, Signature, Footer, renderIsOk } from '../Helpers'

import {chooseTable, chooseMainURL} from '../Helpers'

import Error from '../../LandingPage/Error'

class Printer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            error: false,
        }
    }
    componentDidMount() {
        const { reportId } = this.props.match.params;
        let url = `${URLBack}${chooseMainURL(window.location.pathname)}${reportId}`
        axios.get(url).then(res => {
            // console.log(res)
            this.setState({ data: res.data })
            alert("Para imprimir, por favor presionar las teclas Ctrl + P")
        }).catch(error => {
            console.log(error)
            this.setState({ error: true })
        })

        // if(rta) this.setState({textbackground: "COPIA CONTROLADA"})
    }
    render() {
        if (this.state.error) return <Error />
        const dat = this.state.data;
        let isok = null;
        let  complement= [];
        let bcktxt = ""
        if (dat !== null) {
            isok = dat.fulfillment;
            complement.push(chooseTable(window.location.pathname, dat)) //Selecciona la tabla  determinada
            complement.push(<Observation data={dat.observation} key = {0} />)
            if (dat.is_copy) {
                bcktxt = "COPIA CONTROLADA"
            }
        }
        else {
            complement = null;
        }
        return (
            <div className="container">
                <HeaderReport />
                <InformationReport data={dat} />
                {complement}
                {renderIsOk(isok)}
                <div id="background">
                    <p id="bg-text">{bcktxt}</p>
                </div>
                <Signature />
                <Note />
                <Footer />

            </div>

        );
    }
}
export default Printer;