import React from "react";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header>
      {/* <div className="header-content">
        <div className="logo-container">
          <div className="logo">
            <h1>Up</h1>
          </div>
        </div>
        <div className="title">
          <h1>
            THE ULTIMATE <span className="span">PHOTO</span>GRAPHER
          </h1>
        </div>
      </div>
      <nav>
        <ul>
          <li>HOME</li>
          <li>BLOG</li>
          <li>ABOUT ME</li>
          <li>CONTACT US</li>
        </ul>
        <button>LOGIN</button>
      </nav> */}
      <NavBar />
    </header>
  );
};

export default Header;
