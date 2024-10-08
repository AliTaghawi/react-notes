import React, { createContext, useEffect, useState } from 'react';
import { fetchProducts } from '../services/apis';

export const productContext = createContext();

const ProductContextProvider = ({children}) => {
  const [products , setProducts] = useState([])

  useEffect(() => {
    const fetchApiData = async () => {
      setProducts(await fetchProducts());
    }
    fetchApiData();
  }, [])

  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;