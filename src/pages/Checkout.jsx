import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_checkOut.css';

const Checkout = ({ cart, removeFromCart, clearCart }) => {
  const navigate = useNavigate(); 

  const handlePay = () => {
    alert('¡Compra realizada con éxito!');
    clearCart(); 
    navigate('/books'); 
  };

  return (
    <div className="checkout">
      <h2>Resumen de tu compra</h2>
      {cart.length === 0 ? (
        <p>No hay libros en tu carrito.</p>
      ) : (
        <ul className="checkout__list">
          {cart.map((item) => (
            <li key={item.id} className="checkout__item">
              <img src={item.image} alt={item.title} className="checkout__image" />
              <div>
                <p>{item.title}</p>
                <p><strong>${item.price}</strong></p>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-remove">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={handlePay} className="btn btn-pay">Pagar</button>
      )}
    </div>
  );
};

export default Checkout;
