import React from "react";

function CartItem({ item, updateCartItem }) {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>
        -
      </button>
      <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>
        +
      </button>
    </li>
  );
}

export default CartItem;