/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


const App = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
    
    
  );
};

export default App;
