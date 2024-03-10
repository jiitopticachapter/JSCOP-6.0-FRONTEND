import { useNavigate } from "react-router-dom";
import "./Event.css";
import Detail from "./EventDetail.jsx";

const Event = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="event-container">
        {Detail.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/${item.id}`);
            }}
            className="event-box"
          >
            <span></span>
            <div className="event-content">
              <h2 className="event-heading">{item.name}</h2>
              <img src={item.image} className="event-img" />
              <p className="event-desc">{item.description}</p>
              <a href="" className="event-btn">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Event;
//