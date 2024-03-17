import "./Hero.css";
import rightArrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero .nav-container">
      <div className="hero-text">
        <span>We Ensure Better Education for a Better world </span>
        <span>
          <p>
            {" "}
            our cutting-edge curriculm is designed to empower students with the
            knowledge skills and experience needed to excell in the dynamic
            field of education
          </p>
        </span>
        <div className="explore">
          <span>Explore More</span>
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
