import React from "react";
import "./HoverNavbar.scss";

function HoverNavbar({ data, images }) {
  const [value, setValue] = React.useState(0);

  const handleHover = (index) => {
    setValue(index);
  };

  return (
    <>
      <div className="galleries-hover">
        <div>
          <img src={images[value].src} alt={images[value].alt} />
        </div>
        <div className="vertical-line"></div>
        <div>
          <ul>
            {data.map((item, index) => (
              <li key={index} onMouseEnter={() => handleHover(index)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HoverNavbar;
