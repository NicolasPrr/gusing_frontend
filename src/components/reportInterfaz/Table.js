import React, { Component } from 'react';
import App from '../pdfsGeneration/App'


function dateR(data) {
    var regDate = /(\d{4}-\d{2}-\d{2})[A-Z]{1,2}(\d{1,2}:\d{2}:\d{2}).*/
    var [exp, date, hour] = regDate.exec(data)
    return [date, hour]
}
class Table extends Component {
    constructor() {
        super()
        this.testPDF = this.testPDF.bind();
    }
    testPDF() {
        alert("hey")
    }
    render() {
        let info = this.props.data
        return (
            <div className="container">
                <table className="table is-fullwidth ">
                    <thead>
                        <tr>
                            <td><abbr >N° de reporte</abbr></td>
                            <th>Cliente</th>
                            <th>Producto</th>
                            <th>Fecha de reporte</th>
                            <th>test</th>

                        </tr>
                    </thead>
                    <tbody>


                        {Object.keys(info).map(key => (
                            <tr key={key}>
                                <th >{info[key].report_number}</th>
                                <td>{info[key].id}</td>
                                <td>{info[key].reportable_type}</td>
                                <td>{dateR(info[key].created_at)[0]} </td>
                                <td><App/></td>
                            </tr>
                        ))}

                    </tbody>


                </table>

            </div>

        );
    }

}

export default Table;