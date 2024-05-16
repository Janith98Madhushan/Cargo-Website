import welcomeimg from "../assets/images/welcome image.png";
import "../css/WelcomeSection.css"

const WelcomeSection = () =>{
    return (
        <div className="welcome-section">
          <div className="images-section">
            <img src={welcomeimg} alt="Logistics" className="main-image" />
          </div>
          <div className="content-section">
            <h1>TransMax Logistics</h1>
            <h2>Around the World</h2>
            <p>Transmax is the world's driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
            <p>Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.</p>
            <div className="client-count">
              15,350+ Clients Worldwide
            </div>
            <button className="more-button">MORE ABOUT US</button>
          </div>
        </div>
      );
} 

export default WelcomeSection;