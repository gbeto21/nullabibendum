import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const CarouselItem = ({ movie, imageSource }) => {
  return (
    <div className="itemContainer">
      <Link to={`/${movie.id}`} className="itemContainer">
        <img alt="" src={imageSource} className="imageItem" />
        <div className="detailContainer">
          <h1>{movie.title}</h1>
          <p>{movie.content}</p>
        </div>
      </Link>
    </div>
  );
};

export default CarouselItem;
