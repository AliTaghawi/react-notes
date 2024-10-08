import React from "react";

const FunctionRef = () => {
  const input = React.createRef();

  const showRef = () => {
    console.log(input.current);
    input.current.style.display = "block";
  };
  return (
    <div>
      <button onClick={showRef}>showRef</button>
      <input ref={input} type="text" />
    </div>
  );
};

export default FunctionRef;
