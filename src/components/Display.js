import React from 'react';
import '../css/Display.css';

export class Display extends React.Component {
  render() {
    return (
      <div className='Display'>
        <p>{this.props.result}</p>
      </div>
    )
  }
}
