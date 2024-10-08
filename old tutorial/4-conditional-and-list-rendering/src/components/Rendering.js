import React, { Component } from "react";
import { v4 } from "uuid";

class Rendering extends Component {
  constructor() {
    super();
    this.state = {
      isLogedIn: false,
      data: ["ali", "heydar", "taghawi"],
    };
  }

  clickHandler = () => {
    this.setState({
      isLogedIn: !this.state.isLogedIn,
    });
  };

  render() {
    return (
      <div>
        {this.state.isLogedIn ? (
          <p>Welcome</p>
        ) : (
          <button onClick={this.clickHandler}>Login</button>
        )}
        <br />
        <br />
        {this.state.data.map((name) => (
          <p key={v4()}>the name is: {name}</p>
        ))}
      </div>
    );
  }
}

export default Rendering;
