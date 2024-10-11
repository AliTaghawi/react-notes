import React, { memo } from 'react';

const ChildComponent = ({number, clickHandler}) => {
  console.log("Child memo component is rendered")
  return (
    <div>
      ChildComponent
      <br />
      <span>{number}</span>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default memo(ChildComponent);