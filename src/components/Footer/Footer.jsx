import React from "react";
import logo from "../../assets/images/eden_logo_red.svg";
import "./Footer.scss";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import pinterest from "../../assets/images/pinterest.svg";
import youtube from "../../assets/images/youtube.svg";

function Footer() {
  return (
    <div className="footer-container">
      <img src={logo} alt="logo" />
      <div className="footer-wrapper">
        <div className="footer-about">
          <h3>About</h3>
          <p>
            Eden Gallery is a contemporary fine art gallery located in major
            <br /> cities in the United States and Europe. With the belief that
            art is a <br /> universal language that bridges cultures and forms
            human <br /> connections, we strive to create unforgettable
            exhibitions and
            <br /> events that bring color and inspiration to life's every
            moment.
          </p>
          <hr />
          <h4>FOLLOW US</h4>
          <div className="footer-social-media">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="footer-galleries footer">
          <h3>Galleries</h3>
          <ul>
            <li>Soho/Nyc</li>
            <li>Madison Ave/Nyc</li>
            <li>Aspen</li>
            <li>Miami/Florida</li>
            <li>New Bond</li>
            <li>St./London</li>
            <li>Mykonos/Greece</li>
            <li>
              <b>All Galleries</b>
            </li>
          </ul>
        </div>
        <div className="footer-artists footer">
          <h3>Artists</h3>
          <ul>
            <li>Alec Monopoly</li>
            <li>Angelo Accardi</li>
            <li>Gal Yosef</li>
            <li>David Kracov</li>
            <li>Eduardo Kobra</li>
            <li>Dorit Levinstein</li>
            <li>SN</li>
            <li>Yoel Benharrouche</li>
            <li>
              <b>All Artists</b>
            </li>
          </ul>
        </div>
        <div className="footer-collections footer">
          <h3>Collections</h3>
          <ul>
            <li>Painting</li>
            <li>Mixed Media</li>
            <li>Sculpture</li>
            <li>Papercut</li>
            <li>Shadox Boxes</li>
            <li>Photography</li>
            <li>3D Wall Sculpture</li>
            <li>
              <b>All Collections</b>
            </li>
          </ul>
        </div>
        <div className="footer-last-column footer">
          <ul>
            <li>Home</li>
            <li>Artworks</li>
            <li>Contact Us</li>
            <li>About Eden</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
