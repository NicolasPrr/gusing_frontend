import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        as
        <div class="pageloader"><span class="title">Pageloader</span></div>
      </div>
    );
  }
}

export default App;
