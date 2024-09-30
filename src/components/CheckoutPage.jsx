import React from 'react';
import useCartStore from '../store/useCartStore';

function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const {clearCart,total}= useCartStore()
  return (
    <div>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h1>{item.name} -- ${item.price}</h1>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
          <p>No items in the cart</p>
        )}
        <h4>Total: {total}</h4>
        <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default CheckoutPage;
