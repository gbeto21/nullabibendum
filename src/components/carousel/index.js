import React from "react";
import CarouselItem from "../carouselItem";
import Image1 from "../../assets/images/thumbnail (1).jpg";
import Image2 from "../../assets/images/thumbnail (2).jpg";
import Image3 from "../../assets/images/thumbnail (3).jpg";
import "./styles.css";

const title1 = "Nullam ac tortor et sem faucibus aliquam";
const description1 =
  "Nunc tempus commodo felis, et varius turpis placerat quis. In luctus nulla nisi, faucibus eleifend sapien condimentum ac";

const title2 = "Integer scelerisque, risus sit amet rhoncus rutrum";
const description2 =
  "ellentesque at velit et nunc gravida suscipit sit amet quis tortor. Fusce arcu tortor, convallis lacinia laoreet sed, dictum at magna";

const title3 = "Sed vestibulum turpis sit amet sem dapibus";
const description3 =
  "non dapibus elit interdum. Duis commodo arcu ante, at accumsan quam pulvinar nec. Etiam et justo vel turpis pharetra porta nec id velit";

const CarouselComponent = () => {
  return (
    <div className="carouselContainer">
      <CarouselItem
        title={title1}
        description={description1}
        imageSource={Image1}
      />
      <CarouselItem
        title={title2}
        description={description2}
        imageSource={Image2}
      />
      <CarouselItem
        title={title3}
        description={description3}
        imageSource={Image3}
      />
    </div>
  );
};

export default CarouselComponent;
