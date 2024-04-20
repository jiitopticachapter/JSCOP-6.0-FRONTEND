import React, { useState, lazy, Suspense } from "react";
import { WebTeamData, CoreTeamData } from "../../assets/Data/WebTeamdata";
import "./WebteamComponent.css";

// Lazy loading the Webteam component
const LazyWebteam = lazy(() => import("../../Pages/Webteam/Webteam"));

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
      <div className="webteam-container">
        {/* Wrap LazyWebteam component with Suspense and specify a fallback */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* Map over the WebTeamData array and render a Webteam component for each member */}
          {arr.map((member, index) => (
            <LazyWebteam key={index} member={member} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default WebTeamComponent;
