import React from "react";
import { useTitle } from "../hooks/useTitle";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CustomComponent = () => {
  useTitle("Custom page");
  const [name, setName] = useLocalStorage("name", "");
  
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
};

export default CustomComponent;
