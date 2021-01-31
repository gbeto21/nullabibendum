import React from "react";
import CarouselItem from "../carouselItem";
import Image1 from "../../assets/images/thumbnail (1).jpg";
import Image2 from "../../assets/images/thumbnail (2).jpg";
import Image3 from "../../assets/images/thumbnail (3).jpg";
import "./styles.css";
import movies from "../../data/data.json";

const CarouselComponent = () => {
  return (
    <div className="carouselContainer">
      <CarouselItem movie={movies[0]} imageSource={Image1} />
      <CarouselItem movie={movies[1]} imageSource={Image2} />
      <CarouselItem movie={movies[2]} imageSource={Image3} />
    </div>
  );
};

export default CarouselComponent;
