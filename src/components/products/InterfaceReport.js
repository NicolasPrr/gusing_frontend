import React, { Component } from 'react';
import Table from './Table'
import axios from 'axios'
import URLBack from '../../UrlBack'
import Swal from 'sweetalert2'
import SearchBox from './SearchBox'
import Pagination from '../reportInterfaz/Pagination'


class InterfaceReport extends Component {
    constructor(props) {
        super();
        this.state = {
            reports: [],
            currentPage: 1,
            amountPages: 0,
            paramsSearch: null,

        };
        this.deleteRequest = this.deleteRequest.bind(this);
        this.search = this.search.bind(this);
        this.goToPage = this.goToPage.bind(this);
    }

    /* Funciones para control de paginación
        goToPage cambia la pagina y hace la solicitud correspondiente.
        nextOnePage(i) donde i es -1 o  previos or next
    */
    goToPage(page) {
        if (page >= 1 && page <= this.state.amountPages) {
            this.setState({ currentPage: page })
            if (this.state.paramsSearch === null) {
                let url = URLBack + "/report_supplies/pages/" + page;
                axios.get(url).then(res => {
                    console.log(res)
                    this.setState({ reports: res.data })
                })
            } else {
                let url = URLBack + "/report_supplies/search/" + page;
                const data = this.state.paramsSearch;
                axios.post(url, data).then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        this.setState({ reports: res.data })
                    }
                }).catch(function (error) {
                    console.log(error)
                })
            }
        }
        
    }

    deleteRequest(id, key) {
        let url = URLBack + "/report_supplies/" + id;
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
                reports.splice(key, 1)
                this.setState({ reports: reports })
            }

        }).catch(function (error) {
            console.log(error)
        });

    }
    componentDidMount() {
        let url = URLBack + "/report_waters/pages/1"
        axios.get(url).then(res => {
            this.setState({ reports: res.data })
        })
        url = `${URLBack}/report_waters/pages`
        axios.get(url).then(res => {
            this.setState({ amountPages: res.data })
        })
    }

    search(data) {
        this.setState({ paramsSearch: data }) //parametros de busqueda para paginacion, si no está nulo, hara la consulta con estos parametros.
        let url = URLBack + "/report_supplies/search/"
        axios.post(url, data).then(res => {
            console.log(res)
            if (res.status === 200) {
                this.setState({ amountPages: res.data })
            }
        }).catch(function (error) {
            console.log(error)
        })

        url = URLBack + "/report_supplies/search/1"
        axios.post(url, data).then(res => {
            console.log(res)
            if (res.status === 200) {
                this.setState({ reports: res.data })
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
    render() {
        let renderTable = [];
        if (this.state.reports.length > 0) {
            renderTable.push(<Table data={this.state.reports} 
                deleteRequest={this.deleteRequest} 
                search={this.search} 
                key = {0} />  )
            renderTable.push(<Pagination 
                pages={this.state.amountPages} 
                currentPage={this.state.currentPage} 
                changePage={this.goToPage}  
                key = {1}/>)
        }
        else
            renderTable = <h1 className="title"> No hay reportes que mostrar</h1>
        return (

            <div className="container notification">
                <SearchBox search={this.search} />
                {renderTable}
            </div>

        );
    }
}

export default InterfaceReport;