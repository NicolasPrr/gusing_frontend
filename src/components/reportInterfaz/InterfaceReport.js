import React, { Component } from 'react';
import Table from './Table'
import axios from 'axios'
import URLBack from '../../UrlBack'
import Swal from 'sweetalert2'


class InterfaceReport extends Component {
    constructor(props){
        super();
        this.state = {reports: []};
        this.deleteRequest = this.deleteRequest.bind(this);
    }

    deleteRequest(id , key){
        let url = URLBack + "/reports/" + id;
        let reports;
        axios.delete(url).then(res => {
            if (res.status === 204) {
                Swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Elemento eliminado',
                    showConfirmButton: false,
                    timer: 1500
                })   
            reports = [...this.state.reports];
            reports.splice(key,1)
            this.setState({reports: reports})
            }

        }).catch(function (error) {
            console.log(error)
        });
        
    }
     componentDidMount(){
        let url = URLBack + "/reports"
        axios.get(url).then(res => {
            console.log(res)
            this.setState({ reports: res.data })
        })
        console.log(this.state.reports)
     }
    render() {
        let  renderTable;
        if (this.state.reports.length > 0 )
             renderTable =   <Table  data = {this.state.reports }  key = {1} deleteRequest ={this.deleteRequest}/>
        else 
            renderTable = <h1 className = "tittle"> No hay reportes que mostrar</h1>
        return (

            <div>
                {renderTable}
                
            </div>
        );
    }
}

export default InterfaceReport;