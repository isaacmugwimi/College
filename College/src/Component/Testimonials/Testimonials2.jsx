import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import { testimonies } from "../../assets/testimonials.js";
import "./Testimonials2.css";

export const Testimonials2 = () => {
  return (
    <div className="testimonials ">
      {" "}
      <div className="arrow1">
        <img src={back_icon} alt="" className="backbtn" />
      </div>
      <div className="testimonials-maindiv">
        {testimonies.map((item, index) => (
          <div className="test-Container" key={index}>
            <div className="testimony-head">
              <img src={item.image} alt="" />
              <div className="testimony-Contacts">
                <span>{item.name}</span>
                <span>{item.location}</span>
              </div>
            </div>
            <span className="review">{item.review}</span>
          </div>
        ))}
      </div>
      <div className="arrow2">
        {" "}
        <img src={next_icon} alt="" className="nextbtn" />
      </div>
    </div>
  );
};
