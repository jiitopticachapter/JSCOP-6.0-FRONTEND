import React, { useState } from "react";
import "./Navbar.css";
import navLogo from "../../assets/JSCOP_LOGO.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setToggleIcon(!toggleIcon);
  };

  return (
    <>
      <div
        id={`${toggleIcon ? "mobilenav" : ""}`}
        className={`NavbarComponent ${showMenu ? "showMenu" : ""}`}
      >
        <div
          className={`NavbarToggle ${toggleIcon ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>
        <div className="NavabrLogo">
          <img src={navLogo} alt="" />
        </div>
        <div className={`NavbarContent ${showMenu ? "showMenu" : ""}`}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>TIMELINE</li>
          <li>EVENTS</li>
          <li>GALLERY</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </div>
      </div>
    </>
  );
};
export default Navbar;
