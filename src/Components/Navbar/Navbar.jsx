import React, { useState, useEffect } from "react";
import "./Navbar.css";
import navLogo from "../../assets/JSCOP_LOGO.png";
import Sidenav from "./SideNavbar";
import { Link, NavLink } from "react-router-dom";

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
          <Link to="/">
            <img src={navLogo} alt="" />
          </Link>
        </div>
        <div className={`NavbarContent `}>
          <a href="/">
            <li className="nav-link">HOME</li>
          </a>
          <a href="#aboutus">
            <li className="nav-link">ABOUT</li>
          </a>
          <a href="#timeline">
            <li className="nav-link">TIMELINE</li>
          </a>
          <a href="#events">
            {" "}
            <li className="nav-link">EVENTS</li>{" "}
          </a>
          <a href="#gallary">
            {" "}
            <li className="nav-link">GALLARY</li>{" "}
          </a>
          <a href="#webteam">
            <li className="nav-link">WEBTEAM</li>
          </a>
          <a href="#contactus">
            <li className="nav-link">CONTACT</li>
          </a>
        </div>
      </div>

      <div id="hidesidenav" style={navbarStyle}>
        <Sidenav />
      </div>
    </>
  );
};
export default Navbar;
