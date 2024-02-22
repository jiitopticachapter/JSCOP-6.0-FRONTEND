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
        {/* <Parallax strength={-600} bgImage={bg}>
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
            </div> */}
            <div className='heading'>WHAT OPTICA DOES ?</div>
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              fuga quibusdam. Voluptates itaque maiores odio quaerat esse animi
              corrupti consequatur asperiores voluptatum laborum. Aperiam magni
              eligendi molestias, ipsam, soluta nam veritatis assumenda,
              necessitatibus deleniti harum maiores modi nobis! Unde eaque nulla
              amet cupiditate tempora, quaerat itaque officiis incidunt quis
              possimus!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus labore sed quibusdam sequi tenetur vero at accusantium ratione esse dolore magni voluptates alias, minus quod amet dolor expedita aliquid? Rem, explicabo voluptatibus velit recusandae dolorum et aut pariatur, natus, vero quidem laudantium quas illum dolore? Maiores, beatae. Quos aliquid culpa dolor doloribus, maxime totam accusantium commodi harum libero repellendus hic soluta. Ipsa assumenda maxime perspiciatis sequi. Labore maiores vero fugiat porro temporibus magnam quod, aliquid reiciendis accusamus nisi beatae cumque cum dignissimos ducimus alias ipsum tenetur neque fuga iusto, possimus eaque velit molestiae? Excepturi, doloremque vel molestias sunt fugiat omnis?
            </div>
          {/* </div>
        </Parallax> */}
      </div>
    </>
  );
};

export default About;
