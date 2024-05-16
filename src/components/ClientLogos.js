import React from "react";
import "../css/ClientLogos.css";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/img2.jpg";
import logo3 from "../assets/images/img3.png";
import logo4 from "../assets/images/img4.png";
import logo5 from "../assets/images/img5.jpeg";

const ClientLogos = () => {
  const logos = [
    { id: 1, name: "Hermes", src: logo1 },
    { id: 2, name: "Balenciaga", src: logo2 },
    { id: 3, name: "Givenchy", src: logo3 },
    { id: 4, name: "Chanel", src: logo4 },
    { id: 5, name: "Versace", src: logo5 },
  ];

  return (
    <div className="client-logos">
      {logos.map((logo) => (
        <div key={logo.id} className="logo-item">
          <img src={logo.src} alt={logo.name} />
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;
