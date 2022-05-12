import React from "react";
import "./Navbar.scss";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../../assets/images/logo-red.svg";
import smallLogo from "../../assets/images/eden_logo_red.svg";

function Navbar() {
  const [color, setColor] = React.useState("black");
  const [colorChange, setColorchange] = React.useState(false);

  const handleClick = () => {
    if (color === "black") {
      setColor("red");
    }
    if (color === "red") {
      setColor("black");
    }
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div className={colorChange ? "header changeColorSize" : "header"}>
        <div className="navbar">
          <div className={colorChange ? "top-nav-none " : "top-nav"}>
            <input
              type="text"
              placeholder="Search Artist, Artwork, Gallery "
            ></input>
            <span className="heart-icon">
              <AiOutlineHeart onClick={handleClick} style={{ color: color }} />
            </span>
            <span className="online-shop">Online Shop</span>
          </div>
          <div className="bottom-nav">
            <ul>
              <span>
                <img alt="logo" src={logo} className="big-logo" />
                <img alt="logo" src={smallLogo} className="small-logo" />
              </span>
              <div>
                <li>Home</li>
                <li>Galleries</li>
                <li>Artists</li>
                <li>Collection</li>
                <li>Artworks</li>
                <li>News</li>
                <li>About Eden</li>
                <li>Contact Us</li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="responsive-header">
        <div></div>
        <div>
          <img alt="logo" src={smallLogo} className="small-logo" />
        </div>
        <div className="heart-icon">
          <AiOutlineHeart onClick={handleClick} style={{ color: color }} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
