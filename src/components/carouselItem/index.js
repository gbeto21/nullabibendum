import React from "react";
import "./styles.css";

const CarouselItem = ({ imageSource, title, description }) => {
  return (
    <div className="itemContainer">
      <img alt="" src={imageSource} className="imageItem" />
      <div className="detailContainer">
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default CarouselItem;
