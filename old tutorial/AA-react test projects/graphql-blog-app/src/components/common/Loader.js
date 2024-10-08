import React from 'react';
import {TailSpin} from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{width: "100%", height: '1000px', display: 'flex', justifyContent: 'center'}}>
      <TailSpin
        height="100"
        width="100"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;