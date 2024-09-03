/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Sobre Nosotros</h3>
          <p>Online Store es el mejor sitio web para realizar tus compras en lineas. Nuestro objetivo es que tengas la mejor experiencia a la hora de comprar.</p>
        </div>
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul className="footer-list">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Ayuda</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Correo: OnlineStore@gmail.com</p>
          <p>Teléfono: 123 456 789</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Online Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
