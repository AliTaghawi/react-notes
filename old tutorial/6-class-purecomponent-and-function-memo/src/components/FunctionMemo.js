import React from "react";

const FunctionMemo = (props) => {
  console.log("function rendered");
  return (
    <div>
      <h1>{props.text} child</h1>
    </div>
  );
};

// export default FunctionMemo;
export default React.memo(FunctionMemo);
