import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class Lifecycles extends Component {
  constructor() {
    super();
    this.state = {
      updateState: '',
      isShowen: true,
    }
    console.log('constructor')
  }

  componentDidMount = () => {
    console.log('componentDidMount')
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
  }

  updateHandler = () => {
    this.setState({
      updateState : 'aa'
    })
  }

  removeHandler = () => {
    this.setState({
      isShowen: false
    })
  }

  render() {
    console.log('Rendered')
    return (
      <div>
        {this.state.isShowen && <ChildComponent />}
        <button onClick={this.updateHandler}>update</button>
        <button onClick={this.removeHandler}>remove</button>
      </div>
    );
  }
}

export default Lifecycles;