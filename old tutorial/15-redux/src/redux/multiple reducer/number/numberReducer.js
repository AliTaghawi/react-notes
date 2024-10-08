const initialState = {
  number: 0
}

const numberReducer = (state=initialState , action) => {
  switch(action.type) {
    case 'INCREASENUMBER': 
      return {
        ...state,
        number: state.number + 1,
      }
    case 'DECREASENUMBER': 
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  } 
}

export default numberReducer;