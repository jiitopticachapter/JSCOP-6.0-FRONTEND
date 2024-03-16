import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import "./Events.css";
import "./Events.scss";
import photo from "./Code-of-duty.jpeg";
import Detail from "./EventsData.js";

const Event = () => {
  const navigate = useNavigate();

  return (
    <div id="events">
      <div className="eventheading">EVENTS</div>
      <div className="event-container">
        {Detail.map((item, index) => (
          <div key={index} className="event-box">
            <div className="event-cardss">
              <div className="nft">
                <div className="mainn">
                  <img className="tokenImage" src={photo} alt="NFT" />
                  <h2 className="EventNameHEAD">{item.title}</h2>
                  <div className="tokenInfo">
                    <div className="duration">
                      <Link to={`/${item.id}`} className="event-btn">
                        Read more
                      </Link>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
