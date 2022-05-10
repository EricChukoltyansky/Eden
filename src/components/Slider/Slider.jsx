import React, { useState } from "react";
import images from "./images";
import "./Slider.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BtnSlider from "../BtnSlider/BtnSlider";

function Slider() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevState) => (prevState += 1));
    console.log(value);
    console.log(images.length);
    if (value >= images.length - 1) setValue((prevState) => (prevState = 0));
  };

  const decrement = () => {
    setValue((prevState) => (prevState -= 1));
    if (value <= 0) setValue((prevState) => (prevState = images.length - 1));
  };

  return (
    <>
      <div className="container">
        <div className="slider">
          <div className="image-container">
            <div className="titles">
              <h2>{images[value].title}</h2>
              <h4>{images[value].subtitle}</h4>
              <p>{images[value].description}</p>
            </div>
            <img src={images[value].src} alt={images[value].alt} />
          </div>
        </div>
        <div className="bottom-slider">
          <span className="bottom-title">{images[value].alt}</span>
          <span className="buttons">
            <button onClick={decrement}>
              <FiChevronLeft />
            </button>
            <button onClick={increment}>
              <FiChevronRight />
            </button>
          </span>
        </div>
        <div className="sliding-btns"></div>
        <BtnSlider />
        <BtnSlider />
        <BtnSlider />
        <BtnSlider />
        <BtnSlider />
      </div>
    </>
  );
}

export default Slider;
