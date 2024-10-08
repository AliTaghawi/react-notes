import React from "react";

import PropTypes from "prop-types";

const FunctionPropTypes = ({ number }) => {
  return (
    <div>
      <h1>{number + 2}</h1>
    </div>
  );
};

FunctionPropTypes.propTypes = {
  number: PropTypes.number,
}

// console.log(typeof(FunctionPropTypes))

export default FunctionPropTypes;
