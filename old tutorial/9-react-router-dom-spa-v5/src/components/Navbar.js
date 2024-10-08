import React, { Component } from "react";
import { Link } from "react-router-dom";

//styles
import styles from './styles/Navbar.module.css'

class Navbar extends Component {
  render() {
    return (
      <ul className={styles.navbar}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboutus'>AboutUs</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
      </ul>
    );
  }
}

export default Navbar;
