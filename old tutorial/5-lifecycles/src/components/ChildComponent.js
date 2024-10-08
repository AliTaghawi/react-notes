import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
    }
    console.log('Child constructor')
  }

  componentDidMount = () => {
    console.log('Child componentDidMount')
  }

  componentDidUpdate = () => {
    console.log('Child componentDidUpdate')
  }

  componentWillUnmount = () => {
    console.log('Child componentWillUnmount')
  }
  
  render() {
    console.log('Child Rendered')
    return (
      <div>
        Child
      </div>
    );
  }
}

export default ChildComponent;