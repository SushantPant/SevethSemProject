import React from 'react';
import '../CSSForFooter/corprate.css'

const Corprate = () => {
  return (
    <div className="corporate-container">
      <header className="corporate-header">
        <h1>About Shopease</h1>
        <p>Your trusted partner in e-commerce solutions, empowering businesses worldwide.</p>
      </header>

      <section className="corporate-section">
        <h2>Mission Statement</h2>
        <p>Our mission is to make shopping easy and accessible for everyone by offering top-notch technology, exceptional customer service, and innovative e-commerce solutions.</p>
      </section>

      <section className="corporate-section">
        <h2>Vision</h2>
        <p>To become the world’s leading e-commerce platform, revolutionizing the way people shop and businesses operate online.</p>
      </section>

      <section className="corporate-leadership">
        <h2>Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member">
          <img src="/image/san.jpg" alt="CEO" />
            <h3>Sanjay Tripathi</h3>
            <p>Co-Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/image/sus.png" alt="CTO" />
            <h3>Sushant Pant</h3>
            <p>Co-Founder & CTO</p>
          </div>
          <div className="team-member">
          <img src="/image/ram.jpg" alt="CEO" />
            <h3>Ram Timelsina</h3>
            <p>Co-Founder & COO</p>
          </div>
        </div>
      </section>

      <section className="corporate-values">
        <h2>Our Core Values</h2>
        <ul className="values-list">
          <li><strong>Innovation:</strong> We are committed to driving innovation in the e-commerce industry.</li>
          <li><strong>Integrity:</strong> We operate with integrity, ensuring transparency and honesty in all our dealings.</li>
          <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
          <li><strong>Excellence:</strong> We strive for excellence in every aspect of our business.</li>
        </ul>
      </section>

      <footer className="corporate-footer">
        <p>&copy; 2024 Shopease. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Corprate;
