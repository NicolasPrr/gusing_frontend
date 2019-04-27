import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Loadersn from './components/loaders/Loadersn'
import './styles/App.scss';
import Garnic from './components/colapsibles/Garnic'
import Desflanat from './components/colapsibles/Desflanat'

import InterfaceReport from './components/reportInterfaz/InterfaceReport'
import Clients from './components/clients/Clients'
import HeaderGeneral from './components/reportInterfaz/HeaderGeneral'
import Stepper from './components/Stepper'
import HomeInsumos from './components/HomeInsumos';
import HomeSupply from './components/supplies/HomeSupply'
const routing = (
  <Router>
    <div>

      <Header/>
      <Route exact path="/" component={Loadersn} />
      <Route path="/colapsible/garnic" component={Garnic} />
      <Route path="/colapsible/desflanat" component={Desflanat} />
      <Route path="/insumos" component={HomeSupply} />
      <Route path="/clone/report/:reportId" component={Stepper} />
      <Route path="/edit/report/:reportId" component={Stepper} />
      <Route exact strict path="/print/:reportId" component={HeaderGeneral} />
      <Route path="/reports/" component={InterfaceReport} />
      <Route path="/clients" component={Clients} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
