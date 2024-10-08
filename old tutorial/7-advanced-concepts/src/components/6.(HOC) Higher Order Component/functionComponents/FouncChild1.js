import React from 'react';
import HOCFounctionTest from './HOCFounctionTest';

const FouncChild1 = ({num, addOne, test}) => {
  return (
    <div>
      <h1>Child1</h1>
      <p onClick={addOne}>I am Child1 and my number is : {num}/ Click for increase</p>
      <p>my props test : {test}</p>
    </div>
  );
};

export default HOCFounctionTest(FouncChild1);