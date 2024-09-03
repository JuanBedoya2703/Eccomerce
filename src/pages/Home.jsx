/* eslint-disable no-unused-vars */
import React from 'react';
import ProductCard from '../components/ProductCard';
import "../styles/Home.css"

const Home = () => {
  // Simular datos de productos
  const products = [
    {
      "id": 1,
      "name": "Play Station 5",
      "price": 2400000,
      "description": "-Diseño delgado Con PS5, los jugadores obtienen una poderosa tecnología de juego dentro de un diseño de consola elegante y compacto. ",
      "image": "../src/img/play 5.webp"
    },


    {
      "id": 7,
      "name": "Tablet de 10 pulgadas",
      "price": 399900,
      "description": "Tablet de 10 pulgadas con pantalla HD y procesador rápido.",
      "image": "../src/img/tablet de 10.jpeg"
    },
    {
      "id":9,
      "name": "Auriculares inalámbricos",
      "price": 179900,
      "description": "Auriculares inalámbricos cómodos y con buena calidad de sonido.",
      "image": "../src/img/auriculares inhalambricos.jpg"
    },
    {
      "id":29 ,
      "name": "Reloj inteligente",
      "price": 249900,
      "description": "Reloj inteligente con funciones de fitness y notificaciones, perfecto para mantenerse conectado.",
      "image": "../src/img/reloj inteligente.avif"
    },
  ];

  return (
    <div className="home">
      <header className="home-header">
        <h2>Bienvenido a Online Store</h2>
        <p>Aqui encontraras los mejores productos a un excelente precio</p>
      </header>
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
