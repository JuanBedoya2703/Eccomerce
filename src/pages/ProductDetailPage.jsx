/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useCart } from '../context/CartContext';
import "../styles/ProductDetail.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Usa useNavigate para la navegación

  useEffect(() => {
    fetch(`/products.json`)
      .then(response => response.json())
      .then(data => {
        const productData = data.find(product => product.id === parseInt(id));
        setProduct(productData);
        // Simular la carga de productos relacionados
        fetch('/related-products.json') // Ajusta la ruta según sea necesario
          .then(response => response.json())
          .then(relatedData => setRelatedProducts(relatedData))
          .catch(error => console.error('Error loading related products:', error));
      })
      .catch(error => console.error('Error loading product details:', error));
  }, [id]);

  return (
    
    <div className='product-detail'>
      <button className='back-button' onClick={() => navigate(-1)}>Volver</button>

      {product ? (
        <div className='product-detail-container'>
          <div className='product-image'>
            <img
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className='product-info'>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;
