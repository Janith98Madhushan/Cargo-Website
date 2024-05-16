import React from "react";
import Testimonials from "./Testimonials";
import "../css/TestimonialSection.css"; // For styling the layout
import WhyChooseUsSection from "./WhyChoseUsSection";

const TestimonialSection = () => {
  return (
    <div className="section-container">
      <Testimonials />
      <WhyChooseUsSection />
    </div>
  );
};

export default TestimonialSection;
