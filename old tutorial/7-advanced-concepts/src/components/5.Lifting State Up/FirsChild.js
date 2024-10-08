import React, { Component } from 'react';

class FirsChild extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increaseNum}>increase Number</button>
        <p>this is FirsChild Component and have access to number throw "lifting state up": {this.props.num}</p>
      </div>
    );
  }
}

export default FirsChild;