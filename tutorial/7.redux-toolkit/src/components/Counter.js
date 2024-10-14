import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { selectCounter, increase, decrease, increaseByAmount } from '../features/counter/counterSlice'

const Counter = () => {
  const [value, setValue] = useState(0)
  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()
  
  return (
    <div>
      <p>counter is {counter}</p>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => dispatch(increaseByAmount(+value))}>increaseByAmount</button>
    </div>
  );
};

export default Counter;