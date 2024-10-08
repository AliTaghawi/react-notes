import React, { useEffect } from 'react';

const Child = () => {
  
  useEffect(() => {
    console.log("mounting child")

    return () => {
      console.log("unMounting child")
    }
  }, [])

  return (
    <div>
      this is Child component
    </div>
  );
};

export default Child;