import React, { Component } from 'react';

class LeftMenu extends Component {
    constructor(){
        super()
        this.change_option = this.change_option.bind(this)
    }
    state = {
        actual: 0
    }
    
    select_option_class = (option) =>{
        const now = this.state.actual;
        if(now === option) return "is-active"
        else return null
    }
    change_option(option){
        this.setState({actual : option})
        this.props.render_form(option)
    }
    render() {
        const render_create_form = this.props.create
        let create
        if (render_create_form === "create") create = <li><a className = "is-active"    >Crear informe</a></li>
        else create = null
        return (
            <div>
                <aside className="menu">
                    <p className="menu-label">
                        Opciones
        </p>
                    <ul className="menu-list">
                        <li><a className = {this.select_option_class(1)} onClick = {this.change_option.bind(this,1)}>Listar</a></li>
                        <li><a className = {this.select_option_class(2)} onClick = {this.change_option.bind(this,2)}>Crear producto</a></li>
                        {create}
                    </ul>
                </aside>
            </div>
        );
    }
}

export default LeftMenu;