import React, { Component } from 'react';
import axios from 'axios'
import BackURL from '../../UrlBack'
import jwt from 'jsonwebtoken'

class Database extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: {
                name: null
            }
        }

    }
    getFile = (e) => {
        let file = e.target.files[0]
        console.log(file)
        this.setState({ file: file })
    }
    download = () => {
        const token = localStorage.getItem('jwt')
        if (token === null) return null
        const rol = jwt.decode(token).rol
        // console.log(jwt.decode(token))
        if (rol === 0) window.open(`${BackURL}/databases/now`)

        // axios({
        //     url: `${BackURL}/databases/now`,
        //     method: 'GET',
        //     responseType: 'blob', // important
        //   }).then((response) => {
        //      const url = window.URL.createObjectURL(new Blob([response.data]));
        //      const link = document.createElement('a');
        //      console.log(response)
        //      link.href = url;
        //      link.setAttribute('download', 'test.tar'); //or any other extension
        //      document.body.appendChild(link);
        //      link.click();
        //   });

    }
    upload = () => {
        axios.post(BackURL)
    }

    render() {
        return (
            <div>
                <div className="hero is-fullheight is-bold is-dark">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column">

                                    <article className="card is-rounded">
                                        <header className="card-header ">
                                            <div className="card-header-title ">
                                                <p className="title has-text-dark">BackUp de la base de datos</p>
                                            </div>
                                        </header>
                                        <div className="card-content">

                                            <p> Descargue el archivo de la actual base de datos  </p>
                                        </div>
                                        <footer className="card-footer">
                                            <button className="button is-link is-fullwidth is-medium" onClick={this.download}>
                                                <span className="icon ">
                                                    <i className="fas fa-download"></i>
                                                </span>
                                                <span>Descargar</span>

                                            </button>
                                        </footer>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Database;