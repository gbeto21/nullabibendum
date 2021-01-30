import React from "react";
import "./styles.css";
import Button from "../mainButton";
import CarrouselComponent from "../carousel";

class Home extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div>
          <h1 className="title">Lorem Ipsum.</h1>
          <h4 className="subTitle">Consectetur adipiscing elit</h4>
        </div>
        <div>
          <Button content="Nulla bibendum" />
        </div>
        <CarrouselComponent />
      </div>
    );
  }
}

export default Home;
