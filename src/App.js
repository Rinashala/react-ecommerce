import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeButtons, setActiveButtons] = useState({});

  useEffect(() => {
    fetch("/react-ecommerce/products-api/api/products.json")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    fetch("/react-ecommerce/products-api/api/categories.json")
      .then((res) => res.json())
      .then((res) => setCategory(res))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevState) => [...prevState, product]);
    setActiveButtons((prevState) => ({
      ...prevState,
      [product.id]: !prevState[product.id],
    }));
  };

  return (
    <><div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <Products
              category={category}
              products={products}
              cart={cart}

            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <Product
              products={products}
              handleAddToCart={handleAddToCart}
              activeButtons={activeButtons}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} activeButtons={activeButtons} />} />

      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;

