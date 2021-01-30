import React from "react";
import "./styles.css";
import Button from "../mainButton";

class Home extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div>
          <h1>Lorem Ipsum.</h1>
          <h4>Consectetur adipiscing elit</h4>
        </div>
        <div>
          <Button content="Nulla bibendum" />
        </div>
        <div>Carroucel component.</div>
      </div>
    );
  }
}

export default Home;
