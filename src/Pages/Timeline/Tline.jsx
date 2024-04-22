import React from "react";
import "./Tiiline.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Tiline({ arr }) {
  return (
    <div className="tlinebody">
      <main>
        {arr.map((item, index) => (
          <article key={index} className="stop">
            <div className="text">
              {/* <img className="tlimh" src={item.pic} alt="" /> */}
              <header>
                <h3>{item.name}</h3>
                <time>{item.time}</time>
                <br /> {item.venue}
              </header>
              {/* <SkeletonTheme
                color="#e0e0e0"
                baseColor="#cdcbcb"
                highlightColor="#f5f5f5"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Skeleton width={250} height={225} />

                  <br />
                  <Skeleton width={240} height={25} />
                  <br />
                  <Skeleton width={150} height={25} />

                  <div style={{ color: "white" }}>
                    <br />
                    <h3>To Be Revealed Soon...</h3>
                  </div>
                </div>
                <br />
                <br />
              </SkeletonTheme> */}
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Tiline;
