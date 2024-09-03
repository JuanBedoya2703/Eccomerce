/* eslint-disable no-unused-vars */
import React from 'react';
import { useCart } from '../context/CartContext';
import "../styles/Cart.css"

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p className="total">Total: ${total}</p>
          <button className="clear-cart" onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
