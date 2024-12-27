import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockData from '../mockData';
import '../styles/pages/_bookDetails.css';

const BookDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = mockData.find((item) => item.id === parseInt(id));

  if (!book) return <p>Libro no encontrado</p>;

  return (
    <div className="book-details">
      <div className="book-details__content">
        <img src={book.image} alt={book.title} className="book-details__image" />
        <div className="book-details__info">
          <h1>{book.title}</h1>
          <p><strong>Autor:</strong> {book.author}</p>
          <p><strong>Descripción:</strong> {book.description}</p>
          <p><strong>Precio:</strong> ${book.price}</p>
          <div className="book-details__buttons">
            <button onClick={() => addToCart(book)} className="btn btn-add-to-cart">Agregar al carrito</button>
            <button onClick={() => navigate(-1)} className="btn btn-back">Volver</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
