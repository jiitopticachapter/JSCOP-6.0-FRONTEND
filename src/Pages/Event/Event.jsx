import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import "./Events.css";
import "./Events.scss";
import Detail from "../../assets/Data/EventsData";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    <img className="tokenImage" src={item.imgsrc} style={{ height: "300px", width: "400px" }} alt="NFT" />
                  </div>
                  <h2 className="EventNameHEAD">{item.title}</h2>
                  <div className="tokenInfo">
                    <div className="duration">
                      <Link
                        to={`/eventDetails/${item.id}`}
                        className="event-btn"
                      >
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




