import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

import image1 from "../../assets/galleryImages/4.jpeg";
import image8 from "../../assets/galleryImages/11.jpeg";
import image9 from "../../assets/galleryImages/24.jpeg";
import image10 from "../../assets/galleryImages/13.jpeg";
import image11 from "../../assets/galleryImages/14.jpeg";
import image12 from "../../assets/galleryImages/15.jpeg";
import image13 from "../../assets/galleryImages/16.jpeg";
import image14 from "../../assets/galleryImages/17.jpeg";
import image22 from "../../assets/galleryImages/22.jpeg";

export default function Gallery() {
  return (
    <div id="gallery" style={{ textAlign: "center" }}>
      <h1 style={{ color: "white", margin: "30px", fontSize: "3rem" }}>
        GALLERY
      </h1>
      <div className="gallery-container">
        <div className="gallery">
          <img src={image1} alt="" />
          <img src={image8} alt="" />
          <img src={image9} alt="" />
          <img src={image10} alt="" />
          <img src={image11} alt="" />
          <img src={image12} alt="" />
          <img src={image13} alt="" />
          <img src={image14} alt="" />
          <img src={image22} alt="" />
        </div>
      </div>
    </div>
  );
}
