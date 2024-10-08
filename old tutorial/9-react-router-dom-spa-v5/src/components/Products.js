import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

//styles
import styles from "./styles/common.module.css";
import pstyles from "./styles/Products.module.css";

class Products extends Component {
  showquery = () => {
    // const resulte = queryString.parse(this.props.location.search)
    // console.log(resulte)

    const query = {
      sort: 3,
      align: "newest",
    };

    console.log(queryString.stringify(query));
    this.props.history.push(
      `${this.props.location.pathname}?${queryString.stringify(query)}`
    );
  };

  render() {
    return (
      <div className={styles.common}>
        <h1>Products</h1>
        <ul className={pstyles.productList}>
          <li>
            <Link to="/products/1">Product 1</Link>
          </li>
          <li>
            <Link to="/products/2">Product 2</Link>
          </li>
          <li>
            <Link to="/products/3">Product 3</Link>
          </li>
          <li>
            <Link to="/products/4">Product 4</Link>
          </li>
        </ul>
        <button onClick={this.showquery}>show query</button>
      </div>
    );
  }
}

export default Products;
