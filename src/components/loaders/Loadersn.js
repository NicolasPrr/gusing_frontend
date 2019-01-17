import React, { Component } from 'react';
import './loader.css';
import DatePicker from "react-datepicker";
 
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
                <div class="sk-fading-circle">
                    <div class="sk-circle1 sk-circle"></div>
                    <div class="sk-circle2 sk-circle"></div>
                    <div class="sk-circle3 sk-circle"></div>
                    <div class="sk-circle4 sk-circle"></div>
                    <div class="sk-circle5 sk-circle"></div>
                    <div class="sk-circle6 sk-circle"></div>
                    <div class="sk-circle7 sk-circle"></div>
                    <div class="sk-circle8 sk-circle"></div>
                    <div class="sk-circle9 sk-circle"></div>
                    <div class="sk-circle10 sk-circle"></div>
                    <div class="sk-circle11 sk-circle"></div>
                    <div class="sk-circle12 sk-circle"></div>
                </div>
                Selecciona una opción

                

<DatePicker className = "input is-small"
    selected={this.state.startDate}
    onChange={this.handleChange}
/>
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