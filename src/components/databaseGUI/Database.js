import React, { Component } from 'react';
import axios from 'axios'
import BackURL from '../../UrlBack'
class Database extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file:  {
                name: null
            }
        }

    }
    getFile = (e) => {
        let file = e.target.files[0]
        console.log(file)
        this.setState({file: file})
    }
    download = () => {
        
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
         window.open(`${BackURL}/databases/now`)
    }
    upload= () => {
        axios.post(BackURL)
    }

    render() {
        return (
            <div>
                <div className="hero is-fullheight is-bold is-light">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column">

                                    <article className="card is-rounded">
                                        <header className="card-header">
                                            <div className="card-header-title">
                                                <p className="title">BackUp de la base de datos</p>
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

                                <div className="column">
                                    <article className="card is-rounded">
                                        <header className="card-header">
                                            <div className="card-header-title">
                                                <p className="title">BackUp de la base de datos</p>
                                            </div>
                                        </header>
                                        <div className="card-content">

                                            <p> Actualice desde un archivo la base de datos  </p>
                                        </div>
                                        <footer className="card-footer">
                                            <div class="file has-name is-fullwidth">
                                                <label class="file-label">
                                                    <input class="file-input is-dark" type="file" name="resume"  onChange = {this.getFile}/>
                                                    <span class="file-cta">
                                                        <span class="file-icon">
                                                            <i class="fas fa-upload"></i>
                                                        </span>
                                                        <span class="file-label">
                                                            Choose a file…
                                                        </span>
                                                    </span>
                                                    <span class="file-name">
                                                         {this.state.file.name}
                                                    </span>
                                                </label>
                                            </div>
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