import React, { useState, useEffect } from "react";
import "./SideNavbar.css";
import { Link, useParams } from "react-router-dom";
import jscop6logo from "../../assets/Navimages/jscop6logo2.png";

const Sidenav = () => {
  const [sidenavWidth, setSidenavWidth] = useState("0vw");
  const [sidenavItems, setSidenavItems] = useState([
    { name: "Home", path: "/home" },
    { name: "Events", path: "/events" },
    { name: "Timeline", path: "/timeline" },
    { name: "Speakers", path: "/speaker" },
    { name: "Our Team", path: "/team" },
    // { name: "Register", path: "/register" },
  ]);

  var currentURL = window.location.href;
  currentURL = currentURL.split("/");
  currentURL = currentURL[currentURL.length - 2];

  const openNav = () => {
    setSidenavWidth("100vw");
  };

  const closeNav = () => {
    setSidenavWidth("0vw");
  };
  return (
    <div className="sidenavvbar">
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: `${sidenavWidth}` }}
      >
        {/* <div> */}
        <Link to="/home">
          <img src={jscop6logo} alt="" className="sideNavBarLogo" />
        </Link>
        {/* </div> */}
        <Link href="" className="closebtn" onClick={closeNav}>
          &times;
        </Link>

        <hr style={{ color: "white" }} />
        {sidenavItems.map((item, index) => {
          return (
            <div className="sidenavbarsections" key={index}>
              <Link
                id={item.name === "Register" ? "sidenav-register" : ""}
                className="sidelink nav-link sidenav-all-btn"
                to={`${item.path}`}
                onClick={closeNav}
              >
                {item.name}
              </Link>
              {/* <hr style={{ color: "white" }} /> */}
            </div>
          );
        })}
        <Link to="/register">
          <br />
          <div style={{ textAlign: "center" }}>
            <button className="navbarregistorbutton" onClick={closeNav}>
              REGISTER NOW
            </button>
          </div>
        </Link>
      </div>

      <span
        style={{
          fontSize: "30px",
          cursor: "pointer",
          padding: "7px",
          color: "var(--lighter)",
        }}
        onClick={openNav}
      >
        &#9776;
      </span>
    </div>
  );
};

export default Sidenav;
