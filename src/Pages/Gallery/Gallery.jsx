import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

import image1 from "../../assets/galleryImages/4.jpeg";
import image2 from "../../assets/galleryImages/5.jpeg";
import image3 from "../../assets/galleryImages/6.jpeg";
import image4 from "../../assets/galleryImages/7.jpeg";
import image5 from "../../assets/galleryImages/8.jpeg";
import image6 from "../../assets/galleryImages/9.jpeg";
import image7 from "../../assets/galleryImages/10.jpeg";
import image8 from "../../assets/galleryImages/11.jpeg";
import image9 from "../../assets/galleryImages/12.jpeg";

// import {} from "../../oldassets/galleryImages/4.jpg";
export default function Gallery() {
  return (
    <div id="gallery" style={{ textAlign: "center" }}>
      <h1 style={{ color: "white", margin: "30px", fontSize: "3rem" }}>
        GALLERY
      </h1>
      <div className="gallery-container">
        <div className="gallery">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image9} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <img src={image3} alt="" />
        </div>
      </div>
    </div>
  );
}
