import ClientLogos from "./components/ClientLogos";
import Footer from "./components/Footer";
import HeaderSlider from "./components/HeaderSlider";
import NavigationBar from "./components/NavigationBar";
import NewsSection from "./components/NewsSection";
import ServiceSection from "./components/ServiceSection";
import StatsSection from "./components/StatSection";
import TestimonialSection from "./components/TestimonialSection";
import WelcomeSection from "./components/WelcomeSection";
import "./css/common.css";

function App() {
  return (
    <div className="background-main">
      <NavigationBar />
      <HeaderSlider />
      <WelcomeSection />
      <ServiceSection />
      <StatsSection />
      <TestimonialSection />
      <ClientLogos />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
