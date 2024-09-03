/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <header>
      <div className="logo">
        <Link to="/">Online Store</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/cart">Carrito ({cart.length})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
