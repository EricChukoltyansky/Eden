import React from "react";
import "./Navbar.scss";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../../assets/images/logo-red.svg";

function Navbar() {
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
      <header>
        <nav className="navbar">
          <div className="top-nav">
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
                <img alt="logo" src={logo} />
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
        </nav>
        <div></div>
      </header>
    </>
  );
}

export default Navbar;
