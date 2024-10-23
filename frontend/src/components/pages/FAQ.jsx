import React, { useState } from 'react';
import '../CSSForFooter/faq.css';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase for a full refund."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries."
    }
    // Add more FAQs as needed
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsequatur aliquid asperiores eligendi exercitationem mollitia minus. Mollitia iste fugit tempora minus soluta minima! </p>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleExpand(index)}
            >
              <h2>{faq.question}</h2>
              <span>{expandedIndex === index ? '-' : '+'}</span>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
