import React from "react";
import "../css/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Weekly Newsletter</h2>
      <p>There are many variations of passages of lorem ipsum available.</p>
      <input type="email" placeholder="Enter Your Mail" />
      <button>Subscribe</button>
    </div>
  );
};

export default Newsletter;
