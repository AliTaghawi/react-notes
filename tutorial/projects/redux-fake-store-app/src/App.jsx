import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProducts } from './features/products/productsSlice'

import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotfoundPage from "./pages/404";
import Layout from "./layout/Layout";
// import ProductsProvider from "./contexts/ProductsContext";
// import CardProvider from "./contexts/CardContext";

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    // <CardProvider>
      // <ProductsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<NotfoundPage />} />
          </Routes>
        </Layout>
      // </ProductsProvider>
    // </CardProvider>
  );
};

export default App;
