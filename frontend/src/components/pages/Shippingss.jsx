import React, { useState } from 'react';
import '../CSSForFooter/shoppingss.css';

const Shippingss = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Shipping details submitted:', { address, city, state, zip, country, shippingMethod });
    // Reset form or show a success message
  };

  return (
    <div className="shipping-container">
      <header className="shipping-header">
        <h1>Shipping Information</h1>
        <p>Please provide your shipping details to complete your order.</p>
      </header>

      <form onSubmit={handleSubmit} className="shipping-form">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city"
          required
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter your state"
          required
        />

        <label htmlFor="zip">Zip Code</label>
        <input
          type="text"
          id="zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Enter your zip code"
          required
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter your country"
          required
        />

        <label htmlFor="shipping-method">Shipping Method</label>
        <select
          id="shipping-method"
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
          required
        >
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
          <option value="overnight">Overnight Shipping</option>
        </select>

        <button type="submit" className="submit-btn">Save Shipping Details</button>
      </form>
    </div>
  );
};

export default Shippingss;
