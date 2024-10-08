import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component='div' variant="h5" flexGrow={1} fontWeight='700' >وبلاگ</Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
