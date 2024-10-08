import React, { useCallback, useState } from "react";
import Acomponent from "./Acomponent";
import Bcomponent from "./Bcomponent";

const Main = () => {
  const [aa, setAA] = useState("A");
  const [bb, setBB] = useState("B");

  const changeHndlerA = useCallback(() => {
    setAA("AA");
  }, [aa]);

  const changeHndlerB = useCallback(() => {
    setBB("BB");
  }, [bb]);

  console.log("Main component did mount");

  return (
    <div>
      <Acomponent value={aa} changeHndler={changeHndlerA} />
      <Bcomponent value={bb} changeHndler={changeHndlerB} />
    </div>
  );
};

export default Main;
