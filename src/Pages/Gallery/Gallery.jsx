import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
export default function Gallery() {
  return (
    <div id="gallery" style={{ textAlign: "center" }}>
      <h1 style={{ color: "white", margin: "30px", fontSize: "3rem" }}>
        GALLERY
      </h1>
      <div className="gallery-container">
        <div className="gallery">
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942075/JSCOP6.0/4_bvmlzs.jpg" alt="" />
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942084/JSCOP6.0/11_yfdjou.jpg" alt="" />
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942124/JSCOP6.0/24_vwo5b4.jpg" alt="" />
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942079/JSCOP6.0/13_pfpkfw.jpg" alt="" />
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942138/JSCOP6.0/17_un3i4d.jpg" alt="" />
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942077/JSCOP6.0/15_ivygop.jpg" alt="" />
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942109/JSCOP6.0/16_brb5st.jpg" alt="" />
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942080/JSCOP6.0/14_ykxh0p.jpg" alt="" />
          <img src="https://res.cloudinary.com/dnqsoxydq/image/upload/v1713942123/JSCOP6.0/22_bjp2np.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
