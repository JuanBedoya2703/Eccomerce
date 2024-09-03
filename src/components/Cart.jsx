/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h1>Carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
