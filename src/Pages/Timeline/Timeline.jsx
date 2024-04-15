import React, { useEffect, useState } from "react";
import "./Timeline.css";

import Tiline from "./Tline";
import talk from "./talk.png";
import tea2 from "./tea2.png";
import squid from "./squid.png";
import tea from "./tea.png";
import opening from "./opening.png";
import onlinem from "./onlinem.png";
import lunch from "./lunch.png";
import idea from "./idea.png";
import code from "./code.png";
import closing from "./closing.png";
import ccc from "./ccc.png";

function Timeline() {
  let arr1 = [
    {
      pic: opening,
      name: "INAUGRATION CEREMONY",
      time: "10:00 AM - 10:30 AM",
      venue: "LT-4",
    },
    {
      pic: tea,
      name: "TEA BREAK",
      time: "10:30 AM - 11:00 AM",
      venue: "Infront of LT-4",
    },
    { pic: talk, name: "TALK 1", time: "11:00 AM - 12:00 PM", venue: "LT-4" },
    { pic: talk, name: "TALK 2", time: "12:00 PM - 12:45 PM", venue: "LT-4" },
  ];

  let arr2 = [
    { pic: talk, name: "TALK3", time: "10:00 AM - 10:45 AM", venue: "LT-4" },
    {
      pic: tea2,
      name: "TEA BREAK",
      time: "10:45 AM - 11:15 AM",
      venue: "Infront of LT-4",
    },
    {
      pic: onlinem,
      name: "ONLINE TALK",
      time: "11:05 AM - 12:00 PM",
      venue: "Google Meet",
    },
    { pic: lunch, name: "LUNCH", time: "12:00 AM - 1:30 PM", venue: "Mess" },
  ];

  const [arr, setArr] = useState(arr1);
  const [reference, setReference] = useState(1);

  function showschedule(day) {
    if (day == 1) {
      setArr(arr1);
      setReference(1);
    } else {
      setArr(arr2);
      setReference(2);
    }
  }

  return (
    <div id="timeline" className="timet">
      <div className="timeline">
        <div className="theading">TIMELINE</div>

        <div className="acttime">
          <div id="tlbtndiv1" className="tlbtndiv">
            <button
              style={{
                backgroundColor: reference === 1 ? "white" : "black",
                color: reference === 1 ? "black" : "white",
              }}
              className="tlbtn"
              onClick={() => showschedule(1)}
            >
              Day-1 Timeline
            </button>
            <button
              style={{
                backgroundColor: reference === 2 ? "white" : "black",
                color: reference === 2 ? "black" : "white",
              }}
              className="tlbtn"
              onClick={() => showschedule(2)}
            >
              Day-2 Timeline
            </button>
          </div>

          <Tiline arr={arr} />

          <div id="tlbtndiv2" className="tlbtndiv">
            {/* <a href="./day1.png" download> */}
            <button className="tlbtn tlbtn2">Download Day-1 Schedule</button>
            {/* </a> */}
            {/* <a href="./day2.png" download> */}
            <button className="tlbtn tlbtn2">Download Day-2 Schedule</button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
