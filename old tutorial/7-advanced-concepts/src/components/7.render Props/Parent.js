import React, { Component } from 'react';
import SayHi from './SayHi';

class Parent extends Component {
  render() {
    return (
      <div>
        <SayHi sayhi={(bool = true) => bool ? 'Hi' : "Bye"} />
      </div>
    );
  }
}

export default Parent;