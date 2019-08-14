import React, { Component } from 'react'
import URLBack from '../UrlBack'
import axios from 'axios'
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
        }).catch( error => {
            console.log(error)
        })
    }
    render() {  
        return (
            <div>
                <div className="hero is-fullheight is-light">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column">
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
                                                <button className="button is-info is-fullwidth is-medium" type="submit">
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
