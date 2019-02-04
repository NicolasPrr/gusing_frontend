import React, { Component } from 'react';
import './loader.css';
 
import "react-datepicker/dist/react-datepicker.css";
class Loadersn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    render() {
        return (
            <div className="container rwcenter">
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                </div>
                Selecciona una opción

                

{/*
<input type="text" list="data" onChange={this._onChange} />

<datalist id="data">
        <option value="hola" />
    
</datalist>


<datalist id="dataclients">
        <option value="Cliente 1" />
        <option value="Cl2 1" />
        <option value="Cl3 " />
    
</datalist>

*/
}
            </div>
        );
    }
}

export default Loadersn;