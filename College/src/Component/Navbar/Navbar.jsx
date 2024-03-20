import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo1 from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  //this lines use to ensure that the navbar is changing the background when you scroll down
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  // this line is used to set the nav menu in mobile form
  const mobile = window.innerWidth <= 750 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(true);
  };

  // this line checks if the user clicks outside the navbar, if so it should close the nav menu
  useEffect(() => {
    const handlesClickOutside = () => {
      if (!event.target.closest(".nav-container")) {
        setMenuOpened(false);
      }
    };
    document.addEventListener("mousedown", handlesClickOutside);
    return () => {
      document.removeEventListener("mousedown", handlesClickOutside);
    };
  }, []);

  return (
    // trying
    <div>
      <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo1} alt="" className="nav-logo" />

        {menuOpened === false && mobile === true ? (
          <img
            className="hamburger-icon"
            src={menu_icon}
            alt=""
            onClick={toggleMenu}
          />
        ) : (
          <ul>
            <li>
              {" "}
              <Link
                to="hero"
                offset={0}
                smooth={true}
                activeClass="active"
                duration={500}
                onClick={() => {
                  setMenuOpened(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="programs"
                offset={-200}
                smooth={true}
                activeClass="active"
                duration={500}
                onClick={() => {
                  setMenuOpened(false);
                }}
              >
                Pograms
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="about"
                offset={-200}
                smooth={true}
                activeClass="active"
                duration={500}
                onClick={() => {
                  setMenuOpened(false);
                }}
              >
                About us{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="campus"
                offset={-200}
                smooth={true}
                activeClass="active"
                duration={500}
                onClick={() => {
                  setMenuOpened(false);
                }}
              >
                Campus
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="testimonials"
                offset={-200}
                smooth={true}
                activeClass="active"
                duration={500}
                onClick={() => {
                  setMenuOpened(false);
                }}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                offset={-200}
                duration={500}
                smooth={true}
                onClick={() => {
                  setMenuOpened(false);
                }}
              >
                {" "}
                <button className="btn">Contact us</button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
