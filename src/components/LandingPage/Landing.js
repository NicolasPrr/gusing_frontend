import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Landing extends Component {

    goTo = (path) => {
        this.props.history.push(path);
    }
    render() {
        const classButton = "button  is-dark is-fullwidth"
        return (
            <div>
                <section className="hero is-link is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title has-text-light">
                                Selecciona una opción
                             </p>
                            <div className="columns is-vcentered">
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'aguas/crear')}>
                                        Agua
                                    </button>
                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'capsulas')}>
                                        Capsulas
                                    </button>
                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'insumos')}>
                                        Insumos
                                    </button>
                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'liquidos')}>
                                        Liquidos
                                    </button>
                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'MT')}>

                                        Materia prima/Tintura madre
                                    </button>
                                </div>
                            </div>

                            <div className="columns is-vcentered">
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'material_impreso')}>
                                        Material impreso
                                    </button>

                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'polvos_granulados')}>
                                        Polvos y granulados
                                    </button>
                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'semisolidos')}>
                                        Semisolidos
                                    </button>

                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'tabletas')}>
                                        Tabletas
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div>
        );
    }
}

export default Landing;