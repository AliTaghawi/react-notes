import React, { useCallback, useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

const MemoComponent = () => {
  console.log("ParentComponent is rendered");
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const slow = useMemo(() => {
    for (let index = 0; index < 1000000000; index++) {}
    return counter;
  }, [counter]);

  const clickHandler = useCallback(() => {
    setNumber((num) => num + 1);
  }, [number]);

  return (
    <div>
      <div>
        <span>{slow}</span>
        <br />
        <button onClick={() => setCounter((con) => con + 1)}>Increase</button>
      </div>
      {/* <div>
        <span>{number}</span>
        <button onClick={() => setNumber(num => num + 1)}>+</button>
      </div> */}
      <ChildComponent number={number} clickHandler={clickHandler} />
    </div>
  );
};

export default MemoComponent;
