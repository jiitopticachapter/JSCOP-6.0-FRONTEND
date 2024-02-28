import React, { useState } from "react";
import "./SideNavbar.css";
import { Link, useParams } from "react-router-dom";

const Sidenav = () => {
  const [sidenavWidth, setSidenavWidth] = useState(0);
  const [sidenavItems, setSidenavItems] = useState([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Timeline", path: "/timeline" },
    { name: "Team", path: "/team" },
  ]);

  var currentURL = window.location.href;
  currentURL = currentURL.split("/");
  currentURL = currentURL[currentURL.length - 2];

  const openNav = () => {
    setSidenavWidth(270);
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };
  return (
    <div className="sidenavvbar">
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: `${sidenavWidth}px` }}
      >
        <Link href="" className="closebtn" onClick={closeNav}>
          &times;
        </Link>

        <hr style={{ color: "white" }} />
        {sidenavItems.map((item, index) => {
          return (
            <div className="sidenavbarsections" key={index}>
              <Link className="sidelink" to={item.link}>
                {item.name}
              </Link>
              {/* <hr style={{ color: "white" }} /> */}
            </div>
          );
        })}
      </div>

      <span
        style={{
          fontSize: "30px",
          cursor: "pointer",
          padding: "15px",
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
