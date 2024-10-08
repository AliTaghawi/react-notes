import React from 'react';

const Bcomponent = (props) => {
  console.log('Bcomponent did mount')

  return (
    <div>
      <h3>{props.value}</h3>
      <button onClick={props.changeHndler}>change</button>
    </div>
  );
};

export default React.memo(Bcomponent);