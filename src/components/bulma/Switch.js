import React, { Component } from 'react';

class Switch extends Component {
    change = () => {
        this.props.changeStatus(this.props.id, !this.props.isTrue)
    }
    componentDidMount() {
        console.log("props")
        console.log(this.props)
    }
    render() {
        const checked = this.props.isTrue
        if (checked) {
            return (
                <div>
                    <div class="field">
                        <input id={this.props.id} type="checkbox" className="switch is-small" checked onClick={this.change} />
                        <label for={this.props.id} >Habilitar formato mes-año</label>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div class="field">
                    <input id={this.props.id} type="checkbox" className="switch is-small" onClick={this.change} />
                    <label for={this.props.id} >Habilitar formato mes-año</label>
                </div>
            </div>

        );
    }
}

export default Switch;