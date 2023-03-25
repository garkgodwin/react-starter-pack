import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ text, link }) => {
  return <NavLink to={link}>{text}</NavLink>;
};

export default NavbarLink;
