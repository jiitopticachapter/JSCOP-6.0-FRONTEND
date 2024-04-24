import React from "react";
import "./Speakers.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import bipin from "../../assets/speakerimages/bipin.png";
import gagan from "../../assets/speakerimages/gagan.png";

const Speakers = () => {
  return (
    <div className="speakers" style={{ paddingTop: "30px" }} id="speaker">
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
            <img
              src={gagan}
              className="speaker-image speaker-h2"
              alt="speaker-image"
            />
            <h2
              className="speaker-h2 speaker-h2-name  speaker-card-fontsize"
              style={{ paddingTop: "300px" }}
            >
              Prof. Gagan Kumar
            </h2>

            <div className="speaker-content">
              <h4 className="speaker-h3"> Prof. Gagan Kumar</h4>
              <h4 className="speaker-h3">IIT Guwahati</h4>
              <div style={{ textAlign: "left" }} className="speaker-p">
                The Terahertz Photonics and Plasmonics lab, led by Dr. Gagan Kumar, focuses on developing terahertz plasmonic devices and exploring near field coupling in terahertz metamaterials and sesnsors to enhance speed and senstivity.
                <h5 style={{ textAlign: "left" }} className="speaker-h5">
                  Date : 27-04-2024
                </h5>
                <h5 style={{ textAlign: "left" }} className="speaker-h5">
                  Time : 10:30 AM - 11:30 AM
                </h5>
                <h5 style={{ textAlign: "left" }} className="speaker-h5">
                  Venue : LT-4
                </h5>
              </div>
            </div>
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
            </SkeletonTheme> */}
          </div>
        </div>
        <div className=" speaker-2 speaker-cardBox">
          <div className=" speaker-card speaker-card-fontsize">
            <img
              src={bipin}
              className="speaker-image speaker-h2"
              alt="speaker-image"
            />
            <h2
              className="speaker-h2 speaker-h2-name speaker-card-fontsize"
              style={{ paddingTop: "300px" }}
            >
              Dr. Bipin Kumar Gupta
            </h2>

            <div className="speaker-content">
              <h4 className="speaker-h3"> Dr. Bipin Kumar Gupta</h4>
              <h4 className="speaker-h3">CSIR NPL</h4>
              <div style={{ textAlign: "left" }} className="speaker-p">
                Dr. Bipin Kumar Gupta, an expert in Solid State Physics, specalizes in luminescent materials, nanotechnology bio-nanotechnology, and hydrogen energy. His work involves graphene quantam dots and 2-D materials for applications in security ink, optoelectronics, biological labeling, and drug delivery.
                <h5 style={{ textAlign: "left" }} className="speaker-h5">
                  Date : 27-04-2024
                </h5>
                <h5 style={{ textAlign: "left" }} className="speaker-h5">
                  Time : 12:00 AM - 1:00 AM
                </h5>
                <h5 style={{ textAlign: "left" }} className="speaker-h5">
                  Venue : LT-4
                </h5>
              </div>
            </div>
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
            </SkeletonTheme> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
