import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const MainButton = ({ content }) => {
  return (
    <button className="mainButton">
      <Link className="linkStyle" to="/nullabibeundum">
        {content}
      </Link>
    </button>
  );
};

export default MainButton;
