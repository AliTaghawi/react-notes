import React, { PureComponent } from 'react';
import FunctionMemo from './FunctionMemo';

class ClassPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hi'
    }
  }

  reset = () => {
    this.setState({
      text: 'hi'
    })
  }

  render() {
    console.log('class rendered')
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.reset}>reset</button>
        <FunctionMemo text={this.state.text} />
      </div>
    );
  }
}

export default ClassPureComponent;