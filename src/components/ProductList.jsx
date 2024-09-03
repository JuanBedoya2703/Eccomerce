/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductList;
