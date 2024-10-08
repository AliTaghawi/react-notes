import React, { Component } from 'react';

//styles
import styles from "../styles/common.module.css";

class Product extends Component {
  render() {
    return (
      <div className={styles.common}>
        <h1>product #{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Product;