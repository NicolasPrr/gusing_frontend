import React, { Component } from 'react';
import { isEmptyObject } from '../helpers'
const LastStep = (props) => {
    let value = props.dataVef;
    if (isEmptyObject(value)) {
        value = "";
    }
    return (
        <div>
            <form>
                <div className="field">
                    Observaciones
                        <div className="control">
                        <textarea className="textarea is-primary is-small"
                            placeholder="Observaciones"
                            defaultValue={value}
                            onChange={props.setDataVef}
                        >
                        </textarea>
                    </div>
                </div>
                <button className="button is-success is-small" type="submit" onClick={props.action.bind(this, 1)} > Finalizar </button>
            </form>
            <button className="button is-dark is-small" type="submit" onClick={props.action.bind(this, -1)} > Retroceder </button>
        </div >
    );
}

export default LastStep;