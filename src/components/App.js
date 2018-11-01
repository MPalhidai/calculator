import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
