import React, { useState, useTransition } from "react";

function createArray(num = 10) {
  const myArray = [];
  for (let index = num; index > 0; index--) {
    myArray.push(index);
  }
  return myArray;
}

const TransitionComponent = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState(createArray());
  const [isPending, startTransition] = useTransition();

  const changHandler = (event) => {
    setText(event.target.value);
    startTransition(() => setValue(createArray(event.target.value)));
  };

  return (
    <div>
      <input type="text" value={text} onChange={changHandler} />
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        value.map((item) => <p key={item}>{item}</p>)
      )}
    </div>
  );
};

export default TransitionComponent;
