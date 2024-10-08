import React, { useContext } from "react";

//components
import Product from "./common/Product";

//context
import { productContext } from "../context/ProductContextProvider";

//styles
import styles from "./styles/Stor.module.css";

const Stor = () => {
  const products = useContext(productContext);

  return (
    <div className={styles.stor} >
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Stor;
