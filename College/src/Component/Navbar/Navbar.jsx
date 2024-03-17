import { useEffect, useState } from "react";
import logo1 from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    // trying
    <div>
      <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo1} alt="" className="nav-logo" />
        <ul>
          <li>Home</li>
          <li>Pogram</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>
            <button className="btn">Contact us</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
