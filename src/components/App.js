import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Calculator">
          <Display />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
