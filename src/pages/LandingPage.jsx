import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_landingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/books'), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page">
      <h1>¡Bienvenido a Relatos de Papel!</h1>
      <div className="book-animation">
        <div className="book"></div>
        <div className="book"></div>
        <div className="book"></div>
      </div>
      <p>Redirigiéndote a nuestra página principal en 5 segundos...</p>
    </div>
  );
};

export default LandingPage;

