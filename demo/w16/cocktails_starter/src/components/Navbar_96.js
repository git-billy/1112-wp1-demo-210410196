import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar_96 = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <a href="index.html">
          <img src="logo.svg" alt="cocktail db logo" className="logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="about.html">about</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar_96;
