import React from "react";
import "./Navbar.scss";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../../assets/images/logo-red.svg";
import smallLogo from "../../assets/images/eden_logo_red.svg";
import HoverNavbar from "../HoverNavbar/HoverNavbar";
import galleryImages from "../../assets/imagesScripts/mobileCollectionImages";

function Navbar() {
  const [color, setColor] = React.useState("black");
  const [colorChange, setColorchange] = React.useState(false);
  const [isGalleriesHover, setIsGalleriesHover] = React.useState(false);
  const [isArtistsHover, setIsArtistsHover] = React.useState(false);
  const [isCollectionHover, setIsCollectionHover] = React.useState(false);
  const [isNewsHover, setIsNewsHover] = React.useState(false);

  const galleriesArray = [
    "Soho/Nyc",
    "Madison Ave/Nyc",
    "Aspen",
    "Miami/Florida",
    "New Bond St./London",
    "Dubai",
    "All Galleries",
  ];

  const artistsArray = [
    "Alec Monopoly",
    "Angelo Accardi",
    "Gal Yosef",
    "David Kracov",
    "Eduardo Kobra",
    "Dorit Levinstein",
    "Yoel Benharrouche",
    "SN",
    "Calman Shemi",
    "F&G",
    "Metis Atash",
    "All Artists",
  ];

  const collectionArray = [
    "Paintings",
    "Sculptures",
    "Mixed Media",
    "Shadow Boxes",
    "Photography",
    "Papercuts",
    "3D Wall Sculpture",
    "Explore All",
  ];

  const handleClick = () => {
    if (color === "black") {
      setColor("red");
    }
    if (color === "red") {
      setColor("black");
    }
  };

  const handleHover = () => {
    setIsGalleriesHover(!isGalleriesHover);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      {/* {console.log(isGalleriesHover)} */}
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
                <li onMouseEnter={handleHover}>Galleries</li>
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

      <div
        className={
          colorChange
            ? "responsive-header sticky-responsive-header"
            : "responsive-header"
        }
      >
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <input
                type="text"
                placeholder="Search Artist, Artwork, Gallery "
              ></input>
              <ul>
                <li>Home</li>
                <hr />
                <li>Galleries</li>
                <hr />
                <li>Artists</li>
                <hr />
                <li>Collections</li>
                <hr />
                <li>Artworks</li>
                <hr />
                <li>News</li>
                <hr />
                <li>About Eden</li>
                <hr />
                <li>Contact Us</li>
                <hr />
                <li>
                  <b>Online Shop</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="small-logo">
          <img alt="logo" src={smallLogo} />
        </div>
        <div className="heart-icon">
          <AiOutlineHeart onClick={handleClick} style={{ color: color }} />
        </div>
      </div>

      {isGalleriesHover ? (
        <HoverNavbar
          data={galleriesArray}
          images={galleryImages}
          handleHover={handleHover}
        />
      ) : null}
    </>
  );
}

export default Navbar;
