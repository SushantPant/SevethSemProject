import React from 'react';
import '../CSSForFooter/sitemap.css'

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae est sed enim doloremque! Voluptas distinctio aliquid voluptatem cumque, sit placeat!</div>
      <h1 className="title">Sitemap</h1>
      <p className="description">Below is a list of the main pages available on our website.</p>
      
      <ul className="sitemap-list">
        <li><a href="/">Home</a></li>
        <li><a href="/Aboutus">About Us</a></li>
        <li><a href="/Shippingss">Shipping</a></li>
        <li><a href="/Payments">Payment</a></li>
        <li><a href="/contactus">Contact Us</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/Terms">Terms of Use</a></li>
        <li><a href="/ReturnPolicy">Return Policy</a></li>
        <li><a href="/EPR">EPR Complains</a></li>
        <li><a href="/FAQ">FAQ</a></li>
      </ul>
    </div>
  );
}

export default Sitemap;
