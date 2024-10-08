const initialState = {
  counter: 0
}

const counterReducer = (state=initialState , action) => {
  switch(action.type) {
    case 'INCREASECOUNTER': 
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    case 'DECREASECOUNTER': 
      return {
        ...state,
        counter: state.counter - action.payload,
      }
    default:
      return state
  } 
}
  
export default counterReducer;