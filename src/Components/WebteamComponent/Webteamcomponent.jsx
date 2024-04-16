// WebTeamComponent.js
import React from "react";
import Webteam from "../../Pages/Webteam/Webteam"; // Import the Webteam component
import { WebTeamData, CoreTeamData } from "../../assets/Data/WebTeamdata"; // Import the WebTeamData array
import "./WebteamComponent.css";
import { useState } from "react";

const WebTeamComponent = () => {
  const [arr, setArr] = useState(WebTeamData);
  const [reference, setReference] = useState(1);

  function showschedule(team) {
    if (team == 1) {
      setArr(WebTeamData);
      setReference(1);
    } else {
      setArr(CoreTeamData);
      setReference(2);
    }
  }
  return (
    <div id="webteam">
      <div className="webteamheading">
        <h1>OUR TEAM</h1>
        <br />
        <br />
        <div id="tlbtndiv1" className="tlbtndiv">
          <button
            style={{
              backgroundColor: reference === 1 ? "white" : "black",
              color: reference === 1 ? "black" : "white",
            }}
            className="tlbtn"
            onClick={() => showschedule(1)}
          >
            Web Team
          </button>
          <button
            style={{
              backgroundColor: reference === 2 ? "white" : "black",
              color: reference === 2 ? "black" : "white",
            }}
            className="tlbtn"
            onClick={() => showschedule(2)}
          >
            Core Team
          </button>
        </div>
      </div>
      <div className="webteam-container">
        {/* Map over the WebTeamData array and render a Webteam component for each member */}
        {arr.map((member, index) => (
          <Webteam key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default WebTeamComponent;
