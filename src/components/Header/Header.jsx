import React from "react";
import "./header.css";
import logo from "../Assets/howl.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="img" src={logo} alt="logo" />
      </div>
      <div>
        <div class="menu-icon"></div>
        <div class="menu-icon1"></div>
      </div>
    </div>
  );
}

export default Header;
