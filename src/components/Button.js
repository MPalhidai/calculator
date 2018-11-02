import React from 'react';
import PropTypes from 'prop-types';
import '../css/Button.css';

export class Button extends React.Component {

  render() {
    const buttonStyle = {
      backgroundColor: this.props.color,
      width: this.props.wide ? '50%' : '25%'
    };

    return (
      <button style = { buttonStyle } onClick = { this.props.onClick }>
        { this.props.name }
      </button>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
