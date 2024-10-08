import React from "react";
import ClassComponents from "./components/ClassComponents";

function App() {
  return (
    <div>
      <ClassComponents
        propsMassege="this is how handeling props in class components"
        propsdestructurMassege="this is how handeling props destructuring in class components"
      />
    </div>
  );
}

export default App;
