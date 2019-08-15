import React, { Component } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

// import URLBack from './UrlBack'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/LandingPage/Landing'
import Error from './components/LandingPage/Error'
import Header from './components/Header'
import InterfaceReport from './components/reportInterfaz/InterfaceReport'
import Clients from './components/clients/Clients'
import HeaderGeneral from './components/reportInterfaz/HeaderGeneral'
import StepperSupply from './components/supplies/reports/StepperSupply'
import HomeSupply from './components/supplies/HomeSupply'
import Database from './components/databaseGUI/Database'

import Stepper from './components/products/Stepper';
import StepperMB from './components/microbiology/Stepper'
import InterfaceReportProduct from './components/products/InterfaceReport'
import Printer from './components/products/printer/Printer'
import Login from './components/Login'
import jwt from 'jsonwebtoken'


function getCurrentUser() {
    const jwt_s = localStorage.getItem('jwt')

    if (jwt_s === null || jwt_s === undefined) {
        //si no hay token
        return false
    } else {
        
        //si hay token
        axios.defaults.headers.common['Authorization'] = `Bareer ${jwt_s}`
        //verificamos si existe el tiempo de exiparción del session storage
        let time_limit = sessionStorage.getItem('exp')
        if(time_limit === null ||  time_limit === undefined){
            //Si no existe, lo hayamos
            time_limit = new Date(jwt.decode(jwt_s).exp*1000)
            sessionStorage.setItem('exp', time_limit)
        }
        const nows = new Date(Date.now())
        // console.log(Date.parse(nows) < Date.parse(time_limit)  ) 
        //verificamos que el tiempo de sesion sea correcto
        if(Date.parse(nows) > Date.parse(time_limit)){
            //si es mayor la sesion acaba
            delete axios.defaults.headers.common['Authorization']
            localStorage.clear()
            sessionStorage.clear()
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Tiempo de sesión expirado!',
                footer: 'Consultar el admministrador del sistema si algo no anda bien'
            })
            return false
        }
        return true
        //si existe, verificamos que no haya expirado
    }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props =>
                getCurrentUser() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }}
                        />
                    )
        }
    />
);
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Home} />

                        {/*  Insumos*/}
                        <PrivateRoute path="/insumos/" component={HomeSupply} />
                        <PrivateRoute path="/clone/report/:reportId" component={StepperSupply} />
                        <PrivateRoute path="/edit/report/:reportId" component={StepperSupply} />
                        <PrivateRoute path="/supply/report/create" component={StepperSupply} />
                        <PrivateRoute exact strict path="/print/:reportId" component={HeaderGeneral} />
                        <PrivateRoute path="/reports/" component={InterfaceReport} />
                        {/*  Insumos*/}


                        {/*  Aguas */}

                        <PrivateRoute exact strict path="/report_waters/print/:reportId" component={Printer} />
                        <PrivateRoute path="/report_waters/reports" component={InterfaceReportProduct} exact />
                        <PrivateRoute path="/report_waters/edit/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_waters/clone/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_waters" component={Stepper} />
                        {/*  Aguas */}

                        {/*  Capsulas */}

                        <PrivateRoute exact strict path="/report_capsules/print/:reportId" component={Printer} />
                        <PrivateRoute path="/report_capsules/reports" component={InterfaceReportProduct} exact />
                        <PrivateRoute path="/report_capsules/edit/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_capsules/clone/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_capsules" component={Stepper} />
                        {/* Capsulas */}

                        {/*  Liquidos */}

                        <PrivateRoute exact strict path="/report_liquids/print/:reportId" component={Printer} />
                        <PrivateRoute path="/report_liquids/reports" component={InterfaceReportProduct} exact />
                        <PrivateRoute path="/report_liquids/edit/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_liquids/clone/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_liquids" component={Stepper} />
                        {/* Liquidos */}

                        {/*  Materiales */}
                        <PrivateRoute exact strict path="/report_materials/print/:reportId" component={Printer} />
                        <PrivateRoute path="/report_materials/reports" component={InterfaceReportProduct} exact />
                        <PrivateRoute path="/report_materials/edit/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_materials/clone/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_materials" component={Stepper} />
                        {/* Materiales */}

                        {/*  Polvos */}
                        <PrivateRoute exact strict path="/report_dusts/print/:reportId" component={Printer} />
                        <PrivateRoute path="/report_dusts/reports" component={InterfaceReportProduct} exact />
                        <PrivateRoute path="/report_dusts/edit/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_dusts/clone/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_dusts" component={Stepper} />
                        {/* Materiales */}

                        {/*  Polvos */}
                        <PrivateRoute exact strict path="/report_semisolids/print/:reportId" component={Printer} />
                        <PrivateRoute path="/report_semisolids/reports" component={InterfaceReportProduct} exact />
                        <PrivateRoute path="/report_semisolids/edit/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_semisolids/clone/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_semisolids" component={Stepper} />
                        {/* Materiales */}

                        {/*  Tableta */}
                        <PrivateRoute exact strict path="/report_tablets/print/:reportId" component={Printer} />
                        <PrivateRoute path="/report_tablets/reports" component={InterfaceReportProduct} exact />
                        <PrivateRoute path="/report_tablets/edit/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_tablets/clone/:reportId" component={Stepper} />
                        <PrivateRoute path="/report_tablets" component={Stepper} />
                        {/* Tableta */}

                        {/*  Microbiologia */}
                        <PrivateRoute exact strict path="/report_microbiologies/print/:reportId" component={Printer} />
                        <PrivateRoute path="/report_microbiologies/reports" component={InterfaceReportProduct} exact />
                        <PrivateRoute path="/report_microbiologies/edit/:reportId" component={StepperMB} />
                        <PrivateRoute path="/report_microbiologies/clone/:reportId" component={StepperMB} />
                        <PrivateRoute path="/report_microbiologies" component={StepperMB} />
                        {/* Tableta */}



                        <PrivateRoute path="/clients" component={Clients} />
                        <PrivateRoute path="/database" component={Database} />
                        <PrivateRoute component={Error} />
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;