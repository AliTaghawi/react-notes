import React, { Component } from 'react';

import PropTypes from 'prop-types'

class ClassPropTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {number} = this.props
    return (
      <div>
        <h1>{number + 5}</h1>
      </div>
    );
  }
}

ClassPropTypes.propTypes = {
  number : PropTypes.number,
}

export default ClassPropTypes;