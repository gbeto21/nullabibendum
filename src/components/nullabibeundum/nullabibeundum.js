import React from "react";
import PlaceHolers from "../../assets/images/placeholders-background.jpg";
import Billboard1 from "../../assets/images/billboard (1).jpg";
import Billboard2 from "../../assets/images/billboard (2).jpg";
import Billboard3 from "../../assets/images/billboard (3).jpg";
import Billboard4 from "../../assets/images/billboard (4).jpg";
import "./styles.css";

const NullaBibeundum = (props) => {
  return (
    <div>
      <div className="backgroundImageContainer">
        <img
          src={PlaceHolers}
          alt="imgBackground"
          className="backgroundImage"
        />
      </div>
      <div className="imagesContainer">
        <div className="billboard1Container">
          <img
            src={Billboard1}
            alt="billboard1"
            className="billboard billboard1 "
          />
        </div>
        <div className="billboard2Container">
          <img
            src={Billboard2}
            alt="billboard2"
            className="billboard billboard2 "
          />
        </div>
        <div className="billboard3Container">
          <img
            src={Billboard3}
            alt="billboard3"
            className="billboard billboard3 "
          />
        </div>
        <div className="billboard4Container">
          <img
            src={Billboard4}
            alt="billboard4"
            className="billboard billboard4 "
          />
        </div>
      </div>
    </div>
  );
};

export default NullaBibeundum;
