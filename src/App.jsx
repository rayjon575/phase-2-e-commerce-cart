import React, { useState } from "react";
import { products } from "./data";
import ProductList from "./components /ProductList";
import Cart from "./components /Cart";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="App">
      <h1>E-Commerce Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} updateCartItem={updateCartItem} total={calculateTotal()} />
    </div>
  );
}

export default App;