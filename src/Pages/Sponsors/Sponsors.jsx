import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PartnersSlider() {
  useEffect(() => {
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }, []);

  return (
    <div className="container">
      <h2>Our Partners</h2>
      <section className="customer-logos slider">
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="partner" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="partner" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="partner" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="partner" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="partner" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="partner" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="partner" />
        </div>
      </section>
    </div>
  );
}

export default PartnersSlider;
