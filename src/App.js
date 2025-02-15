import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
