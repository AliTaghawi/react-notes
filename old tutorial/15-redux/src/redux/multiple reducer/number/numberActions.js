const increaseNumber = () => {
  return {
    type: 'INCREASENUMBER'
  }

}
const decreaseNumber = () => {
  return {
    type: 'DECREASENUMBER'
  }
}

export {increaseNumber, decreaseNumber};