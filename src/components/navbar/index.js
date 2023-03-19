import React from "react";

//? STYLES
import "./index.css";
//? COMPONENTS
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="navbar-brand">Brand</div>
      <nav className="nav-items">
        <NavbarLink text="Home" link="/" />
      </nav>
    </div>
  );
};

export default Navbar;
