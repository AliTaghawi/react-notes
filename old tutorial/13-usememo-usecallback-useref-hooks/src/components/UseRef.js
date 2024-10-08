import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();

  useEffect(()=> {
    console.log(inputRef.current);
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRef;
