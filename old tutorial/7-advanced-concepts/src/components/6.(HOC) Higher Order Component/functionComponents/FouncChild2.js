import React from 'react';
import HOCFounctionTest from './HOCFounctionTest';

const FouncChild2 = ({num, addOne, test}) => {
  return (
    <div>
      <h1>Child2</h1>
      <p onClick={addOne}>I am Child2 and my number is : {num}/ Click for increase</p>
      <p>my props test : {test}</p>
    </div>
  );
};

export default HOCFounctionTest(FouncChild2, 5);