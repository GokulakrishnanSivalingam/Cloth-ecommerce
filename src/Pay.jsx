import React, { useState, useEffect } from 'react';
import './Pay.css';
import Data from './Data.jsx';
import { useParams, useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Header from './Navbar/Header.jsx';
// Load Stripe publishable key
const stripePromise = loadStripe('pk_test_51PxQjW056OrOiO33g3VCt1pVOaHc9GFlVEGv43n4MvAjGN1VyrBwhoihVElCojSGfKVuzYUdaoHpl9IPDUNJ2IKN0014BIx4tB'); // Replace with your key

function Pay() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');
  const [pinError, setPinError] = useState('');
  const [nameError, setNameError] = useState('');
  const [pin, setPin] = useState('');
  const [numberError, setNumberError] = useState("");
  const location = useLocation();
  const shirt = Data.find(shirt => shirt.id === parseInt(id));
  const { address, selectedColor, selectedSize } = location.state || {};

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.width = '95vw';
    return () => {
      document.body.style.width = '';
    };
  }, []);

  const validateForm = () => {
    let isValid = true;

    if (state === '') {
      setNameError("Please fill the field");
      isValid = false;
    } else {
      setNameError('');
    }

    if (number === '') {
      setNumberError("Please fill the field");
      isValid = false;
    } else if (number.length !== 10) {
      setNumberError("Please enter a 10-digit number");
      isValid = false;
    } else {
      setNumberError('');
    }

    if (email === '') {
      setEmailError("Please fill the field");
      isValid = false;
    } else {
      setEmailError('');
    }

    if (pin === '') {
      setPinError("Please fill the field");
      isValid = false;
    } else {
      setPinError('');
    }

    return isValid;
  };

  const handleStripePayment = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Call backend to create Stripe Checkout session
      const response = await fetch('https://cloth-ecommerce-ixdm.onrender.com/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          amount: shirt.price * 100, // in paise
          productName: shirt.name,
        }),
      });

      const data = await response.json();

      if (!data.id) {
        alert('Failed to create checkout session.');
        return;
      }

      const stripe = await stripePromise;

      // Redirect to Stripe Checkout with session ID from backend
      const result = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div>
      
<Header/>
      <div className="pay-container">
        <div className="pay-con">
          <div className="pay-img">
            <img src={shirt.image} alt={shirt.name} />
          </div>  
          <div className="pay-info">
            <p>{shirt.name}</p>
            <h3>&#8377;{shirt.price}</h3>
          </div>
        </div>

        <div className="pay-details">
          <h1>Details</h1>
          <p>Address: {address}</p>
          <p>Color: {selectedColor}</p>
          <p>Size: {selectedSize}</p>
        </div>
      </div>

      <form onSubmit={handleStripePayment}>
        <center>
          <div className="address">
            <div className="add-con1">
              <input
                type="text"
                placeholder="Enter your name"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <div className="error" align="left"><p>{nameError}</p></div>  
              <input
                type="number"
                placeholder="Enter your number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <div className="error" align="left"><p>{numberError}</p></div>
            </div>
            <div className="add-con2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="error" align="left"><p>{emailError}</p></div>
              <input
                type="text"
                placeholder="Enter your pincode (optional)"
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <div className="error" align="left"><p>{pinError}</p></div>
            </div>
          </div>
          <div className="buys">
            <button type="submit">Proceed to Pay</button>
          </div>
        </center>
      </form>
    </div>
  );
}

export default Pay;
