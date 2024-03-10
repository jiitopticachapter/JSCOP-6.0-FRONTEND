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
    { pic: lunch, name: "LUNCH", time: "12:45 PM - 2:00 PM", venue: "MESS" },
    {
      pic: code,
      name: "BLIND CODING",
      time: "2:00 PM - 4:00 PM",
      venue: "CL-1 - CL-4",
    },
    {
      pic: tea2,
      name: "TEA BREAK 2",
      time: "4:00 PM - 4:20 PM",
      venue: "Infront of LT-4",
    },
    {
      pic: ccc,
      name: "CCC",
      time: "4:20 PM - 5:30 PM",
      venue: "Comm. Systems Lab EL-11",
    },
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
    {
      pic: idea,
      name: "IDEATHON",
      time: "1:30 PM - 3:30 PM",
      venue: "Audi/LT-4",
    },
    { pic: squid, name: "SQUID GAME", time: "3:00 PM - 4:30 PM", venue: "JBS" },
    {
      pic: tea,
      name: "TEA BREAK",
      time: "4:30 PM - 5:00 PM",
      venue: "Infront of LT-4",
    },
    {
      pic: closing,
      name: "TCLOSING CEREMONY",
      time: "5:00 PM - 6:30 PM",
      venue: "Audi",
    },
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
    <div className="timet">
      <div className="timeline">
        <div className="theading">TIMELINE</div>

        <div className="acttime">
          <div className="tlbtndiv">
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

          <div className="tlbtndiv">
            <a href="./day1.png" download>
              <button className="tlbtn tlbtn2">Download Day-1 Timeline</button>
            </a>
            <a href="./day2.png" download>
              <button className="tlbtn tlbtn2">Download Day-2 Timeline</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
