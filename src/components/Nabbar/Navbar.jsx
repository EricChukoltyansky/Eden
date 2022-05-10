import React from "react";
import "./Navbar.scss";
import { AiOutlineHeart } from "react-icons/ai";
function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="top-nav">
            <input
              type="text"
              placeholder="Search Artist, Artwork, Gallery "
            ></input>
            <span className="heart-symbol">
              <AiOutlineHeart />
            </span>
            <span className="online-shop">Online Shop</span>
          </div>
          <div className="bottom-nav">
            <ul>
              <li>Home</li>
              <li>Galleries</li>
              <li>Artists</li>
              <li>Collection</li>
              <li>Artworks</li>
              <li>News</li>
              <li>About Eden</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
