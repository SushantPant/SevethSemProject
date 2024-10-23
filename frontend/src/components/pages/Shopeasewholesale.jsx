import React from 'react';
import '../CSSForFooter/shopeaseWholesale.css';

const Shopeasewholesale = () => {
  return (
    <div className="wholesale-container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum impedit consequuntur voluptatem et at praesentium corrupti ipsa obcaecati nesciunt illum?</p>
      <header className="wholesale-header">
        <h1>Welcome to Shopease Wholesale</h1>
        <p>Your trusted partner for bulk purchasing and business solutions.</p>
      </header>

      <section className="wholesale-benefits">
        <h2>Why Choose Shopease Wholesale?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Competitive Pricing</h3>
            <p>We offer exclusive wholesale prices to ensure you get the best deals on bulk purchases.</p>
          </div>
          <div className="benefit-card">
            <h3>High-Quality Products</h3>
            <p>All products are sourced directly from trusted manufacturers to ensure top-tier quality.</p>
          </div>
          <div className="benefit-card">
            <h3>Custom Orders</h3>
            <p>Looking for something specific? We offer custom orders tailored to your business needs.</p>
          </div>
          <div className="benefit-card">
            <h3>Fast & Reliable Shipping</h3>
            <p>Our logistics network ensures timely delivery so you can keep your business running smoothly.</p>
          </div>
        </div>
      </section>

      <section className="wholesale-steps">
        <h2>How to Get Started</h2>
        <ol className="steps-list">
          <li>Sign up for a wholesale account by filling out the form below.</li>
          <li>Browse our exclusive wholesale catalog.</li>
          <li>Place your order and enjoy our bulk pricing.</li>
        </ol>
      </section>

      <section className="wholesale-signup">
        <h2>Sign Up for a Wholesale Account</h2>
        <form className="signup-form">
          <label htmlFor="name">Business Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your business name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Tell Us About Your Needs</label>
          <textarea id="message" name="message" placeholder="What are you looking for?" required></textarea>

          <button type="submit" className="signup-btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Shopeasewholesale;
