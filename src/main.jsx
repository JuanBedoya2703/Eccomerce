/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import './styles/main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <CartProvider>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </App>
    </CartProvider>
  </Router>
);
