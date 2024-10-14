import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { selectNumber, increase, decrease, increaseByAmount } from '../features/number/numberSlice'

const Number = () => {
  const [value, setValue] = useState(0)
  const number = useSelector(selectNumber)
  const dispatch = useDispatch()
  
  return (
    <div>
      <p>number is {number}</p>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => dispatch(increaseByAmount(+value))}>increaseByAmount</button>
    </div>
  );
};

export default Number;