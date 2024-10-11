import React, { useRef, useState } from "react";

const RefComponent = () => {
  // static
  const data = [
    { id: 1, name: "ali" },
    { id: 2, name: "heydar" },
  ];

  // not rendering
  const number = useRef(0); // used for mutable and not rendering var
  const span = useRef(null) // also use for ref to on element
  console.log(span.current)

  // rendering
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    number.current += 1
    console.log(number.current)
  }
  return <div>
    <span ref={span} >{counter}</span>
    <button onClick={() => setCounter(con => con + 1)} >Increase</button>
    <br />
    <button onClick={clickHandler} >Change ref number</button>
  </div>;
};

export default RefComponent;
