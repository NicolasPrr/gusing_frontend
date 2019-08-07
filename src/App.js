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

import Stepper from './components/products/Stepper';

import InterfaceReportProduct from './components/products/InterfaceReport'
import Printer from './components/products/printer/Printer'

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

                        <Route exact strict path="/report_waters/print/:reportId" component={Printer} />
                        <Route path="/report_waters/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_waters/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_waters/edit/:reportId" component={Stepper} />
                        <Route path="/report_waters/clone/:reportId" component={Stepper} />
                        <Route path="/report_waters" component={Stepper} />
                        {/*  Aguas */}

                        {/*  Capsulas */}

                        <Route exact strict path="/report_capsules/print/:reportId" component={Printer} />
                        <Route path="/report_capsules/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_capsules/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_capsules/edit/:reportId" component={Stepper} />
                        <Route path="/report_capsules/clone/:reportId" component={Stepper} />
                        <Route path="/report_capsules" component={Stepper} />
                        {/* Capsulas */}

                        {/*  Liquidos */}

                        <Route exact strict path="/report_liquids/print/:reportId" component={Printer} />
                        <Route path="/report_liquids/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_liquids/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_liquids/edit/:reportId" component={Stepper} />
                        <Route path="/report_liquids/clone/:reportId" component={Stepper} />
                        <Route path="/report_liquids" component={Stepper} />
                        {/* Liquidos */}
                        


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