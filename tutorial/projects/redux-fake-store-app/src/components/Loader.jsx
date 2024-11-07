import React from 'react';
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full flex justify-center items-start mt-28 h-[1000px]'>
      <RotatingLines width='100px' height="100px" strokeColor='#fe5d42' strokeWidth='3' />
    </div>
  );
};

export default Loader;