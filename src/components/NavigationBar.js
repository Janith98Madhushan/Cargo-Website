import "../css/NavBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div>
          Cargo
          <span>TON</span>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/tracking">Tracking</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="nav-actions">
        <a href="/quote" className="btn">
          Get a Quote
        </a>
        <a href="/sign-in" className="lgbtn">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
