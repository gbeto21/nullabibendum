import React from "react";
import Background from "../../components/background/background";
import HomeComponent from "../../components/home/";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <HomeComponent />
      </div>
    );
  }
}

export default Home;
