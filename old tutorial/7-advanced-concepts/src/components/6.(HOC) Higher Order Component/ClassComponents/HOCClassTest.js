import React, { Component } from "react";

const HOCClassTest = (OldComponent , conter = 1) => {
  class newComponent extends Component {
    constructor() {
      super();
      this.state = {
        num: 0,
      }
    }

    addOne = () => {
      this.setState(prev => ({
        num: prev.num + conter
      }))
    }

    render() {
      return <OldComponent num={this.state.num} addOne={this.addOne} {...this.props} />
    }
  }

  return newComponent
}

export default HOCClassTest;