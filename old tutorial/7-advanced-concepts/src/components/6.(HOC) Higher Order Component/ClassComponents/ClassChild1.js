import React, { Component } from 'react';
import HOCClassTest from './HOCClassTest';

class ClassChild1 extends Component {
  render() {
    return (
      <div>
        <h1>Child1</h1>
        <p onClick={this.props.addOne}>I am Child1 and my number is : {this.props.num}/ Click for increase</p>
        <p>my props test: {this.props.test}</p>
      </div>
    );
  }
}

export default HOCClassTest(ClassChild1);