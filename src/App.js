import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/LandingPage/Landing'
import Error from './components/LandingPage/Error'
import Header from './components/Header'
import InterfaceReport from './components/reportInterfaz/InterfaceReport'
import Clients from './components/clients/Clients'
import HeaderGeneral from './components/reportInterfaz/HeaderGeneral'
import StepperSupply from './components/supplies/reports/StepperSupply'
import HomeSupply from './components/supplies/HomeSupply'
import Database from './components/databaseGUI/Database'

import StepperAgua from './components/products/Agua/Stepper';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />

                        {/*  Insumos*/}
                        <Route path="/insumos/" component={HomeSupply} />
                        <Route path="/clone/report/:reportId" component={StepperSupply} />
                        <Route path="/edit/report/:reportId" component={StepperSupply} />
                        <Route path="/supply/report/create" component={StepperSupply} />
                        <Route exact strict path="/print/:reportId" component={HeaderGeneral} />
                        <Route path="/reports/" component={InterfaceReport} />
                        {/*  Insumos*/}
                        

                        {/*  Aguas */}

                        <Route path="/aguas/crear" component={StepperAgua} />
                        {/*  Aguas */}


                        


                        <Route path="/clients" component={Clients} />
                        <Route path="/database" component={Database} />
                        <Route component={Error} />
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;