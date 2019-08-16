import React from 'react';

const ModalEdit = ({ modalState, closeModal, title, handle, nameRef, loginRef, rolRef, pass, passC, user }) => {
    if (!modalState) return null;
    return (
        <div>
            <div className="modal is-active">
                <div className="modal-background" onClick={closeModal} />
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{title}</p>
                        <button className="delete" onClick={closeModal} />
                    </header>
                    <section className="modal-card-body">
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label className="label is-small">Nombre</label>
                                    <div className="control ">
                                        <input className="input is-small" 
                                        placeholder="Nombre de usuario " 
                                        ref={nameRef}
                                        defaultValue={user.name}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label is-small">Como</label>
                                    <div className="control is-expand" >
                                        <input 
                                        className="input is-small" 
                                        type="text" 
                                        placeholder="ingresar como"
                                        ref={loginRef} 
                                        defaultValue={user.email}/>
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
                                    <label className="label is-small">confirmacion</label>
                                    <div className="control is-expand" >
                                        <input className="input is-small" type="password" placeholder="ingresar como" ref={passC} />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label is-small">Rol</label>
                                    <div className="select is-rounded is-small is-expand">
                                        <select ref={rolRef} defaultValue={user.rol}>
                                            <option value={0}>Admin</option>
                                            <option value={1}>Microbiologia</option>
                                            <option value={2}>QF</option>
                                            <option value={3}>Garantia</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-link" onClick={handle}>Realziar cambios</button>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default ModalEdit;