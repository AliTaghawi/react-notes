import React from "react";
import { Link } from "react-router-dom";

const data = [
  { id: 1, title: "product1" },
  { id: 2, title: "product2" },
  { id: 3, title: "product3" },
  { id: 4, title: "product4" },
];

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
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
    </div>
  );
};

export default Products;
