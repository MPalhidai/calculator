import React from 'react';
import PropTypes from 'prop-types';
import '../css/ButtonPanel.css';
import { Button } from './Button';

export class ButtonPanel extends React.Component {
  group1 = ['AC', '+/-', '%', '÷'];
  group2 = ['7', '8', '9', 'X'];
  group3 = ['4', '5', '6', '-'];
  group4 = ['1', '2', '3', '+'];
  group5 = ['0', '.', '='];
  orange = ['÷','X','-','+','='];
  wide = ['0'];

  render() {

    const renderButton = (button) => <Button key = { button } name = { button } color = { this.orange.includes(button) ? 'orange' : 'lightGray'} wide = { this.wide.includes(button) ? true : false } onClick = { () => this.props.onClick(button) } />;

    return (
      <div className='ButtonPanel'>
        <div className='ButtonRow'>
          { this.group1.map( btn => renderButton(btn) ) }
        </div>
        <div className='ButtonRow'>
          { this.group2.map( btn => renderButton(btn) ) }
        </div>
        <div className='ButtonRow'>
          { this.group3.map( btn => renderButton(btn) ) }
        </div>
        <div className='ButtonRow'>
          { this.group4.map( btn => renderButton(btn) ) }
        </div>
        <div className='ButtonRow'>
          { this.group5.map( btn => renderButton(btn) ) }
        </div>
      </div>
    )
  }
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired
};
