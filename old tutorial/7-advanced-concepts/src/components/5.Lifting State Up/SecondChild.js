import React, { Component } from 'react';

class SecondChild extends Component {
  render() {
    return (
      <div>
        <p>this is SecondChild Component and also have access to number throw "lifting state up": {this.props.num}</p>
      </div>
    );
  }
}

export default SecondChild;