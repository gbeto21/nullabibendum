import React from "react";
import "./styles.css";

const itemDetails = ({ movie }) => {
  return (
    <div className="itemDetailsContainer">
      <h3 className="title">{movie.title}</h3>
      <iframe
        className="video"
        title={movie.title}
        width="560"
        height="315"
        src={movie.video}
      />
      <p className="content">{movie.content}</p>
    </div>
  );
};

export default itemDetails;
