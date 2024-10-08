import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../../redux/simple counter/counterActions";

const CounterHookRedux = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter - {counter}</h3>
      <button onClick={() => dispatch(increase())}>Increase</button>
    </div>
  );
};

export default CounterHookRedux;
