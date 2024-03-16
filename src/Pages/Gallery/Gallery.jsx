import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import {} from "../../oldassets/galleryImages/4.jpg";
export default function Gallery() {
  return (
    <div id="gallery" style={{ textAlign: "center" }}>
      <h1 style={{ color: "white", margin: "30px", fontSize: "3rem" }}>
        GALLERY
      </h1>
      <div className="gallery-container">
        <div className="gallery">
          <img
            src="src/oldassets/galleryImages/4.jpg"
            alt="a forest after an apocalypse"
          />
          <img
            src="src/oldassets/galleryImages/5.jpg"
            alt="a waterfall and many rocks"
          />
          <img
            src="src/oldassets/galleryImages/6.jpg"
            alt="a house on a mountain"
          />
          <img
            src="src/oldassets/galleryImages/7.jpg"
            alt="sime pink flowers"
          />
          <img
            src="src/oldassets/galleryImages/8.jpg"
            alt="big rocks with some trees"
          />
          <img
            src="src/oldassets/galleryImages/9.jpg"
            alt="a waterfall, a lot of tree and a great view from the sky"
          />
          <img
            src="src/oldassets/galleryImages/10.jpg"
            alt="a cool landscape"
          />
          <img
            src="src/oldassets/galleryImages/11.jpg"
            alt="inside a town between two big buildings"
          />
          <img
            src="src/oldassets/galleryImages/4.jpg"
            alt="a great view of the sea above the mountain"
          />
        </div>
      </div>
    </div>
  );
}
