import { useState } from "react";
import location_icon from "../../assets/location-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import message_icon from "../../assets/msg-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import white_arrow_icon from "../../assets/white-arrow.png";

import "./Contact.css";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9cfaaad-1342-424f-8bdf-011516147439");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact nav-container">
      <div className="contact-left">
        <div className="contact-left-header">
          <span>Send us a message</span>
          <img src={message_icon} alt="" />
        </div>
        <span className="contact-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          expedita recusandae nihil beatae odio inventore amet officiis
          consequuntur enim, tenetur atque perspiciatis itaque? Debitis,
          
        </span>
        <div className="email-container">
          <img src={mail_icon} alt="" />
          <span>developerisaac92@gmail.com</span>
        </div>
        <div className="email-container">
          <img src={phone_icon} alt="" />
          <span>+254757810818</span>
        </div>
        <div className="email-container">
          <img src={location_icon} alt="" />
          <span>Kutus,Kirinyaga County, Kenya</span>
        </div>
      </div>
      <div className="contact-right">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <br />
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
          />
          <br />
          <label htmlFor="">Your phone number</label>
          <br />
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Enter your phone number"
            required
          />
          <br />
          <label htmlFor="">Write your message here</label> <br />
          <textarea
            name="message"
            id=""
            rows="4"
            placeholder="Enter your message "
            required
            cols="45"
          ></textarea>
          <br />
          <div className="button-div">
            <button>
              Submit now <img src={white_arrow_icon} alt="" />
            </button>
            <button
              type="reset"
              onClick={() => {
                // event.target.reset();
                setResult("");
              }}
            >
              Reset
            </button>
          </div>
        </form>
        <span className="sending-message">{result}</span>
      </div>
    </div>
  );
};
