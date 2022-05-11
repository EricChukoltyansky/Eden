import React from "react";
import "./Editorial.scss";
import images from "../../assets/imagesScripts/editorialImages";

function Editorial() {
  return (
    <>
      <div className="editorial-container">
        <h3>Editorial</h3>
        <div className="editorial-wrapper">
          {images.map((image, index) => (
            <div>
              <div key={index} className="editorial-item">
                <div className="editorial-title">
                  <h2>{image.title}</h2>
                  <h4>{image.subtitle}</h4>
                  <h5>{image.date}</h5>
                </div>
                <img src={image.src} alt={image.alt} />
                <p>{image.description}</p>
                <div className="read-btn">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="edit-btn">Read More</button>
      </div>
    </>
  );
}

export default Editorial;
