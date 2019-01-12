import React from 'react';

const HeroDark = (props) => {
    return (
        <div>
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {props.title}
      </h1>
                        <h2 className="subtitle">
                        {props.subtitle}
      </h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroDark;