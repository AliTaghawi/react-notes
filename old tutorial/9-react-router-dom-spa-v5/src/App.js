import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Products from "./components/Products";
import Product from "./components/common/Product";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path="/aboutus"
          render={(props) => (
            <AboutUs content="this is props test" {...props} />
          )}
        />
        <Route path="/blogs" component={Blogs} />
        <Route path="/products/:id" component={Product} />
        <Route path="/products" component={Products} />
        <Redirect from="/articles" to="/blogs" />
        <Route exact path="/" component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
