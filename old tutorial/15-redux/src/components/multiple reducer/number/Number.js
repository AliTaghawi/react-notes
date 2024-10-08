import React from "react";
import { useDispatch, useSelector } from "react-redux";

//redux actions
import {
  increaseNumber,
  decreaseNumber,
} from "../../../redux/multiple reducer/number/numberActions";

const Number = () => {
  const number = useSelector((state) => state.numberState.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number - {number}</h3>
      <button onClick={() => dispatch(increaseNumber())}>Increase</button>
      <button onClick={() => dispatch(decreaseNumber())}>Decrease</button>
    </div>
  );
};

export default Number;
