import React from "react";

//components
import Product from "./common/Product";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./styles/ShopStore.module.css";

const ShopStore = () => {
  // const products = useContext(productContext);
  const products = useSelector(state => state.productsData.data)

  return (
    <div className={styles.shopStore} >
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default ShopStore;
