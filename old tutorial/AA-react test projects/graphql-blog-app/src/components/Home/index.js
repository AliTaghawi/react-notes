import { Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "./Authors";
import Blogs from "./Blogs";

const HomePage = () => {
  return (
    <Grid container spacing={2} mt={3} padding={3}>
      <Grid item xs={12} md={3} mt={4}>
        <Authors />
      </Grid>
      <Grid item xs={12} md={9} mt={4}>
        <Blogs />
      </Grid>
    </Grid>
  );
};

export default HomePage;
