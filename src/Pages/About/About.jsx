import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import './About.css';
import bg from '../../assets/aboutBG.jpg';
import rocket from '../../assets/rocket.svg';

const About = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = () => {
    setScrollOffset(window.scrollY);
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="about">
        <Parallax strength={-600} bgImage={bg}>
          <div className="content">
            <div className="left">
              <Parallax strength={500}>
                <div>
                  <img
                    className="rocket"
                    src={rocket}
                    alt="rocket"
                    style={{
                      transform: `translateY(-${scrollOffset * 1.5}px)`,
                    }}
                  />
                </div>
              </Parallax>
            </div>
            <div className="right">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              fuga quibusdam. Voluptates itaque maiores odio quaerat esse animi
              corrupti consequatur asperiores voluptatum laborum. Aperiam magni
              eligendi molestias, ipsam, soluta nam veritatis assumenda,
              necessitatibus deleniti harum maiores modi nobis! Unde eaque nulla
              amet cupiditate tempora, quaerat itaque officiis incidunt quis
              possimus!
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default About;
