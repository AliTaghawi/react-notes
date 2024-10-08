import React, { Component } from "react";

class ClassComponents extends Component {
  constructor(props) {
    super(props);
    // if you want to use props in states you need to give the props to constructor & super just like above!
    this.state = {
      stateDitails: "this is how handeling states in class components",
      statedestructurMassege: "this is how handeling state destructuring in class components",
      num : 0,
    };
  }

  increaseHandler = () => {
    this.setState(prevState => ({
      num : prevState.num + 1
    }))
  }

  render() {
    const { propsdestructurMassege } = this.props;
    const { statedestructurMassege, num } = this.state;
    return (
      <div>
        <p>state: {this.state.stateDitails}</p>
        <p>state: {statedestructurMassege}</p>
        <p>props: {this.props.propsMassege}</p>
        <p>props: {propsdestructurMassege}</p>
        <p>state num: {num}</p>
        <button onClick={this.increaseHandler}>Increase number</button>
      </div>
    );
  }
}

export default ClassComponents;
