import React from 'react';
import { useProducts } from '../contexts/ProductsContext';

const ProductsPage = () => {
  const product = useProducts()
  console.log(product)
  return (
    <div>
      ProductsPage
    </div>
  );
};

export default ProductsPage;