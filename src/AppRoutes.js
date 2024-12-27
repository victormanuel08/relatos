import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import BookDetails from './pages/BookDetails';
import Checkout from './pages/Checkout';
import NotFound from './components/NotFound';

const AppRoutes = ({ cart, addToCart, removeFromCart, clearCart, search, setSearch }) => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/books" element={<MainPage search={search} setSearch={setSearch} cart={cart} addToCart={addToCart} />} />
    <Route path="/books/:id" element={<BookDetails addToCart={addToCart} />} />
    <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
