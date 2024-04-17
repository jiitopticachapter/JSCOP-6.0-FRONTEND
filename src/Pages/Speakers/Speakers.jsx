import React from "react";
import "./Speakers.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Aman_Tripathi from "./Aman_Tripathi.jpg";

const Speakers = () => {
  return (
    <div className="speakers" id="speaker">
      {" "}
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          margin: "30px",
          paddingBottom: "20px",
          fontSize: "3rem",
        }}
      >
        SPEAKERS
      </h1>
      <div
        className="flex-speaker"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div className=" speaker-1 speaker-cardBox">
          <div className=" speaker-card speaker-card-fontsize">
            {/* <img
              src={Aman_Tripathi}
              className="speaker-image speaker-h2"
              alt="speaker-image"
            />
            <h2
              className="speaker-h2 speaker-card-fontsize"
              style={{ paddingTop: "300px" }}
            >
              NAME
            </h2>

            <div className="speaker-content">
              <h3 className="speaker-h3">Lorem Ipsum</h3>
              <h3 className="speaker-h3">Designation</h3>
              <div className="speaker-p">
                This is Sachin Samal, your tech mate!!! I love you all. Lets
                make this world a better place for all of us. Keep
                prospering...Keep learning!!!
                <h4 className="speaker-h3">Date : </h4>
                <h4 className="speaker-h3">Time : </h4>
                <h4 className="speaker-h3">Venue : </h4>
              </div>
            </div> */}
            <SkeletonTheme
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
                <div style={{ padding: "0px 35px" }}>
                  <Skeleton width={226} height={200} />
                </div>
                <br />
                <Skeleton width={180} height={25} />
                <br />

                <div style={{ color: "white" }}>
                  <h3>To Be Revealed Soon...</h3>
                </div>
              </div>
              <br />
              <br />
            </SkeletonTheme>
          </div>
        </div>
        <div className=" speaker-2 speaker-cardBox">
          <div className=" speaker-card speaker-card-fontsize">
            {/* <img
              src={Aman_Tripathi}
              className="speaker-image speaker-h2"
              alt="speaker-image"
            />
            <h2
              className="speaker-h2 speaker-card-fontsize"
              style={{ paddingTop: "300px" }}
            >
              NAME
            </h2>

            <div className="speaker-content">
              <h3 className="speaker-h3">Lorem Ipsum</h3>
              <h3 className="speaker-h3">Designation</h3>
              <div className="speaker-p">
                This is Sachin Samal, your tech mate!!! I love you all. Lets
                make this world a better place for all of us. Keep
                prospering...Keep learning!!!
                <h4 className="speaker-h3">Date : </h4>
                <h4 className="speaker-h3">Time : </h4>
                <h4 className="speaker-h3">Venue : </h4>
              </div>
            </div> */}
            <SkeletonTheme
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
                <div style={{ padding: "0px 35px" }}>
                  <Skeleton width={226} height={200} />
                </div>
                <br />
                <Skeleton width={180} height={25} />
                <br />

                <div style={{ color: "white" }}>
                  <h3>To Be Revealed Soon...</h3>
                </div>
              </div>
              <br />
              <br />
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
