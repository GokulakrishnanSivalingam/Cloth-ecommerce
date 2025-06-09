import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-cont">
      <div className="footer-cont-top">
        <div className="footer-cont-brand">
          <h2 className="footer-cont-logo">TT <span>Shirts</span></h2>
          <p>Wear your attitude with style. Premium shirts delivered at your door.</p>
        </div>

        <div className="footer-cont-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-cont-contact">
          <h3>Contact Us</h3>
          <p>📍 Chennai, India</p>
          <p>📞 +91 9876543210</p>
          <p>📧 support@ttshirts.com</p>
          <div className="footer-cont-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-cont-bottom">
        <p>&copy; {new Date().getFullYear()} TT Shirts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
