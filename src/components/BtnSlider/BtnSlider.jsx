import React from "react";
import "./BtnSlider.scss";

function BtnSlider({ direction, moveSlide }) {
  return (
    <>
      <button className="btnSlider" onClick={moveSlide}></button>
    </>
  );
}

export default BtnSlider;
