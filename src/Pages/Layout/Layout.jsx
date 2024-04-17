import React from "react";
import Homepage from "../Homepage/Homepage";
import Event from "../Event/Event";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Timeline from "../Timeline/Timeline";
// import Webteam from "../Webteam/Webteam";
import WebTeamComponent from "../../Components/WebteamComponent/Webteamcomponent";
import Sponsors from "../Sponsors/Sponsors";
import Speakers from "../Speakers/Speakers";
// import NFTCard from "../../Components/Events/Events";
const Layout = () => {
  return (
    <>
      <Homepage />
      <About />

      <Event />
      <Speakers />
      <Timeline />

      <WebTeamComponent />
      <Gallery />
      <Sponsors />
    </>
  );
};

export default Layout;
