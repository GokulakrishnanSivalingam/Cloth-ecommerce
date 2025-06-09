import React from 'react';
import './Landing.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Header from '../Navbar/Header';

const Landipage = () => {
  return (
    <>
    <Header></Header>
      {/* Hero Section */}
      <section className="landi-cont">
        <div className="landi-cont-content">
          <p className="landi-cont-subtitle">Welcome to TTShirts</p>
          <h1 className="landi-cont-title">
            Style that <span>Speaks</span> for You
          </h1>
          <p className="landi-cont-desc">
            Discover the trendiest collection of shirts — crafted with care, styled for flair.
          </p>
          <Link to="/shop" className="landi-cont-btn">
            Shop Now
          </Link>
        </div>
        <div className="landi-cont-img">
          <img
            src="https://i.pinimg.com/originals/f7/fc/49/f7fc49fc38eae6e84c97537e81f52876.gif"
            alt="Shirt Showcase"
          />
        </div>
      </section>

      {/* Featured Section */}
      <section className="landi-feature">
        <h2>Why Choose <span>TT Shirts</span>?</h2>
        <div className="landi-feature-grid">
          <div className="feature-card">
            <h3>Premium Fabric</h3>
            <p>We use the finest cotton and linen for unmatched comfort and durability.</p>
          </div>
          <div className="feature-card">
            <h3>Perfect Fit</h3>
            <p>Our modern cuts are tailored to suit every body type and occasion.</p>
          </div>
          <div className="feature-card">
            <h3>Affordable Prices</h3>
            <p>Look classy without breaking the bank — elegance that’s budget-friendly.</p>
          </div>
        </div>
      </section>

      {/* Category Highlight */}
      <section className="landi-categories">
        <h2>Explore Our <span>Collections</span></h2>
        <div className="category-grid">
          <div className="cat-card">
            <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246" alt="Formal Shirt" />
            <h4>Formal Shirts</h4>
          </div>
          <div className="cat-card">
            <img src="https://i.pinimg.com/736x/ae/fc/53/aefc53c3411f8c8fe630b70d59da1aca.jpg" alt="Casual Shirt" />
            <h4>Casual Shirts</h4>
          </div>
          <div className="cat-card">
            <img src="https://i.pinimg.com/736x/64/13/ee/6413ee442d65f2884fe79c4938135ee7.jpg" alt="Party Shirt" />
            <h4>Party Wear</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      <Footer />
    </>
  );
};

export default Landipage;
