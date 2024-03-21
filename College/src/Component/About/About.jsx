import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";
import PropTypes from "prop-types";

export const About = ({ setPlayState }) => {
  const playVideo = () => {setPlayState(true)};
  return (
    <div className="about nav-container">
      <div className="about-left">
        <img src={about_img} alt="" className="image1" onClick={playVideo} />

        <img src={play_icon} alt="" className="image2" onClick={playVideo} />
      </div>
      <div className="about-right">
        <span>About university</span>
        <span>Nurturing tomorrow&apos;s leaders today</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto
          distinctio, animi quos magnam harum dolore ratione repudiandae,
          quisquam inventore consectetur? Atque illo libero assumenda iure
          voluptatibus dolores debitis doloremque obcaecati ipsam, mollitia, et
          sint consectetur officiis ullam magni molestias
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque
          modi excepturi est, necessitatibus laborum aut suscipit saepe,
          quisquam blanditiis commodi minima laudantium beatae, maiores earum
          odio quae officiis et.
        </span>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          excepturi assumenda, ullam, veniam obcaecati iste eligendi accusantium
          expedita ducimus dolorum, reiciendis omnis? Sapiente ex cumque labore
          accusantium a!
        </span>
      </div>
    </div>
  );
};
About.propTypes = {
  setPlayState: PropTypes.bool,
};
