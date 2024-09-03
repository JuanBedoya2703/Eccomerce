/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/SearchBar.jsx
import React, { useState } from 'react';
import "../styles/search.css"

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearch}
      />
      
    </div>
  );
};

export default Search;
