import React, { useState } from "react";
import "./Navbar.css";
import navLogo from "../../assets/JSCOP_LOGO.png";
import Sidenav from "./SideNavbar";

const Navbar = () => {
  return (
    <>
      <div className={`NavbarComponent `}>
        <div className={`NavbarToggle `}></div>
        <div className="NavabrLogo">
          <img src={navLogo} alt="" />
        </div>
        <div className={`NavbarContent `}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>TIMELINE</li>
          <li>EVENTS</li>
          <li>GALLERY</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </div>
      </div>

      <div id="hidesidenav">
        <Sidenav />
      </div>
    </>
  );
};
export default Navbar;
