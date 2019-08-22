import React, { Component } from 'react';
import Table from './Table'
import axios from 'axios'
import URLBack from '../../UrlBack'
import Swal from 'sweetalert2'
import SearchBox from './SearchBox'
import Pagination from '../reportInterfaz/Pagination'
import { chooseMainURL, chooseNameForm } from './Helpers';
import Loader from '../loaders/Loadersn' 


class InterfaceReport extends Component {
    constructor() {
        super();
        this.state = {
            reports: [],
            currentPage: 1,
            amountPages: 0,
            paramsSearch: null,
            loader: true,

        };
        this.deleteRequest = this.deleteRequest.bind(this);
        this.search = this.search.bind(this);
        this.goToPage = this.goToPage.bind(this);
    }
    isLoad = (value) =>{
        this.setState({loader: value})
    }
    /* Funciones para control de paginación
        goToPage cambia la pagina y hace la solicitud correspondiente.
        nextOnePage(i) donde i es -1 o  previos or next
    */
    goToPage(page) {
        if (page >= 1 && page <= this.state.amountPages) {
            this.setState({ currentPage: page })
            if (this.state.paramsSearch === null) {
                this.isLoad(true)
                let url = `${URLBack}${chooseMainURL(window.location.pathname)}pages/${page}`
                // let url = URLBack + "/report_supplies/pages/" + page;
                axios.get(url).then(res => {
                    console.log(res)
                    this.setState({ reports: res.data })
                    this.isLoad(false)
                }).catch( (error) =>{
                    console.log(error)
                    this.isLoad(false)
                })
            } else {
                let url = `${URLBack}${chooseMainURL(window.location.pathname)}search/${page}`
                // let url = URLBack + "/report_supplies/search/" + page;
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
        // let url = URLBack + "/report_supplies/" + id;
        let url = `${URLBack}${chooseMainURL(window.location.pathname)}${id}`
        let reports;
        axios.delete(url).then(res => {
            if (res.status === 200) {
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
    initRequest = () => {
        let url = `${URLBack}${chooseMainURL(window.location.pathname)}pages/1`
        this.isLoad(true)
        axios.get(url).then(res => {
            this.setState({ reports: res.data })
            this.isLoad(false)
        }).catch(error => {
            console.log(error)
            this.isLoad(false)
        })
        url = `${URLBack}${chooseMainURL(window.location.pathname)}pages`
        axios.get(url).then(res => {
            this.setState({ amountPages: res.data })
        })
    }
    componentWillReceiveProps() {
        this.initRequest()
    }
    componentDidMount() {
        this.initRequest()
    }

    search(data) {
        this.setState({ paramsSearch: data }) //parametros de busqueda para paginacion, si no está nulo, hara la consulta con estos parametros.
        let url = `${URLBack}${chooseMainURL(window.location.pathname)}search/`
        axios.post(url, data).then(res => {
            console.log(res)
            if (res.status === 200) {
                this.setState({ amountPages: res.data })
            }
        }).catch(function (error) {
            console.log(error)
        })
        
        this.isLoad(true)
        url = `${URLBack}${chooseMainURL(window.location.pathname)}search/1`
        axios.post(url, data).then(res => {
            console.log(res)
            if (res.status === 200) {
                this.setState({ reports: res.data })
            }
            this.isLoad(false)
        }).catch(function (error) {
            // this.isLoad(false)
            console.log(error)
        })
    }
    render() {
        let renderTable = [];
        if (this.state.reports.length > 0) {
            renderTable.push(<Table data={this.state.reports} loader={this.state.loader}
                deleteRequest={this.deleteRequest}
                search={this.search}
                key={0} />)
            renderTable.push(<Pagination
                pages={this.state.amountPages}
                currentPage={this.state.currentPage}
                changePage={this.goToPage}
                key={1} />)
        }
        else if(this.state.loader){
            renderTable[0] = <Loader/>
        }else{
            renderTable[0] = <h1 className="title"> No hay reportes que mostrar</h1>
        }
        return (

            <div className="card">
                <header className="card-header">
                    <p className="card-header-title has-background-info has-text-white">
                        {chooseNameForm(window.location.pathname)}
                    </p>
                </header>
                <div className="card-content">
                    <SearchBox search={this.search} />
                    {renderTable[0]}
                    <div className="card-footer">
                        <div className="card-footer-item">

                            {renderTable[1]}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default InterfaceReport;