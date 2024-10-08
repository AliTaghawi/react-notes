import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class ClassPortal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h1>this is modal</h1>
      </div>,
      document.getElementById('modal-root')
    );
  }
}

export default ClassPortal;