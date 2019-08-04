import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Route , BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Loadersn from './components/loaders/Loadersn' // don't delete

import InterfaceReport from './components/reportInterfaz/InterfaceReport'
import Clients from './components/clients/Clients'
import HeaderGeneral from './components/reportInterfaz/HeaderGeneral'
import StepperSupply from './components/supplies/reports/StepperSupply'
import HomeSupply from './components/supplies/HomeSupply'
import Database from './components/databaseGUI/Database'
import Landing from './components/LandingPage/Landing'
import './styles/App.scss';
import App from './App'
// const routing = (
//   <Router>
//     <div>
//       <Header/>
//       <Route exact path="/" component={Landing} />
//       <Route path="/insumos/" component={HomeSupply} />
//       <Route path="/clone/report/:reportId" component={StepperSupply} />
//       <Route path="/edit/report/:reportId" component={StepperSupply} />
//       <Route exact strict path="/print/:reportId" component={HeaderGeneral} />
//       <Route path ="/supply/report/create" component ={StepperSupply} /> 
//       <Route path="/reports/" component={InterfaceReport} />
//       <Route path="/clients" component={Clients} />
//       <Route path="/database" component={Database} />
//       {/* <Route  component={Landing} /> */}
//     </div>
//   </Router>
// )


ReactDOM.render(
  <App/>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
