import React from "react";
import "./faq.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  // Check if faq exists before accessing its properties
  if (!faq) return null;

  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
