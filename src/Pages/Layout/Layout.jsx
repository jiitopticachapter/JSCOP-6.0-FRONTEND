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
      {/* <Event /> */}
      <div style={{"textAlign":"center"}}><br/>
      <h1 style={{"color":"white"}}>EVENTS</h1><br/>
        <h2 style={{"color":"white"}}>COMING SOON...</h2><br/>
      </div>
      {/* <Timeline /> */}
      <div style={{"textAlign":"center"}}>
      <h1 style={{"color":"white"}}>TIMELINE</h1><br/>
        <h2 style={{"color":"white"}}>COMING SOON...</h2>
      </div>
      <WebTeamComponent />
      <Gallery />
    </>
  );
};

export default Layout;
