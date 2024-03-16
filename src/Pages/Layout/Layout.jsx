import React from "react";
import Homepage from "../Homepage/Homepage";
import Event from "../Event/Event";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Timeline from "../Timeline/Timeline";
import Webteam from '../Webteam/Webteam'
import WebTeamComponent from "../../Components/WebteamComponent/Webteamcomponent";
const Layout = () => {
  return (
    <>
      <Homepage />
      <About />
      <Event />
      <Timeline />
      <WebTeamComponent />
      <Gallery />
    </>
  );
};

export default Layout;
