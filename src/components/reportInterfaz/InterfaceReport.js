import React, { Component } from 'react';
import Table from './Table'
import axios from 'axios'
import URLBack from '../../UrlBack'

class InterfaceReport extends Component {
    constructor(props){
        super();
        this.state = {reports: []}
    }
     componentDidMount(){
        let url = URLBack + "/reports"
        axios.get(url).then(res => {
            console.log(res)
            this.setState({ reports: res.data })
        })
        console.log("hey")

     }
    render() {
        let  renderTable;
        if (this.state.reports.length > 0 )
             renderTable =   <Table  data = {this.state.reports }  key = {1}/>
        else 
            renderTable = null
        return (

            <div>
                {renderTable}
                
            </div>
        );
    }
}

export default InterfaceReport;