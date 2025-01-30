import CartItem from "./CartItem"

function Cart({ cart, updateCartItem, total }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateCartItem={updateCartItem}
              />
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
 