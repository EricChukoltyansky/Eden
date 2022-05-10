import React from "react";
import images from "../../assets/imagesScripts/gridImages";
import "./Artwork.scss";

function Artwork() {
  return (
    <>
      <div className="grid-wrapper">
        {images.map((image, index) => (
          <div className="card-image">
            <div
              key={index}
              className="grid-image"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
            <div className="grid-image-title">
              <div className="grid-title">{image.title}</div>
              <p className="grid-subtitle">{image.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Artwork;
