import React from "react";
import "./Navbar.scss";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../../assets/images/logo-red.svg";
import Slider from "../Slider/Slider";

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
            <span className="heart-icon">
              <AiOutlineHeart />
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
