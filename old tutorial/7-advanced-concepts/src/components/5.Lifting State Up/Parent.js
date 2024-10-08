import React, { Component } from 'react';
import FirsChild from './FirsChild';
import SecondChild from './SecondChild';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num : 0,
    }
  }

  increaseNum = () => {
    this.setState(prev => ({
      num: prev.num + 1
    }))
  }

  render() {
    return (
      <>
        <FirsChild num={this.state.num} increaseNum={this.increaseNum} />
        <SecondChild num={this.state.num} />
      </>
    );
  }
}

export default Parent;