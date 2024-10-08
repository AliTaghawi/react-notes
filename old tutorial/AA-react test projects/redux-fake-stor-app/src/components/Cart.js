import React from "react";
import { Link } from "react-router-dom";

//redux
import { useSelector, useDispatch} from "react-redux";

//components
import Card from "./common/Card";

//styles
import styles from "./styles/Cart.module.css";

const Cart = () => {
  const cartData = useSelector(state => state.cartContext)
  const dispatch = useDispatch();

  return (
    <div className={styles.cart}>
      {!cartData.selectedItems.length > 0 && cartData.checkout && (
        <div className={styles.checkout}>
          <h4>you chacked out successfully</h4>
          <Link to="/products">Buy more</Link>
        </div>
      )}
      {!cartData.selectedItems.length > 0 && !cartData.checkout && 
      <div className={styles.clear}>
        <h4>Your cart is empty! Want to buy?</h4>
        <Link to="/products">Go to shop</Link>
      </div>
      }
      {cartData.selectedItems.length > 0 &&
      <div className={styles.mainContainer}>
        <div className={styles.cardContainer}>
          {cartData.selectedItems.map(item => <Card key={item.id} cardData={item} />)}
        </div>
        <aside>
          <p><span>Total Items: </span>{cartData.totalcount}</p>
          <p><span>Total Payment: </span>{cartData.total} $</p>
          <div>
            <button className={styles.clearButton} onClick={() => dispatch({type: "CLEAR"})}>clear</button>
            <button className={styles.checkoutButton} onClick={() => dispatch({type: "CHECKOUT"})} >checkout</button>
          </div>
        </aside>
      </div>}
    </div>
  );
};

export default Cart;
