import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/_header.css';

const Header = ({ cart, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <header>
      <Link to="/" className="header__logo">
        <h1>Relatos de Papel</h1>
      </Link>
      <div className="header__nav">
        <div className="header__search">
          <i className="fas fa-search"></i> 
          <input
            type="text"
            placeholder="Buscar libros..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <Link to="/checkout" className="cart-button">
          <i className="fas fa-shopping-cart"></i>
          Carrito
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

