import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
class Error extends Component {
    state = { redirect: false }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <section className="hero is-link is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title has-text-light">
                                Error 404
                             </p>
                            <p className="subtitle has-text-light">
                                PAGE NOT FOUND
                             </p>
                            <button className="button is-large is-dark"
                                onClick={() => {
                                    this.setState({ redirect: true })
                                }}
                            >Ir al incio</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Error;