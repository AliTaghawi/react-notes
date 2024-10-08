import React, { Component } from 'react';

class ErrorMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      throwError : false,
    }
  }

  makeError = () => {
    const random = Math.random();
    if (random > 0.5) {
      this.setState({
        throwError: true
      })
    }
  }

  render() {
    if (this.state.throwError) {
      throw new Error('some thing went wrong')
    }
    return (
      <div>
        <h1>click the button below to check ErrorBoundary</h1>
        <button onClick={this.makeError}>click</button>
      </div>
    );
  }
}

export default ErrorMaker;