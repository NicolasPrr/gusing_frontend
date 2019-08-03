import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div>
               <section className="hero is-link is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title has-text-light">
                                Error 404 
                             </p>
                            <p className="subtitle has-text-light">
                                PAGE NOT FOUND
                             </p>
                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Error;