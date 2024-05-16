import React from "react";
import "../css/Footer.css";
import AboutUs from "./AboutUs";
import Newsletter from "./Newsletter";
import LatestNews from "./LatestNews";
import CustomerService from "./CustomerService";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <Newsletter />
      <div className="footer-content">
        <AboutUs className="col-4" />
        <LatestNews className="col-4" />
        <CustomerService className="col-4" />
      </div>
      <SocialMediaLinks />
    </footer>
  );
};

export default Footer;
