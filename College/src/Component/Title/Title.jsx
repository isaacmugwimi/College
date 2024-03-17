import "./Title.css";
import PopTypes from "prop-types";
export const Title = (props) => {
  return (
    <div className="title">
      <span>{props.subTitle}</span>
      <span>{props.title}</span>
    </div>
  );
};

Title.propTypes = {
    subTitle:PopTypes.string,
    title:PopTypes.string,
};
