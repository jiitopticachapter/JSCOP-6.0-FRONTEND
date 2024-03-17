import "./Homepage.css";
import { useRef } from "react";
import planet from "./planet2.jpg";
import Stars from "../../Components/Stars/Stars";
import Timer from "../../Components/Timer/Timer";
import { Link } from "react-router-dom";

const Homepage = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 2;
  };
  return (
    <div className="homepage">
      <Stars speed={0.04} />

      <img src={planet} alt="planet" className="planet" />
      <div className="home-heading">
        {/* <div className="home-heading-inner"> */}
        <div className="home-heading1">JIIT OPTICA</div>
        <div className="home-break">
          <br />
        </div>
        <div className="home-heading2">Presents</div>
        <div className="home-break">
          <br />
        </div>
        <div className="home-heading3">
          JSCOP <span className="six-point-zero"> 6.0</span>
        </div>
        <div className="home-heading-inner2">
          JIIT STUDENTS CONFERENCE FOR OPTICS AND PHOTONICS
        </div>
        {/* <br /> */}
        <Timer />
        {/* <br /> */}
        <div className="home-register-btn-div">
          <Link to="/register">
            <button className="home-register-btn">Register Now</button>
          </Link>
        </div>
        {/* </div> */}
      </div>
      <div className="astro"></div>
      <div className="spacestation"></div>
      <div className="home-gradient"></div>
      <div className="home-gradient"></div>
      <div className="home-gradient"></div>
    </div>
  );
};

export default Homepage;
