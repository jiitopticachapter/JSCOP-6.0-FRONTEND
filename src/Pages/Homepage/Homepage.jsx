import "./Homepage.css";
import { useRef } from "react";
import planet from "./planet2.jpg";
import Stars from "../../Components/Stars/Stars";
import Timer from "../../Components/Timer/Timer";
// import Slider from "../../Components/Mainn/Mainn";

const Homepage = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 2;
  };
  return (
    <>
    <div className="homepage">
      <Stars />
      <img src={planet} alt="planet" className="planet" />

      <div className="home-heading">
        {/* <div className="home-heading-inner"> */}
        <span className="home-heading1">JIIT OPTICA</span> <br />
        <div className="home-heading2">Presents</div>
        <div className="home-heading3">JSCOP 6.0</div>
        <div className="home-heading-inner2">
          JIIT STUDENTS CONFERENCE FOR OPTICS AND PHOTONICS
        </div>
        <br />
        <Timer />
        <br />
        <div>
          <button className="register-btn">Register Now</button>
        </div>
        {/* </div> */}
      </div>
      <div className="astro"></div>
      <div className="spacestation"></div>
    </div>
    {/* <Slider/> */}
    </>
  );
};

export default Homepage;
