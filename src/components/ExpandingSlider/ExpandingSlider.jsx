import React, { useState } from "react";
import images from "../../assets/imagesScripts/expandingImages";
import "./ExpandingSlider.scss";

function ExpandingSlider() {
  const [value, setValue] = useState(0);

  return (
    <>
      {console.log(value)}
      <div className="expanding-wrapper">
        <div class="row">
          {images[value].map((image, index) => (
            <div className="sec">
              <div
                key={index}
                className="frame"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <p>{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="toggle-btns">
          {Array.from({ length: 3 }).map((item, index) => (
            <>
              <div
                key={index}
                className={value === index ? "toggle-btn active" : "toggle-btn"}
                onClick={() => setValue((prevState) => (prevState = index))}
              ></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExpandingSlider;
