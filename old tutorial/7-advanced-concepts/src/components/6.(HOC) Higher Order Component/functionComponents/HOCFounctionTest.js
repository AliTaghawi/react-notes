import React, { useState } from 'react';

const HOCFounctionTest = (OldComponent, conter = 1) => {
  const newComponent = (props) => {
    const [state, setState] = useState({
      num : 0,
    })

    const addOne = () => {
      setState(prev => ({
        ...state,
        num : prev.num + conter
      }))
    }
    
    return <OldComponent num={state.num} addOne={addOne} {...props} />
  }
  return newComponent;
};

export default HOCFounctionTest;