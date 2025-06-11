import React, { useState, useEffect } from 'react';
import './App.css';
import { FaStar } from "react-icons/fa";
import Data from './Data.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Header from './Navbar/Header1.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // ✅ Search state

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Filter data based on search term
  const filteredShirts = Data.filter(shirt =>
    shirt.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="container">
        {filteredShirts.length > 0 ? (
          filteredShirts.map((shirt) => (
            <div key={shirt.id} className='shirt-con' data-aos="fade-up" id="shirt">
              <Link to={`/buy/${shirt.id}`}><img src={shirt.image} alt={shirt.name} /></Link>
              <p>{shirt.name}</p>
              <h3>&#8377;{shirt.price}</h3>
              <span><FaStar /> {shirt.rating}</span>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;
