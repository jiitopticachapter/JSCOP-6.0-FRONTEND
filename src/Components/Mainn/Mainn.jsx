import React, { useState } from 'react';
import './Mainn.css'; // Import your CSS file

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { back: 'JIIT', text: 'WE PRESENT' },
    { back: 'JSCOP 6.0', text: 'The best fest' },
    { back: 'OPTICA', text: 'In search of all enthusiasts' },
    { back: 'PHYSICS', text: 'Thrilling experience' }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === activeIndex ? 'active' : ''}`}>
          <div className="panel">
            <div className="top" data-back={slide.back}></div>
            <div className="bottom" data-back={slide.back}></div>
          </div>
          <div className="center">
            <h1>{slide.text}</h1>
          </div>
        </div>
      ))}
      <button onClick={nextSlide}>Next</button> {/* Add a button for manual control */}
    </div>
  );
}

export default Slider;
