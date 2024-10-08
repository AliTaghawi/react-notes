import { Container } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" >{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
