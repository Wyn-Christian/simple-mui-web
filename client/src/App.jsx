import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import { Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

function App() {
  return (
    <Box>
      {/* Navbar */}
      <AppBar>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Some Logo
          </Typography>
          <Box sx={{ color: "white" }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "inherit" }}>
                Home
                {/* <a href="/">Home</a> */}
              </Button>
            </Link>
            <Link
              to="/about-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "inherit" }}>
                About Us
                {/* <a href="/">Home</a> */}
              </Button>
            </Link>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "inherit" }}>
                Products
                {/* <a href="/">Home</a> */}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
