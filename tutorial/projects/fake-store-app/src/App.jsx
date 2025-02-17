import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotfoundPage from "./pages/404";
import ProductsProvider from "./contexts/ProductsContext";
import CardProvider from "./contexts/CardContext";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <CardProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<NotfoundPage />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CardProvider>
  );
};

export default App;
