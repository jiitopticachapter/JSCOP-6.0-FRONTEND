import React, { useEffect, useState } from "react";
import "./Loader.css"; // Import the CSS file
import Stars from "../../Components/Stars/Stars";

const Loader = () => {
  const [starsData, setStarsData] = useState([]);
  const [displaystar, setDisplayStar] = useState("display-none");

  useEffect(() => {
    // const space = document.querySelector(".space");
    // space.classList.remove("display-none");
    // setDisplayStar("");
    // const initializeAnimation = () => {
    //   // Generate stars data
    //   const stars = [];
    //   for (let i = 0; i < 70; i++) {
    //     stars.push({
    //       a: `${Math.random() * 260}vmax`,
    //       b: `${Math.random() * 5200}deg`,
    //       delay: `${Math.random() * 2.5 - 0.5}s`,
    //     });
    //   }
    //   setStarsData(stars);

    // Remove stars animation:
    setTimeout(() => {
      // if (space) {
      //   space.classList.add("display-none");
      setDisplayStar("");
      // }
    }, 4200); //7500
    // };

    // initializeAnimation();
  }, []);

  return (
    <div className="loader-container">
      <div className="space">
        {/* {starsData.map((star, index) => (
          <div key={index}>
            <div
              style={{
                "--a": star.a,
                "--b": star.b,
                animationDelay: star.delay,
              }}
              className="data-star1"
            ></div>
            <div
              style={{
                "--a": star.a,
                "--b": star.b,
                animationDelay: star.delay,
              }}
              className="data-star2"
            ></div>
            <div
              style={{
                "--a": star.a,
                "--b": star.b,
                animationDelay: star.delay,
              }}
              className="data-star3"
            ></div>
          </div>
        ))} */}
        <div className={`${displaystar}`}>
          <Stars speed={1} />
        </div>
      </div>
      <div className="mid-label">
        <div className="mid-label__text">
          JIIT OPTICA <br />
          PRESENTS
        </div>
      </div>
    </div>
  );
};

export default Loader;
