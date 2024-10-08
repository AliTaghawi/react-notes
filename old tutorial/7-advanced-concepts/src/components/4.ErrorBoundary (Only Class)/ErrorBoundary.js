import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMassege : '',
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      error: true,
      errorMassege : error
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>{"An error occured"}</h1>
          <p>{`${this.state.errorMassege}`}</p>
        </div>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}

export default ErrorBoundary;
