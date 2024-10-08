import React, { useEffect, useState } from "react";

const Logger = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("component id mount");
    return () => {
      console.log("component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("component is updating");
  }, [number]);

  const addOne = () => {
    setNumber((perv) => perv + 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={addOne}>Add One</button>
    </div>
  );
};

export default Logger;
