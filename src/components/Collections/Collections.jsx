import React from "react";
// import images from "../../assets/imagesScripts/collectionsImages";
import "./Collections.scss";

function Collections() {
  return (
    <>
      {/* <div className="collections-container">
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
      </div> */}

      <div className="collection-container">
        <h3>Collections</h3>
        <div className="collection-wrapper">
          <div className="left-img coll-img">
            <h2>Painting</h2>
            <h4>
              Explore Eden Gallery's collection of acrylic, oil and graffiti
              paintings
            </h4>
            <button>Explore</button>
          </div>
          <div className="right-img coll-img">
            <h2>Sculptures</h2>
            <h4>
              Explore Eden Gallery's collection of unique free-standing
              sculptures
            </h4>
            <button>Explore</button>
          </div>
        </div>
        <button className="explore-btn">Explore all Collections</button>
      </div>
    </>
  );
}

export default Collections;
