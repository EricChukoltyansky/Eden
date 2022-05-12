import React, { useEffect, useState } from "react";
import collectionImages from "../../assets/imagesScripts/mobileCollectionImages";
import "./Collections.scss";

function Collections() {
  const [value, setValue] = useState(0);

  console.log(value);

  const increment = () => {
    setValue((prevState) => (prevState += 1));
    if (value >= collectionImages.length - 1)
      setValue((prevState) => (prevState = 0));
  };

  useEffect(() => {
    const loop = setInterval(() => {
      increment();
    }, 3000);
    return () => clearInterval(loop);
  }, [value]);

  return (
    <>
      <div className="collection-container">
        <h3>Collections</h3>
        <div className="collection-wrapper">
          <div className="left-img coll-img">
            <div className="content-wrapper">
              <h2>Painting</h2>
              <h4>
                Explore Eden Gallery's collection of acrylic, oil and graffiti
                paintings
              </h4>
              <button>Explore</button>
            </div>
          </div>
          <div className="right-img coll-img">
            <div className="content-wrapper">
              <h2>Sculptures</h2>
              <h4>
                Explore Eden Gallery's collection of unique free-standing
                sculptures
              </h4>
              <button>Explore</button>
            </div>
          </div>
        </div>
        <button className="explore-btn">Explore all Collections</button>
      </div>

      <div className="slider-responsive-container">
        <h3>Collections</h3>
        <p className="discover-paragraph">Discover our latest collections</p>
        <div className="slider">
          <div className="image-container">
            <div className="img-titles">
              <div className="title-wrapper">
                <h4>{collectionImages[value].alt}</h4>
                <p>{collectionImages[value].subtitle}</p>
              </div>
            </div>
            <img
              src={collectionImages[value].src}
              alt={collectionImages[value].alt}
            />
          </div>
        </div>

        <div className="bottom-slider">
          <span className="bottom-title">
            {collectionImages[value].description}
          </span>
        </div>
        <div className="sliding-btns">
          {Array.from({ length: 6 }).map((item, index) => (
            <>
              <div
                key={index}
                className={
                  value === index ? "sliding-btn active" : "sliding-btn"
                }
                onClick={() => setValue(index)}
              ></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Collections;
