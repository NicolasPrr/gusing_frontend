import React, { Component } from 'react';

class Table extends Component {
    render() {
        let info = this.props.data
        return (
            <div>
                <table className="table is-fullwidth ">
                    <thead>
                        <tr>
                            <td><abbr >N° de reporte</abbr></td>
                            <th>id</th>
                        </tr>
                    </thead>
                    <tbody>


                        {Object.keys(info).map(key => (
                            <tr key={key}>
                                <th >{info[key].report_number}</th>
                                <td>{info[key].id}</td>

                            </tr>
                        ))}

                    </tbody>


                </table>


            </div>
        );
    }
}

export default Table;