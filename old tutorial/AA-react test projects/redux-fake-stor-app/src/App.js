import { useEffect } from "react";

//react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

//services
import fetchProductsData from "./services/productsDataApiAction";

//components
import ShopStore from "./components/ShopStore";
import Navbar from "./components/Navbar";
import Details from "./components/common/Details";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/products" element={<ShopStore />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </>
  );
}

export default App;
