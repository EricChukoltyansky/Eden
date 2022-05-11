import React from "react";
import images from "../../assets/imagesScripts/collectionsImages";
import "./Collections.scss";

function Collections() {
  return (
    <>
      <div className="collections-container">
        <h3>Collections</h3>
        <div className="collections-wrapper">
          {images.map((image, index) => (
            <div key={index} className="collection-item">
              <img src={image.src} alt={image.alt} />
              <div className="collection-title">
                <h2>{image.title}</h2>
                <h4>{image.subtitle}</h4>
                <button>{image.button}</button>
              </div>
            </div>
          ))}
        </div>
        <button className="explore-btn">Explore all Collections</button>
      </div>
    </>
  );
}

export default Collections;
