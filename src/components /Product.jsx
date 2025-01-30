import React from "react";

function Product({ product, addToCart }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
}

export default Product;