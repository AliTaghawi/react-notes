import React, { useContext } from 'react';
import { nameContext } from './Main'

const C = () => {
  const {name , setName} = useContext(nameContext)

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setName('seyed ali taghawi')}>change</button>
    </div>
  );
};

export default C;