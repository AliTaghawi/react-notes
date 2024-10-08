import React, { useReducer } from 'react';

const initialState = {
  number1 : 0,
  number2 : 0,
}

const reduce = (state, action) => {
  switch (action.type) {
    case "INCREASE1":
      return {...state, number1: state.number1 + 1}
    case 'DECREASE1': 
      return {...state, number1: state.number1 - 1}
    case "INCREASE2":
      return {...state, number2: state.number2 + 1}
    case 'DECREASE2': 
      return {...state, number2: state.number2 - 1}
    case 'RESET': 
      return initialState
    default:
      return state
  }
}

const Counter = () => {

  const [data, dispatch] = useReducer(reduce, initialState)

  console.log(data)
  return (
    <>
      <div>
        <h4>{data.number1}</h4>
        <button onClick={() => dispatch({type: 'INCREASE1', amount: 1})}>Up</button>
        <button onClick={() => dispatch({type: 'RESET', amount: 1})}>Reset</button>
        <button onClick={() => dispatch({type: 'DECREASE1', amount: 1})}>Down</button>
      </div>
      <div>
        <h4>{data.number2}</h4>
        <button onClick={() => dispatch({type: 'INCREASE2', amount: 1})}>Up</button>
        <button onClick={() => dispatch({type: 'RESET', amount: 1})}>Reset</button>
        <button onClick={() => dispatch({type: 'DECREASE2', amount: 1})}>Down</button>
      </div>
    </>
  );
};

export default Counter;