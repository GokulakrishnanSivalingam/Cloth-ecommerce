// src/Cart.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const handleBuy = (id) => {
    navigate(`/buy/${id}`);
  };

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart--container">
      <h2 className="cart--title">Cart ({cartItems.length} items)</h2>
      <div className="cart--grid">
        {cartItems.map((item, index) => (
          <div key={index} className="cart--item">
            <img src={item.image} alt={item.name} className="cart--image" />
            <h3 className="cart--name">{item.name}</h3>
            <p className="cart--price">₹{item.price}</p>
            <p className="cart--detail">Color: {item.color}</p>
            <p className="cart--detail">Size: {item.size}</p>
            <p className="cart--detail">Address: {item.address}</p>

            <div className="cart-button">
              <button  onClick={() => handleBuy(item.id)}>
                Buy
              </button>
              <button  onClick={() => handleRemove(index)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
