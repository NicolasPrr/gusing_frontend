import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Garnic = () => {
    return (
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Colapsibles
                 </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <Link to='/colapsible/garnic' >Colapsible garnic</Link><br />
                    <Link to='/colapsible/normal' >Colapsible normal</Link><br />
                    <Link to='/colapsible/desflant'>Colapsible desflant</Link>
                </div>
            </div>
        </div>
    );
}
const EnvasesVidrio = () => {
    return (
        <div class="card">
            <header class="card-header is-dark">
                <p class="card-header-title">
                    Envases
                 </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <Link to='/colapsible/garnic' >Envases de vidrio</Link><br />
                    <Link to='/colapsible/garnic' >Envases plasticos</Link><br />
                </div>
            </div>
        </div>
    );
}

const TapasGoteros = () => {
    return (
        <div class="card">
            <header class="card-header is-dark">
                <p class="card-header-title">
                    Tapas y goteros
                 </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <Link to='/colapsible/garnic' >Tapas</Link><br />
                    <Link to='/colapsible/garnic' >Goteros</Link><br />
                    <Link to='/colapsible/garnic' >Dosificadores</Link><br />
                </div>
            </div>
        </div>
    );
}

const Other = () => {
    return (
        <div class="card">
            <header class="card-header is-dark">
                <p class="card-header-title">
                    Tapas y goteros
                 </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <Link to='/colapsible/garnic' >Linners</Link><br />
                    <Link to='/colapsible/garnic' >Tapon</Link><br />
                    <Link to='/colapsible/garnic' >Agafre</Link><br />
                    <Link to='/colapsible/garnic' >Cucharas</Link><br />
                    <Link to='/colapsible/garnic' >Cunas </Link><br />
                </div>
            </div>
        </div>
    );
}
class HomeInsumos extends Component {
    state = { measure: [] }
    render() {
        return (<div className="container notification">
            <div className="columns">
                <div className="column" >
                    <Garnic />
                </div>
                <div className="column" >
                    <EnvasesVidrio />
                </div>

                <div className="column" >
                    <TapasGoteros />
                </div>
            </div>
            <Other />
        </div>

        );
    }
}

export default HomeInsumos; 