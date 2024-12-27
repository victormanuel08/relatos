import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import useCart from './hooks/useCart';
import AppRoutes from './AppRoutes';
import './styles/main.css';

const App = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Header cart={cart} onSearch={handleSearch} />
      <AppRoutes 
        cart={cart} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart} 
        search={searchQuery} 
        setSearch={setSearchQuery} 
      />
      <Footer />
    </Router>
  );
};

export default App;

