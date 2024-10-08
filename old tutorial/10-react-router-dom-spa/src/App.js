import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Products from "./components/Products";
import Product from "./components/common/Product";
import AboutTeam from "./components/common/AboutTeam";
import AboutWorkPlace from "./components/common/AboutWorkPlace";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutus/*" element={<AboutUs content="this is props test" />}>
          <Route path="team" element={<AboutTeam/>} />
          <Route path="workplace" element={<AboutWorkPlace/>} />
        </Route>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
