import React, { useState } from "react";
import images from "./images";
import "./Slider.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BtnSlider from "../BtnSlider/BtnSlider";

function Slider() {
  const [value, setValue] = useState(0);

  console.log(value);

  const increment = () => {
    setValue((prevState) => (prevState += 1));
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
            <div className="img-titles">
              <div className="title-wrapper">
                <h2>{images[value].title}</h2>
                <h4>{images[value].subtitle}</h4>
                <p>{images[value].description}</p>
              </div>
              <button>{images[value].button}</button>
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
        <div className="sliding-btns">
          {Array.from({ length: 5 }).map((index) => (
            <>
              {/* <BtnSlider key={index} direction={index} moveSlide={increment} /> */}
              <div
                key={index}
                className={
                  value === index ? "sliding-btn active" : "sliding-btn"
                }
              ></div>
            </>
          ))}
        </div>
        <button className="discover-btn">Discover Our Galleries</button>
      </div>
    </>
  );
}

export default Slider;
