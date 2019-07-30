import React, { Component } from 'react';

function fulfillmentSelected(key, props) {
    const st = ["No", "Si"]
    if (props === st[key]) return "selected"
    else return null
}

function isEmptyObject(obj) {
    return (Object.getOwnPropertyNames(obj).length === 0);
}
function renderEspecifications(props, ck, especificationName) {
    
    const colors = [
        "N.A",
        "Azul",
        "Ámbar",
        "Cristal",
        "Blanco",
        "Verde",
        "Gris",
        "Blanco Contramarcado",
        "Contramarcado",
        "Rojo",
        "Transparente",
        "Cumple",
    ]
    const materials = [
        "N,A",
        "PVC",
        "Polipropileno (PP)",
        "Pead",
        "PEBD",
        "PSC",
        "Polietileno",
        "Cumple",
    ]
    if (props.especifications[ck].name.includes("COLOR")) {
        return (
            <React.Fragment>
                <input className="input is-small" type="text"
                    id={ck}
                    defaultValue={especificationName}
                    onChange={props.setEspecification.bind(ck)}
                    list="colors"
                />
                <datalist id="colors">
                    {Object.keys(colors).map(key => (
                        <option value={colors[key]} />
                    ))}
                </datalist>
            </React.Fragment>
        );
    }

    if (props.especifications[ck].name.includes("MATERIAL")) {
        return (
            <React.Fragment>
                <input className="input is-small" type="text"
                    id={ck}
                    defaultValue={especificationName}
                    onChange={props.setEspecification.bind(ck)}
                    list="materials"
                />
                <datalist id="materials">
                    {Object.keys(materials).map(key => (
                        <option value={materials[key]} />
                    ))}
                </datalist>
            </React.Fragment>
        );
    }
    return (especificationName);

}
function renderInputs(props, ck, name) {
    const colors = [
        "N.A",
        "Azul",
        "Ámbar",
        "Cristal",
        "Blanco",
        "Verde",
        "Gris",
        "Blanco Contramarcado",
        "Contramarcado",
        "Rojo",
        "Transparente",
        "Cumple"
    ]
    const materials = [
        "N,A",
        "PVC",
        "Polipropileno (PP)",
        "Pead",
        "PEBD",
        "PSC",
        "Polietileno",
        "Cumple"
    ]
    if (name.includes("COLOR")) {
        return (
            <React.Fragment>
                <input className="input is-small" type="text"
                    id={ck}
                    defaultValue={props.inputs[ck]}
                    onChange={props.setResult.bind(ck)}
                    list="colors"
                />
                <datalist id="colors">
                    {Object.keys(colors).map(key => (
                        <option value={colors[key]} />
                    ))}
                </datalist>
            </React.Fragment>
        );
    }

    if (name.includes("MATERIAL")) {
        return (
            <React.Fragment>
                <input className="input is-small" type="text"
                    id={ck}
                    defaultValue={props.inputs[ck]}
                    onChange={props.setResult.bind(ck)}
                    list="materials"
                />
                <datalist id="materials">
                    {Object.keys(materials).map(key => (
                        <option value={materials[key]} />
                    ))}
                </datalist>
            </React.Fragment>
        );
    }
    return (<input className="input is-small" type="text"
        id={ck}
        defaultValue={props.inputs[ck] || ""}
        onChange={props.setResult.bind(ck)}
    />);
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
                        <td> {renderInputs(props, key, info[key].name)} </td>
                        <td> {renderEspecifications(props, key, info[key].especification)}                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
class ResultForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: { inputs: [], },
        }
        this.setResult = this.setResult.bind(this);
        this.setEspecification = this.setEspecification.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    fulfillment = React.createRef();
    is_copy = React.createRef();

    setResult(e) {
        let results = this.state.results;
        const id = e.target.id;
        const value = e.target.value;
        results.inputs[id] = value;
        this.setState({ results: results })
    }
    setEspecification(e) {
        let especifications = this.state.especifications;
        const id = e.target.id;
        const value = e.target.value;
        especifications[id].especification = value;
        this.setState({ especifications: especifications })
    }

    componentDidMount() {
        let init = Array(this.props.dataEspec.length).fill("");
        let resultsStepper = this.props.dataProduct;
        if (!isEmptyObject(resultsStepper)) {
            for (let i = 0; i < resultsStepper.inputs.length; i++) {
                init[i] = this.props.dataProduct.inputs[i];
                console.log("init:" ,init[i])
            }
        }
        let results = this.state.results;
        results.inputs = init;
        this.setState({ results: results })
        this.setState({ especifications: this.props.dataEspec })

    }
    handleNext(step) {
        let results = this.state.results;
        results.isok = this.fulfillment.current.value   
        results.is_copy = this.is_copy.current.value

        this.props.setProductForm(results, step, this.state.especifications)
    }
    render() {
        return (
            <div className="container notification">
                <Table especifications={this.props.dataEspec} inputs={this.state.results.inputs} setResult={this.setResult} setEspecification={this.setEspecification} />

                <div className="field">
                    <label className="label is-small">Cumplimiento</label>
                </div>
                {/*fulliment*/}
                <div className="select is-rounded is-small">
                    <select ref={this.fulfillment} defaultValue={this.props.fulfillment}>
                        <option value="No"
                            selected={fulfillmentSelected(0, this.props.dataProduct.isok)} >
                            No cumple
                        </option>
                        <option value="Si" selected={fulfillmentSelected(1, this.props.dataProduct.isok)}>
                            Cumple
                         </option>
                    </select>
                </div>
                {/*fulliment*/}
                <div className="field">
                    <label className="label is-small">Copia controlada</label>
                </div>
                <div className="select is-rounded is-small">
                    <select ref={this.is_copy} >
                        <option value="No"
                            selected={fulfillmentSelected(0, this.props.dataProduct.is_copy)} >
                            No
                        </option>
                        <option value="Si" selected={fulfillmentSelected(1, this.props.dataProduct.is_copy)}>
                            Si
                         </option>
                    </select>
                </div>

                {/*end fulliment*/}
                <div className="field  is-pulled-right">
                    <button className="button is-small is-info " type="submit" onClick={this.handleNext.bind(this, 1)}> Siguiente </button>
                </div>
                <div className="field  is-pulled-right">
                    <button className="button is-small is-dark" type="submit" onClick={this.handleNext.bind(this, -1)}> Retroceder </button>
                </div>

            </div>
        );
    }
}

export default ResultForm;