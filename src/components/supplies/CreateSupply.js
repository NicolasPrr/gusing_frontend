import React, { Component } from 'react';
function Menu(props){
    return(
        <h1 className  ="title">Crea un insumo de {props.data.name}</h1>
    );
    
}
class CreateSupply extends Component {
    render() {
        return (
            <div className = "notification">
                <Menu data = {this.props.data}/>
                Hola lorenza

            </div>
        );
    }
}

export default CreateSupply;