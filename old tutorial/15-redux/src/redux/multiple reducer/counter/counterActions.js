const increaseCounter = (value=1) => {
  return {
    type: 'INCREASECOUNTER',
    payload: value,
  }

}
const decreaseCounter = (value=1) => {
  return {
    type: 'DECREASECOUNTER',
    payload: value
  }
}

export {increaseCounter, decreaseCounter};