import React from 'react';
import '../styles/components/_cart.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart__item" key={item.id}>
            <p>{item.title}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
