import React, { Component } from 'react';

function colorSelected(color, props) {
    if (color === props)
        return "selected"
    else
        return null
}
function fulfillmentSelected(key, props) {
    const st = ["No", "Si"]
    if (props === st[key]) return "selected"
    else return null
}
const Table = (props) => {
    const info = props.especifications;
    const results = props.results;
    return (
        <table className="table is-fullwidth is-bordered is-size-7 ">
            <thead>
                <tr>
                    <th><abbr >Nombre de especificación</abbr></th>
                    <th>Resultado</th>
                    <th>Especificacion</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(info).map(key => (
                    <tr key={key} >
                        <td> {info[key].name}                                  </td>
                        <td> <input className="input is-small" type="text" defaultValue={props.results[key]} /> </td>
                        <td> {info[key].especification}                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
class ResultForm extends Component {
    constructor(props) {
        super(props);
        this.colors = [
            "N.A",
            "Ámbar",
            "Azul",
            "Cristal",
            "Blanco",
            "Plateado",
            "Gris",
            "Contramarcado",
            "Rojo"
        ]
        this.state = {
            results: [],
        }
    }
    componentDidMount() {
        let init = Array(this.props.dataEspec.lenght).fill(null);
        for (let i = 0; i < this.props.dataProduct.lenght; i++) {
            init.push(this.props.dataProduct[i])
        }
        this.setState({ results: init })
    }
    render() {
        let especifications = this.props.dataEspec;
        return (
            <div className="container notification">
                <Table especifications={this.props.dataEspec} results={this.state.results} />

                {/*colors*/}
                <div className="field">
                    <label className="label is-small">Color</label>
                </div>
                <div className="control">
                    <div className="select is-rounded is-small">
                        <select ref={this.color} >
                            {Object.keys(this.colors).map(key => (
                                <option selected={colorSelected(this.colors[key], this.props.dataProduct.color)}
                                    value={this.colors[key]}>
                                    {this.colors[key]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* end colors*/}
                <div className="field">
                    <label className="label is-small">Cumplimiento</label>
                </div>
                {/*fulliment*/}
                <div className="select is-rounded is-small">
                    <select ref={this.fulfillment} defaultValue={this.props.fulfillment}>
                        <option value="No"
                            selected={fulfillmentSelected(0, this.props.dataProduct.fulfillment)} >
                            No cumple    </option>
                        <option value="Si" selected={fulfillmentSelected(1, this.props.dataProduct.fulfillment)}>
                            Cumple    </option>
                    </select>
                </div>
                {/*end fulliment*/}

            </div>
        );
    }
}

export default ResultForm;