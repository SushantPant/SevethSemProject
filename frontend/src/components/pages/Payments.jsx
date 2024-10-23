import React, { useState } from 'react';
import '../CSSForFooter/payments.css';

const Payments = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Payment details submitted:', { cardNumber, cardName, expiryDate, cvv });
    // Reset form or show a success message
  };

  return (
    <div className="payments-container">
      <header className="payments-header">
        <h1>Payment Information</h1>
        <p>Please enter your payment details to complete your purchase.</p>
      </header>

      <form onSubmit={handleSubmit} className="payments-form">
        <label htmlFor="card-number">Card Number</label>
        <input
          type="text"
          id="card-number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter your card number"
          required
        />

        <label htmlFor="card-name">Cardholder Name</label>
        <input
          type="text"
          id="card-name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Enter the name on the card"
          required
        />

        <div className="date-cvv">
          <div>
            <label htmlFor="expiry-date">Expiry Date</label>
            <input
              type="text"
              id="expiry-date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>

          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default Payments;
