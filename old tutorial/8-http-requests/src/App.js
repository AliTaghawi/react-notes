import React from 'react';
// import Fetch from './components/fetch/Fetch';
import GetDelet from './components/axios/GetDelet';
import SimrequestesPutPatch from './components/axios/SimrequestesPutPatch';

function App() {
  return (
    <div>
      {/* <Fetch /> */}
      <GetDelet />
      <SimrequestesPutPatch />
    </div>
  );
}

export default App;
