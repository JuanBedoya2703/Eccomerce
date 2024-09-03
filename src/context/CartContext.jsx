/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor del contexto
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
