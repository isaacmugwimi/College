import { gallery } from "../../assets/data";
import white_arrow from "../../assets/white-arrow.png";
import "./Campus.css";

export const Campus = () => {
  return (
    <div className="campus nav-container">
      <div className="campus-images">
        {gallery.map((image, index) => (
          <div key={index} className="images-container">
            {" "}
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <button>
        see more here <img src={white_arrow} alt="" className="arrow" />{" "}
      </button>
    </div>
  );
};
