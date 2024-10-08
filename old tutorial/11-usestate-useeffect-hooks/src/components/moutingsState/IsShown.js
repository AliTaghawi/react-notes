import React, { useState } from 'react';
import Logger from './Logger';

const IsShown = () => {
  const [isshown, setIsshown]= useState(true)

  const deletComp = () => {
    setIsshown(false)
  }

  return (
    <div>
      {isshown && <Logger />}
      <button onClick={deletComp}>delete component</button>
    </div>
  );
};

export default IsShown;