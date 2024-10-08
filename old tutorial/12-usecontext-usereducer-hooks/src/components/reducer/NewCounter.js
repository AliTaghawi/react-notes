import React, { useReducer } from 'react';



const initialState = 0

const reduce = (state, action) => {
  switch (action) {
    case "INCREASE":
      return state += 1
    case 'DECREASE': 
      return state -= 1
    case 'RESET': 
      return initialState
    default:
      return state
  }
}

const NewCounter = () => {

  const [num1 , dispatch1] = useReducer(reduce, initialState)
  const [num2 , dispatch2] = useReducer(reduce, initialState)

  console.log(num1, num2)

  return (
    <>
      <div>
        <h4>{num1}</h4>
        <button onClick={() => dispatch1('INCREASE')}>Up</button>
        <button onClick={() => dispatch1('RESET')}>Reset</button>
        <button onClick={() => dispatch1('DECREASE')}>Down</button>
      </div>
      <div>
        <h4>{num2}</h4>
        <button onClick={() => dispatch2('INCREASE')}>Up</button>
        <button onClick={() => dispatch2('RESET')}>Reset</button>
        <button onClick={() => dispatch2('DECREASE')}>Down</button>
      </div>
      
    </>
  );
};

export default NewCounter;