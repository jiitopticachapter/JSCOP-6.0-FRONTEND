import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

// import image1 from "../../assets/galleryImages/4.jpeg";
// import image8 from "../../assets/galleryImages/11.jpeg";
// import image9 from "../../assets/galleryImages/24.jpeg";
// import image10 from "../../assets/galleryImages/13.jpeg";
// import image11 from "../../assets/galleryImages/14.jpeg";
// import image12 from "../../assets/galleryImages/15.jpeg";
// import image13 from "../../assets/galleryImages/16.jpeg";
// import image14 from "../../assets/galleryImages/17.jpeg";
// import image22 from "../../assets/galleryImages/22.jpeg";

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
