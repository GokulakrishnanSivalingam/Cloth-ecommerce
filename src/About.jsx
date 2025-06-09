import React from 'react';
import './About.css';
import Header from './Navbar/Header'
import Footer from './Footer';

const About = () => {
  return (
    <div>
      
    <div className="about-cont">
      <div className="about-cont-hero">
        <h1 className="about-cont-title">About <span>TT Shirts</span></h1>
        <p className="about-cont-subtitle">
          Where style meets comfort — wear your vibe with TT Shirts.
        </p>
      </div>

      <div className="about-cont-content">
        <div className="about-cont-text">
          <h2 className="about-bar-heading">Our Story</h2>
          <p className="about-bar-desc">
            Founded in 2024, TT Shirts began with a simple vision — make high-quality, stylish t-shirts accessible to everyone. Whether you're looking for casual comfort or a bold fashion statement, we’ve got something just for you.
          </p>
          <p className="about-bar-desc">
            Our collections are inspired by urban culture, minimalist designs, and premium fabric quality. We believe fashion is not just what you wear — it's how you express yourself.
          </p>
        </div>

        <div className="about-cont-image">
          <img src="https://i.pinimg.com/originals/fe/c6/a4/fec6a4c623224f1a0fadeb7ff22a0934.gif" alt="Shirts display" />
        </div>
      </div>

      <div className="about-cont-values">
        <div className="about-bar-value">
          <h3>👕 Premium Fabric</h3>
          <p>Soft, breathable & long-lasting materials.</p>
        </div>
        <div className="about-bar-value">
          <h3>🎨 Unique Designs</h3>
          <p>Stand out with fresh, original graphics.</p>
        </div>
        <div className="about-bar-value">
          <h3>🌍 Eco-Friendly</h3>
          <p>We care for the planet — sustainable practices in every stitch.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
