import React, { useState, useEffect } from "react";
import "./Navbar.css";
import jscop6logo from "../../assets/Navimages/jscop6logo2.png";

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
          <Link to="/home">
            <img src={jscop6logo} alt="" />
          </Link>
        </div>
        <div className={`NavbarContent `}>
          <Link to="/home">
            <li className="nav-link">HOME</li>
          </Link>
          <Link to="/events">
            {" "}
            <li className="nav-link">EVENTS</li>{" "}
          </Link>
          <Link to="/timeline">
            <li className="nav-link">TIMELINE</li>
          </Link>
          <Link to="/speaker">
            <li className="nav-link">SPEAKERS</li>
          </Link>
          <Link to="/team">
            <li className="nav-link">OUR TEAM</li>
          </Link>

          {/* <Link to="/register">
            <button className="navbarregistorbutton">REGISTER NOW</button>
          </Link> */}
        </div>
      </div>

      <div id="hidesidenav" style={navbarStyle}>
        <Sidenav />
      </div>
    </>
  );
};
export default Navbar;
