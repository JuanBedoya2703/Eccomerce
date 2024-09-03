/* eslint-disable no-unused-vars */
// src/pages/ProductsPage.jsx (o donde manejes la lista de productos)
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/Search';
import productsData from '../../public/products.json';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (searchTerm) => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="products-page">
      <SearchBar onSearch={handleSearch} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
