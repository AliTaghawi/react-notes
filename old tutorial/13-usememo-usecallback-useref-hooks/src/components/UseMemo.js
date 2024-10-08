import React, { useMemo, useState } from 'react';

const UseMemo = () => {

  const [isShown, setIsShown] = useState(true);
  const [num , setNum] = useState(0)

  const show = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return isShown;
  }, [isShown])

  const showHandler = () => {
    setIsShown(!isShown)
  }

  const numHandler = () => {
    setNum(pre => pre + 1)
  }

  return (
    <div>
      <button onClick={showHandler}>Show Hide</button>
      <p>{show ? 'Show' : 'Hide'}</p>
      <span>{num}</span>
      <button onClick={numHandler}>Add</button>
    </div>
  );
};

export default UseMemo;