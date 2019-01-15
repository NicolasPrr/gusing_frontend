import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Button } from "react-bulma-components/full";
import Header from './components/Header'
import Loadersn from './components/loaders/Loadersn'

import Garnic from './components/colapsibles/Garnic'

const routing = (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Loadersn} />  
        <Route path="/colapsible/garnic" component={Garnic} />
        
    </div>
    </Router>
  )
 

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
