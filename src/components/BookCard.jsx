import React from 'react';
import '../styles/components/_bookCard.css';

const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={() => onClick(book.id)}>
      <img className="book-card__image" src={book.image} alt={book.title} />
      <div className="book-card__info">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
        <p className="book-card__price">${book.price}</p>
      </div>
    </div>
  );
};

export default BookCard;
