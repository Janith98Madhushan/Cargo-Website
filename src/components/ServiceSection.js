import "../css/ServiceSection.css";
import img1 from "../assets/images/cargo ship.jpg";
import img2 from "../assets/images/Cargo-Flight-DFreight.jpg";

const ServiceSection = () => {
  return (
    <div class="main-section">
      <div class="header-section">
        <div className="first-text">Real Solution,Real Fast</div>
        <div className="second-text">Best Global Logistic Solutions</div>
      </div>
      <div class="sub-sections">
        <div class="sub-section-1">
          <img src={img1} alt="cargo ship" />

          <div className="sub-section-container">
            <div className="sub-section-header">Air Freight Service</div>
            <div className="sub-section-text">
              At our Auto Service garage, we are fully appreciate how difficult
              occur it is for people to find.
            </div>
          </div>
        </div>
        <div class="sub-section-2">
          <img src={img2} alt="cargo flight" />
          <div className="sub-section-container">
            <div className="sub-section-header">Drone Services</div>
            <div className="sub-section-text">
              These are unique and often they differ from one industry to the
              others.Our logistics expertise.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
