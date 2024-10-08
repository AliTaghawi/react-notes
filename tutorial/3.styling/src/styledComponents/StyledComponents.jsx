import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: ${(props) => (props.changing ? "silver" : "honeydew")};
  color: darkgreen;
  padding: 1rem;
  margin-bottom: 2rem;
  &:hover {
    border: 1px solid orange;
    color: blue;
  }
  @media (max-width: 1000px) {
    background-color: darkslategray;
    color: white;
  }
`;

const StyledComponents = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <Div changing={isTrue}>
      <h1>this is StyledComponents styling</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        doloribus suscipit, sunt, sint eaque et, amet voluptatem iste sit
        ratione hic qui possimus rerum fuga fugiat atque non inventore nemo.
      </p>
      <button onClick={() => setIsTrue((s) => !s)}>Change BG color</button>
    </Div>
  );
};

export default StyledComponents;
