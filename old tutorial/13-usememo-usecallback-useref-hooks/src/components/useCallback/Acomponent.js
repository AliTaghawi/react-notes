import React from 'react';

const Acomponent = (props) => {
  console.log('Acomponent did mount')

  return (
    <div>
      <h3>{props.value}</h3>
      <button onClick={props.changeHndler}>change</button>
    </div>
  );
};

export default React.memo(Acomponent);