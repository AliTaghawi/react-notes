import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

//functions
import { findCountity, isExist, priceFee } from '../../helpers/functions';

//api
import { fetchProduct } from '../../services/apis';

//context
import { cartContext } from '../../context/CartContextProvider';

//icons
import trashIcon from '../../assets/svg/trash.svg'

//styles 
import styles from './styles/Details.module.css'

const Details = () => {
  const [product, setProduct] = useState({})

  const {cartData ,dispatch} = useContext(cartContext)
  const {selectedItems} = cartData

  const params = useParams()
  const navigate = useNavigate()

  const id = product.id

  useEffect(() => {
    const fetchApi = async () => {
      setProduct(await fetchProduct(params.id))
    }
    fetchApi();
  })

  const {image, title, description, category, price} = product

  return (
    <div className={styles.productDetails} >
      <div className={styles.imageContainer}>
        <img src={image} alt='product' />
      </div>
      <div className={styles.details}>
        <div className={styles.main}>
          <div className={styles.descrip}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.category} ><span>Category:</span><span>{category}</span></div>
          <div className={styles.price}>
            <p>{price} $</p>
            {isExist(selectedItems, id) && <div className={styles.fee}>* <span>{findCountity(selectedItems, id)}</span> : <p>{priceFee(selectedItems, id)} $</p></div> }
          </div>
        </div>
        <div className={styles.footer}>
          <Link onClick={() => navigate(-1)}>Go back</Link>
          <div>
          {findCountity(selectedItems, id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}><img src={trashIcon} alt='trash' /></button>}
          {findCountity(selectedItems, id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: product})}>-</button>}
          {findCountity(selectedItems, id) && <span>{findCountity(selectedItems, id)}</span>}
          {
            isExist(selectedItems, id) ? 
            <button onClick={() => dispatch({type: "INCREASE", payload: product})}>+</button> :
            <button className={styles.add} onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>Add to cart</button>
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;