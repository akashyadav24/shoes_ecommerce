import React from "react";
import { useSelector } from "react-redux";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { AppBar, Grid, IconButton } from "@mui/material";

const Navbar = () => {
  const cartreducer = useSelector((state) => state.cartReducer);

  const { cartItems } = cartreducer;

  var subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="Navdiv" >
      <AppBar position="static" className="apppbar navbar navbar-expand-lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="navbar-nav "        
        >
          <Grid item className="nav-item">
            <a className="navbar-brand" href="/">
              <h2> shophub </h2>
            </a>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item className="nav-item">
            <a className="nav-link " href="/">
              <h1>Home</h1>
            </a>
          </Grid>
          <Grid item className="nav-item">
            <a className="nav-link " href="/#shop">
              <h1>Shop</h1>
            </a>
          </Grid>
          <Grid item className="nav-item">
            <a className="nav-link " href="/#blog">
              <h1>Blog</h1>
            </a>
          </Grid>
          <Grid item className="nav-item">
            <a className="nav-link " href="/#contact">
              <h1>Contact</h1>
            </a>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item className="nav-item">
            <a className="nav-link " href="#">
              <h2>Rs. {subtotal}</h2>
            </a>
          </Grid>
          <Grid item className="nav-item">
            <a className="nav-link " href="/cart">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </a>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
