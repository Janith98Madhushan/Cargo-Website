import React from "react";
import Slider from "react-slick";
import img3 from "../assets/images/craetive 2.jpeg";
import img4 from "../assets/images/creative.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/common.css";

const HeaderSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="row">
      <div className="slider-content col-4">
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Georgia",
          }}
        >
          Logistic
        </div>
        <div style={{ fontSize: "40px", fontWeight: "bold" }}>
          Best Shipping
        </div>
        <div
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            color: "#ffcc00",
          }}
        >
          {" "}
          Partner
        </div>
        <p>
          Amet, tempus egestas facilisis volutpat viverra molestie lobortis
          posuere meacenase.molestie posuera maecenase. Eget sapien,gravida
          nequi.
        </p>
        <button>Discover More</button>
      </div>

      <div className="header-slider col-8">
        <Slider {...settings}>
          <div>
            <img src={img3} alt="Slide 1" />
          </div>
          <div>
            <img src={img4} alt="Slide 2" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeaderSlider;
