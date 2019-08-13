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
import StepperMB from './components/microbiology/Stepper'
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
                        <Route path="/report_waters/edit/:reportId" component={Stepper} />
                        <Route path="/report_waters/clone/:reportId" component={Stepper} />
                        <Route path="/report_waters" component={Stepper} />
                        {/*  Aguas */}

                        {/*  Capsulas */}

                        <Route exact strict path="/report_capsules/print/:reportId" component={Printer} />
                        <Route path="/report_capsules/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_capsules/edit/:reportId" component={Stepper} />
                        <Route path="/report_capsules/clone/:reportId" component={Stepper} />
                        <Route path="/report_capsules" component={Stepper} />
                        {/* Capsulas */}

                        {/*  Liquidos */}

                        <Route exact strict path="/report_liquids/print/:reportId" component={Printer} />
                        <Route path="/report_liquids/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_liquids/edit/:reportId" component={Stepper} />
                        <Route path="/report_liquids/clone/:reportId" component={Stepper} />
                        <Route path="/report_liquids" component={Stepper} />
                        {/* Liquidos */}
                        
                        {/*  Materiales */}
                        <Route exact strict path="/report_materials/print/:reportId" component={Printer} />
                        <Route path="/report_materials/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_materials/edit/:reportId" component={Stepper} />
                        <Route path="/report_materials/clone/:reportId" component={Stepper} />
                        <Route path="/report_materials" component={Stepper} />
                        {/* Materiales */}

                        {/*  Polvos */}
                        <Route exact strict path="/report_dusts/print/:reportId" component={Printer} />
                        <Route path="/report_dusts/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_dusts/edit/:reportId" component={Stepper} />
                        <Route path="/report_dusts/clone/:reportId" component={Stepper} />
                        <Route path="/report_dusts" component={Stepper} />
                        {/* Materiales */}

                        {/*  Polvos */}
                        <Route exact strict path="/report_semisolids/print/:reportId" component={Printer} />
                        <Route path="/report_semisolids/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_semisolids/edit/:reportId" component={Stepper} />
                        <Route path="/report_semisolids/clone/:reportId" component={Stepper} />
                        <Route path="/report_semisolids" component={Stepper} />
                        {/* Materiales */}

                        {/*  Tableta */}
                        <Route exact strict path="/report_tablets/print/:reportId" component={Printer} />
                        <Route path="/report_tablets/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_tablets/edit/:reportId" component={Stepper} />
                        <Route path="/report_tablets/clone/:reportId" component={Stepper} />
                        <Route path="/report_tablets" component={Stepper} />
                        {/* Tableta */}

                        {/*  Microbiologia */}
                        <Route exact strict path="/report_microbiologies/print/:reportId" component={Printer} />
                        <Route path="/report_microbiologies/reports" component={InterfaceReportProduct} exact />
                        <Route path="/report_microbiologies/edit/:reportId" component={StepperMB} />
                        <Route path="/report_microbiologies/clone/:reportId" component={StepperMB} />
                        <Route path="/report_microbiologies" component={StepperMB} />
                        {/* Tableta */}
                        


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