import React, { useState, lazy, Suspense } from "react";
import { WebTeamData, CoreTeamData } from "../../assets/Data/WebTeamdata";
import "./WebteamComponent.css";
import Webteam from "../../Pages/Webteam/Webteam";
import Coreteam from "../../Pages/Webteam/Coreteam";

const WebTeamComponent = () => {
  const [arr, setArr] = useState(WebTeamData);
  const [reference, setReference] = useState(1);

  function showschedule(team) {
    if (team === 1) {
      setArr(WebTeamData);
      setReference(1);
    } else {
      setArr(CoreTeamData);
      setReference(2);
    }
  }

  return (
    <div id="team">
      <div className="webteamheading">
        <h1>OUR TEAM</h1>
        <br />
        <br />
        <div id="tlbtndiv1" className="tlbtndiv">
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
        </div>
      </div>
      {reference === 1 ? (
        <div className="webteam-container">
          {WebTeamData.map((member, index) => (
            <Webteam key={index} member={member} />
          ))}
        </div>
      ) : (
        <div className="webteam-container">
          {CoreTeamData.map((member, index) => (
            <Coreteam key={index} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WebTeamComponent;
