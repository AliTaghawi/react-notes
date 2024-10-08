import { Route, Routes, Navigate } from "react-router-dom";
import Details from "./components/common/Details";

//components
import Navbar from "./components/Navbar";
import Stor from "./components/Stor";

//contextProviders
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import Cart from "./components/Cart";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Stor />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
