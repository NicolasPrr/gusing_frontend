import React, { Component } from 'react'
import axios from 'axios'
import URLBack from '../../UrlBack'
import Swal from 'sweetalert2'
import ModalEdit from './ModalEdit'

function nameRol(number) {
    if (number === 0) return "Admin"
    if (number === 1) return "Microbiologia"
    if (number === 2) return "QF"
    if (number === 3) return "Garantia"
    return "N.A."
}

const CreateUser = ({ handle, nameRef, loginRef, rolRef, pass, passC }) => {
    return (
        <form className="box">
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label is-small">Nombre de usuario</label>
                        <div className="control ">
                            <input className="input is-small" placeholder="Nombre de usuario " ref={nameRef} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label is-small">Ingresar como</label>
                        <div className="control is-expand" >
                            <input className="input is-small" type="text" placeholder="ingresar como" ref={loginRef} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label is-small">password</label>
                        <div className="control is-expand" >
                            <input className="input is-small" type="password" placeholder="ingresar como" ref={pass} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label is-small">password confirmacion</label>
                        <div className="control is-expand" >
                            <input className="input is-small" type="password" placeholder="ingresar como" ref={passC} />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label is-small">Rol</label>
                        <div className="select is-rounded is-small is-expand">
                            <select ref={rolRef}>
                                <option value={0}>Admin</option>
                                <option value={1}>Microbiologia</option>
                                <option value={2}>QF</option>
                                <option value={3}>Garantia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handle} className="button is-link  is-small is-fullwidth">
                Agregar usuario
            </button>
        </form>
    )

}
const TableUser = ({ users, deleteRequest, setCurrent }) => {
    return (
        <table className="table is-fullwidth  is-size-7">
            <thead>
                <tr>
                    <th><abbr >id</abbr></th>
                    <th>Nombre del usuario</th>
                    <th>Ingresar con</th>
                    <th>Rol</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(users).map(key => (
                    <tr key={key}>
                        <td>{users[key].id}</td>
                        <td >{users[key].name}</td>
                        <td >{users[key].email}</td>
                        <td >{nameRol(users[key].rol)}</td>
                        <td >
                            <button className="button  is-small is-dark">
                                <span className="icon has-text-white is-small" onClick={setCurrent.bind(this, key)}>
                                    <i className="fas fa-edit"></i>
                                </span>
                            </button>
                        </td>
                        <td >
                            <button className="button is-danger is-small">
                                <span className="icon has-text-white is-small" onClick={deleteRequest.bind(this, key)}>
                                    <i className="fas fa-trash"></i>
                                </span>
                            </button>
                        </td>

                    </tr>
                ))}

            </tbody>
        </table>
    )


}

export default class User extends Component {
    name = React.createRef()
    login = React.createRef()
    rol = React.createRef()
    pass1 = React.createRef()
    pass2 = React.createRef()

    edit_name = React.createRef()
    edit_login = React.createRef()
    edit_rol = React.createRef()
    edit_pass1 = React.createRef()
    edit_pass2 = React.createRef()


    constructor() {
        super()
        this.state = {
            users: [],
            modalState: false,
            current: 0,
        }
    }
    toggleModal = () => {
        this.setState((prev, props) => {
            const newState = !prev.modalState;

            return { modalState: newState };
        });
    }
    componentDidMount() {
        axios.get(`${URLBack}/users`).then(res => {
            this.setState({ users: res.data })
        })
    }
    createRequest = (e) => {
        e.preventDefault()
        const pass1 = this.pass1.current.value
        const pass2 = this.pass2.current.value
        if (pass1 === pass2) {
            const user = {
                name: this.name.current.value,
                email: this.login.current.value.toLowerCase(),
                rol: this.rol.current.value,
                password: pass1,
                password_confirmation: pass2,
            }
            axios.post(`${URLBack}/users`,
                { user: user }
            ).then(res => {
                let users = [...this.state.users]
                users.push(res.data)
                this.setState({ users: users })
                Swal.fire({
                    type: 'success',
                    title: 'La acción se ha completado correctamente',
                    text: 'Se ha creado el usuario',
                })
            }).catch(error => {
                console.log(error)
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: `Ha ocurrido algo`,
                })

            })

        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden!',
            })
        }
    }
    editRequest = (e) => {
        const edit_pass1 = this.edit_pass1.current.value
        const edit_pass2 = this.edit_pass2.current.value
        const id = this.state.users[this.state.current].id
        if (edit_pass1 === edit_pass2) {
            const user = {
                name: this.edit_name.current.value,
                email: this.edit_login.current.value.toLowerCase(),
                rol: this.edit_rol.current.value,
                password: edit_pass1,
                password_confirmation: edit_pass2,
            }
            axios.put(`${URLBack}/users/${id}`,
                { user: user }
            ).then(res => {
                let users = [...this.state.users]
                users[this.state.current] = res.data
                this.setState({ users: users })
                Swal.fire({
                    type: 'success',
                    title: 'La acción se ha completado correctamente',
                    text: 'Se ha editado el usuario',
                })
            }).catch(error => {
                console.log(error)
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: `Ha ocurrido algo`,
                })
                
            })
            
        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden!',
            })
        }
        this.toggleModal()
    }
    deleteRequest = (key) => {
        // console.log(e)
        let id = this.state.users[key].id
        axios.delete(`${URLBack}/users/${id}`).then(() => {
            Swal.fire({
                type: 'success',
                title: 'La acción se ha completado correctamente',
                text: 'Se ha borrado el usuario',
            })
            let users = [...this.state.users]
            users.splice(key, 1)
            this.setState({ users: users })

        }).catch(error => {
            console.log(error)
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Algo ha ocurrido!',
            })

        })
    }
    setUserToEdit = (key) => {
        this.setState({ current: key })
        this.toggleModal()
    }

    render() {
        let name
        if (this.state.users.length === 0) name = null
        else name = this.state.users[this.state.current].name

        return (
            <div className="container">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title"> Usuarios registrados</p>
                    </header>
                    <div className="card-content">
                        <CreateUser
                            nameRef={this.name}
                            loginRef={this.login}
                            rolRef={this.rol}
                            pass={this.pass1}
                            passC={this.pass2}
                            handle={this.createRequest} />
                        <TableUser
                            users={this.state.users}
                            deleteRequest={this.deleteRequest}
                            setCurrent={this.setUserToEdit}
                        />
                    </div>
                </div>
                <ModalEdit
                    modalState={this.state.modalState}
                    closeModal={this.toggleModal}
                    title={`Editar usuario ${name}`}
                    user={this.state.users[this.state.current]}

                    nameRef={this.edit_name}
                    loginRef={this.edit_login}
                    rolRef={this.edit_rol}
                    pass={this.edit_pass1}
                    passC={this.edit_pass2}
                    handle={this.editRequest}
                />
            </div>
        )
    }
}
