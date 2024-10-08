import React, { useState } from 'react';
import A from './A';

export const nameContext = React.createContext();

const Main = () => {
  const [name, setName] = useState('S.A.T')

  return (
    <nameContext.Provider value={{name, setName}}>
      <A/>
    </nameContext.Provider>
  );
};

export default Main;