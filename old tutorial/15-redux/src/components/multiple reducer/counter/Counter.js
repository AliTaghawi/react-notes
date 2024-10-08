import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//redux actions
import { increaseCounter, decreaseCounter } from '../../../redux/multiple reducer/counter/counterActions'

const Counter = () => {
  const [value , setValue] = useState(1)
  const counter = useSelector(state => state.counterState.counter)
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter - {counter}</h3>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button onClick={() => dispatch(increaseCounter(+value))}>Increase</button>
      <button onClick={() => dispatch(decreaseCounter(+value))}>Decrease</button>
    </div>
  );
};

export default Counter;