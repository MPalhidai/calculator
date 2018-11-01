import React from 'react';
import '../css/Button.css';

export class Button extends React.Component {

  render() {
    const buttonStyle = {
      backgroundColor: this.props.color,
      width: this.props.wide ? '50%' : '25%'
    }

    return (
      <button style = { buttonStyle }>
        { this.props.name }
      </button>
    )
  }
}
