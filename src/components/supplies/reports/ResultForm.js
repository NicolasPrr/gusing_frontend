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

function isEmptyObject(obj) {
    return (Object.getOwnPropertyNames(obj).length === 0);
}
const Table = (props) => {
    const info = props.especifications;
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
                        <td> <input className="input is-small" type="text"
                            id={key}
                            defaultValue={props.inputs[key]}
                            onChange={props.setResult.bind(key)} /> </td>
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
            results: { color: null, inputs: [], isOk: null },
        }
        this.setResult = this.setResult.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    color = React.createRef();
    fulfillment = React.createRef();

    setResult(e) {
        let results = this.state.results;
        const id = e.target.id;
        const value = e.target.value;
        results.inputs[id] = value;
        this.setState({ results: results })
    }

    componentDidMount() {
        let init = Array(this.props.dataEspec.length).fill(null);
        let resultsStepper = this.props.dataProduct;
        if (!isEmptyObject(resultsStepper)){
            for (let i = 0; i < resultsStepper.inputs.length; i++) {
                init[i] = this.props.dataProduct.inputs[i];
            }
        }
        let results = this.state.results;
        results.inputs = init;
        this.setState({ results: results })
    }
    handleNext(step) {
        let results = this.state.results;
        results.color = this.color.current.value
        results.isOk  = this.fulfillment.current.value
        this.props.setProductForm(results, step)
    }
    render() {
        return (
            <div className="container notification">
                <Table especifications={this.props.dataEspec} inputs={this.state.results.inputs} setResult={this.setResult} />

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
                            selected={fulfillmentSelected(0, this.props.dataProduct.isOk)} >
                            No cumple
                        </option>
                        <option value="Si" selected={fulfillmentSelected(1, this.props.dataProduct.isOk)}>
                            Cumple
                         </option>
                    </select>
                </div>

                {/*end fulliment*/}
                <div className="field">
                    <div className="control">
                        <button className="button is-small is-info" type="submit" onClick={this.handleNext.bind(this, 1)}> Siguiente </button>
                    </div>
                    <div className="control">
                        <button className="button is-small is-dark" type="submit" onClick={this.handleNext.bind(this, -1)}> Retroceder </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default ResultForm;