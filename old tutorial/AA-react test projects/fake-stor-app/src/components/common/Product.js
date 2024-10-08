import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//functions
import { findCountity, isExist, priceFee, shortedTitle } from '../../helpers/functions';

//context 
import { cartContext } from '../../context/CartContextProvider';

//icons
import trashIcon from '../../assets/svg/trash.svg'

//styles
import styles from './styles/Product.module.css'

const Product = ({productData}) => {

  const {image, title, price, id} = productData
  const {cartData ,dispatch} = useContext(cartContext)
  const {selectedItems} = cartData

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt='product' title={title} />
      </div>
      <h2 title={title}>{shortedTitle(title)}</h2>
      <p>{price} $</p>
      {isExist(selectedItems, id) && <div className={styles.fee}>* <span>{findCountity(selectedItems, id)}</span> : <p>{priceFee(selectedItems, id)} $</p></div> }
      <div className={styles.linkContainer}>
        <Link to={`/products/${id}`}>Details</Link>
        <div>
          {findCountity(selectedItems, id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt='trash' /></button>}
          {findCountity(selectedItems, id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
          {findCountity(selectedItems, id) && <span>{findCountity(selectedItems, id)}</span>}
          {
            isExist(selectedItems, id) ? 
            <button onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
            <button className={styles.add} onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;