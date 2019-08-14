import React, { Component } from 'react'
import URLBack from '../UrlBack'
import axios from 'axios'
import Swal from 'sweetalert2'
export default class Login extends Component {
    
    pass = React.createRef()
    username = React.createRef()

    handle = (e) =>{
        e.preventDefault()
        let username = this.username.current.value
        let pass = this.pass.current.value
        axios.post(`${URLBack}/user_token`,{auth:{
            email: username,
            password: pass,
        }}).then(res =>{
            console.log(res)
            Swal.fire({
                type: 'success',
                title: 'Datos correctos',
                text: 'Ha ingresado correctamente al sistema',
                // footer: '<a href>Why do I have this issue?</a>'
              })
              sessionStorage.setItem('test', "holi")
        }).catch( error => {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Contraseña o nombre de usuario incorrectos!',
                footer: 'Consultar el admministrador del sistema si algo no anda bien'
              })
              console.log(error)
        })
    }
    render() {  
        return (
            <div>
                <div className="hero is-fullheight is-light">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-multiline" >
                                <div className="column is-half is-offset-one-quarter">
                                    <article className="card is-rounded">
                                        <header className="card-header ">
                                            <div className="card-header-title ">
                                                <p className="subtitle has-text-dark">Ingresar al sistema de reportes</p>
                                            </div>
                                        </header>
                                        <form onSubmit={this.handle}> 
                                            <div className="card-content">

                                                <div className="field">
                                                    <label className="label">Nombre de usuario</label>
                                                    <div className="control has-icons-left has-icons-right">
                                                        <input  ref ={this.username}className="input is-dark" type="text" />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-user"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input ref={this.pass} className="input is-danger" type="password" placeholder="Password" />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-lock"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <button className="button is-light is-fullwidth is-medium" type="submit">
                                                    <span className="icon ">
                                                        <i className="fas fa-door-open"></i>
                                                    </span>
                                                    <span>Entrar</span>
                                                </button>
                                            </footer>
                                        </form>
                                    </article>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
