import React from "react";
import "../css/Testimonial.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Trusted Clients</h2>
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <div className="testimonial-item">
        <blockquote>
          “Integer congue elit non semper laoreet sed lectus orci posuere nisl
          tempor.”
        </blockquote>
        <p className="author">- John Deo, Managing Director</p>
      </div>
    </div>
  );
};

export default Testimonials;
