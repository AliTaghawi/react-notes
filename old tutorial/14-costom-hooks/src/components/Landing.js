import React from 'react';
import { useTitle } from '../hooks/costomHooks';

const Landing = () => {
  useTitle('landing Page')
  return (
    <div>
      <h2>Landing</h2>
    </div>
  );
};

export default Landing;