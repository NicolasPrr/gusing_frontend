import React, { Component } from 'react';
class Landing extends Component {

    goTo = (path) => {
        this.props.history.push(path);
    }
    render() {
        const classButton = "button is-large is-rounded is-link is-fullwidth has-text-weight-bold"
        return (
            <div>
                <section className="hero is-light is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title has-text-dark">
                                Selecciona una opción para la creación  de un reporte
                             </p>
                            <div className="columns is-vcentered">
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'report_waters')}>
                                        Agua
                                    </button>
                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'report_capsules')}>
                                        Cápsulas
                                    </button>
                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'insumos')}>
                                        Insumos
                                    </button>
                                </div>
                                <div className="column">
                                    <button className={classButton} onClick={this.goTo.bind(this,'liquidos')}>
                                        Líquidos
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