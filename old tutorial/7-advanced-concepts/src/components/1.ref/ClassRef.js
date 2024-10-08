import React, { Component } from "react";

class ClassRef extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  showRef = () => {
    console.log(this.input.current);
    // this.input.current.style.display = 'block'
  };

  render() {
    return (
      <div>
        <button onClick={this.showRef}>showRef</button>
        <input ref={this.input} type="text" />
      </div>
    );
  }
}

export default ClassRef;
