import React, { useState } from 'react';
import '../CSSForFooter/canclenation.css';

const Cancellation = () => {
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // For example, send data to an API or update the state
    setStatus('Request submitted successfully.');
  };

  return (
    <div className="cancellation-return-container">
      <p>Lorem ipsum dohgjhjhjhjhvjhhjhhhhhhhhhhjjjjjjj Temporibus quaerat natus rerum, veniam itaque excepturi.</p>
      <h1>Cancel or Return Your Order</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="order-id">Order ID:</label>
          <input
            type="text"
            id="order-id"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason for Cancellation/Return:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Request</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Cancellation;
