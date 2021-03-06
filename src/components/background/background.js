import React from "react";
import BackgroundImage from "../../assets/images/background.jpg";
import "./styles.css";

const background = (props) => {
  return (
    <div className="backgroundImageContainer">
      <img
        src={BackgroundImage}
        alt="imgBackground"
        className="backgroundImage"
      />
    </div>
  );
};

export default background;
