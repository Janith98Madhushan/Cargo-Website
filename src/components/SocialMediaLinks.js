/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/SocialMediaLinks.css";
import fb from "../assets/images/fb.png";
import twitter from "../assets/images/twitter.png";
import behance from "../assets/images/behance.jpg";
import whatsapp from "../assets/images/whatsapp.jpg";

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <p>Copyright © 2021 All Rights Reserved. Site By Xiteb®</p>
      <div>
        <a href="#">
          <i className="icon-facebook">
            <img src={fb} alt="fb" />
          </i>
        </a>
        <a href="#">
          <i className="icon-twitter">
            <img src={twitter} alt="twitter" />
          </i>
        </a>
        <a href="#">
          <i className="icon-behance">
            <img src={behance} alt="behance" />
          </i>
        </a>
        <a href="#">
          <i className="icon-whatsapp">
            <img src={whatsapp} alt="whatsapp" />
          </i>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
