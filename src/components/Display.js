import React from 'react';

export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.props = { result: 0 };
  }

  render() {
    return (
      <div className='Display'>
        <p>{this.props.result}</p>
      </div>
    )
  }
}
