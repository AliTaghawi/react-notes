import React from "react";
import { useProducts } from "../contexts/ProductsContext";
import Card from "../components/Card";

const ProductsPage = () => {
  const product = useProducts();

  return (
    <div className="flex justify-between">
      <div className="w-full flex justify-between flex-wrap">
        {!product.length && <h1>Loading...</h1>}
        {product.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductsPage;
