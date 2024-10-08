import React from 'react';
import ReactDOM from 'react-dom';

const FunctionPortal = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>this is modal</h1>
    </div>,
    document.getElementById('modal-root')
  );
};

export default FunctionPortal;