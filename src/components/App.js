import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '', next: '', operation: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    let data = calculate(this.state, buttonName);
    this.setState({
      total: data.total,
      next: data.next,
      operation: data.operation
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Calculator">
          <Display result = { this.state.next ? this.state.next : this.state.total } />
          <ButtonPanel onClick = { this.handleClick } />
        </div>
      </div>
    );
  }
}

export default App;
