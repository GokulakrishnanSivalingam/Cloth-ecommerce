import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <span>TT Shirts</span>
        </div>
        {/* Desktop Search */}
        <div className="header--search-desktop">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="header--search"
          />
        </div>
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to='/' className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/shop" className="nav-link" onClick={closeMenu}>Products</Link>
          <Link to="/cart" className="nav-link" onClick={closeMenu}>Cart</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        </nav>

        

        {/* Mobile Icons */}
        <div className="header--right-icons">
          <button className="header--search-toggle" onClick={() => setShowSearch(prev => !prev)}>
            🔍
          </button>
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </header>

      {/* Mobile search box */}
      {showSearch && (
        <div className="header--search-box-mobile">
          <input
            type="text"
            className="header--search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
    </>
  );
};

export default Header;
