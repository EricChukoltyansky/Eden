import React from "react";
import "./Subscribe.scss";

function Subscribe() {
  return (
    <div className="subscribe-container">
      <h2>Subscribe for Exclusive updates</h2>
      <p>
        Be the first to receive information about new collections, new artists,
        and event invitations.
      </p>
      <form action="">
        <div className="upper-inputs">
          <input type="text" placeholder="First Name" className="first" />
          <input type="text" placeholder="Last Name" className="last" />
        </div>
        <div className="email">
          <input type="email" placeholder="Email Address" />
        </div>
      </form>
      <button className="subscribe-btn">Subscribe</button>
    </div>
  );
}

export default Subscribe;
