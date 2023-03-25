import React from "react";

//? STYLES
import "./index.css";
//? COMPONENTS
import NavbarLink from "./NavbarLink";
//? IMAGES
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="nav-items">
        <NavbarLink text="Home" link="/" />
        <NavbarLink text="Login" link="/login" />
      </nav>
    </div>
  );
};

export default Navbar;
