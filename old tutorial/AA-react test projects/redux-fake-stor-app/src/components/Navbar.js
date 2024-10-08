import React from 'react';
import { Link } from 'react-router-dom'

//redux
import { useSelector } from 'react-redux';

//styles
import styles from './styles/Navbar.module.css'

//Icons
import cartIcon from '../assets/svg/cart.svg'

const Navbar = () => {
  const cartData = useSelector(state => state.cartContext)

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
      <div className={styles.cart}>
        <Link to='/cart'>
          <img src={cartIcon} alt='cartIcon' />
        </Link>
        <span>{cartData.totalcount}</span>
      </div>
    </div>
  );
};

export default Navbar;