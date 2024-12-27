import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import mockData from '../mockData';
import '../styles/pages/_mainPage.css';

const MainPage = ({ searchQuery, addToCart }) => {
  const navigate = useNavigate();

  const filteredBooks = mockData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div className="main-page">
      <div className="main-page__books">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onAddToCart={() => addToCart(book)}
            onClick={() => navigate(`/books/${book.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
