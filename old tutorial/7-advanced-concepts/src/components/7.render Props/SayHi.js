import React, { Component } from 'react';

class SayHi extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.sayhi(false)}</h1>
      </div>
    );
  }
}

export default SayHi;