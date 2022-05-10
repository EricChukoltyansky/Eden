import React from "react";
import images from "../../assets/imagesScripts/expandingImages";
import "./ExpandingSlider.scss";

function ExpandingSlider() {
  return (
    <>
      <div className="expanding-wrapper">
        <div class="row">
          {images.map((image, index) => (
            <div class="sec">
              <div
                key={index}
                className="frame"
                style={{ backgroundImage: `url(${image.src})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExpandingSlider;
