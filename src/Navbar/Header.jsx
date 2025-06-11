import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
     
          <span>TT Shirts</span>
       
      </div>

      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <Link to='/' className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/shop" className="nav-link" onClick={closeMenu}>Products</Link>
         <Link to="/cart" className="nav-link" onClick={closeMenu}>Cart</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
      </nav>
    
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
    </header>
  );
};

export default Header;
