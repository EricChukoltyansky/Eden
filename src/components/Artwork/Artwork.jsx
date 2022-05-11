import React from "react";
import images from "../../assets/imagesScripts/gridImages";
import "./Artwork.scss";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";

function Artwork() {
  const [color, setColor] = React.useState("black");

  const handleClick = () => {
    if (color === "black") {
      setColor("red");
    }
    if (color === "red") {
      setColor("black");
    }
  };
  return (
    <>
      <div className="artwork-wrapper">
        <h3>Artworks</h3>
        <div className="grid-wrapper">
          {images.map((image, index) => (
            <div className="card-image">
              <AiOutlineHeart
                className="heart-symbol-card"
                onClick={handleClick}
                style={{ color: color }}
              />
              <div
                key={index}
                className="grid-image"
                style={{ backgroundImage: `url(${image.src})` }}
              ></div>
              <div className="grid-image-title">
                <div>
                  <p className="grid-title">{image.title}</p>
                  <p className="grid-subtitle">{image.subtitle}</p>
                </div>
                <div>
                  <AiOutlineUpload className="upload-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="explore-btn">Explore Artworks</button>
      </div>
    </>
  );
}

export default Artwork;
