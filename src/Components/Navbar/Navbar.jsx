import React, { useState, useEffect } from "react";
import "./Navbar.css";
import navLogo from "../../assets/JSCOP_LOGO.png";
import Sidenav from "./SideNavbar";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const gradientColor = `linear-gradient(to bottom, black, rgba(0, 0, 0, 0))`;
  const navbarStyle = {
    background: scrollY > 0 ? gradientColor : "rgba(0, 0, 0, 0)",
    // backdropFilter: scrollY > 0 ? "blur(4px)" : "none",
  };
  const navbarStyle2 = {
    background: scrollY > 0 ? gradientColor : "rgba(0, 0, 0, 0)",
    backdropFilter: scrollY > 0 ? "blur(4px)" : "none",
  };

  return (
    <>
      <div className={`NavbarComponent `} style={navbarStyle2}>
        <div className={`NavbarToggle `}></div>
        <div className="NavabrLogo">
          <img src={navLogo} alt="" />
        </div>
        <div className={`NavbarContent `}>
          <li className="nav-link">HOME</li>
          <li className="nav-link">ABOUT</li>
          <li className="nav-link">TIMELINE</li>
          <li className="nav-link">EVENTS</li>
          <li className="nav-link">GALLERY</li>
          <li className="nav-link">TEAM</li>
          <li className="nav-link">CONTACT</li>
        </div>
      </div>

      <div id="hidesidenav" style={navbarStyle}>
        <Sidenav />
      </div>
    </>
  );
};
export default Navbar;
