/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '200px', height: '200px' }} // Ajusta el ancho y la altura según tus necesidades
      />
      <h2>{product.name}</h2>
      <p>${product.price.toLocaleString('de-DE')}</p>
      <button onClick={() => addToCart(product)}>Añadir al Carrito</button> <br />
      <Link to={`/products/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default ProductCard;
