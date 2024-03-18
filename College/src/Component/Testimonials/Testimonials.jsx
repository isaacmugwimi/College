import { useState } from "react";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import { testimonies } from "../../assets/testimonials.js";
import "./Testimonials.css";

export const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonies.length;

  const slide_Backward = () => {
    console.log("Slide backward button clicked");
    selected === 0
      ? setSelected(tLength - 1)
      : setSelected((prevState) => {
          const newValue = prevState - 1;
          console.log("New value of selected ", newValue);
          return newValue;
        });
  };

  const slide_Forward = () => {
    console.log("Slide forward button clicked");

    selected === tLength - 1
      ? setSelected(0)
      : setSelected((prevState) => {
          const newValue = prevState + 1;
          console.log(`new value of selected ${newValue}`);
          return newValue;
        });
  };

  return (
    <div className="testimonials ">
      {" "}
      <div className="arrow1">
        <img
          src={back_icon}
          alt=""
          className="backbtn"
          onClick={slide_Backward}
        />
      </div>
      <div className="testimonials-maindiv">
        {/* {testimonies.map((item, index) => ( */}
        <div className="test-Container" key={selected}>
          <div className="testimony-head">
            <img src={testimonies[selected].image} alt="" />
            <div className="testimony-Contacts">
              <span>{testimonies[selected].name}</span>
              <span>{testimonies[selected].location}</span>
            </div>
          </div>
          <span>{testimonies[selected].review}</span>
        </div>
        )
      </div>
      <div className="arrow2">
        {" "}
        <img
          src={next_icon}
          alt=""
          className="nextbtn"
          onClick={slide_Forward}
        />
      </div>
    </div>
  );
};
