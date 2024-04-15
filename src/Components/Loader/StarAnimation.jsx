// import React, { useEffect, useState } from 'react';
// import './StarAnimation.css';
// const StarsAnimation = () => {
//   const [showStars, setShowStars] = useState(false);
//   const [showMidLabel, setShowMidLabel] = useState(false);

//   useEffect(() => {
//     const timer1 = setTimeout(() => {
//       setShowStars(true);
//     }, 5000);

//     const timer2 = setTimeout(() => {
//       setShowMidLabel(true);
//     }, 14000);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, []);

//   const createStars = () => {
//     const stars = [];
//     for (let i = 0; i < 70; i++) {
//       stars.push(
//         <React.Fragment key={i}>
//           <div data-star1 style={generateStar1Styles()}></div>
//           <div data-star2 style={generateStar2Styles()}></div>
//           <div data-star3 style={generateStar3Styles()}></div>
//         </React.Fragment>
//       );
//     }
//     return stars;
//   };

//   const generateStar1Styles = () => {
//     return {
//       '--a': `${Math.random() * 260}vmax`,
//       '--b': `${Math.random() * 360}deg`,
//       animationDelay: `${Math.random() * 2.5 - 0.5}s`
//     };
//   };

//   const generateStar2Styles = () => {
//     return {
//       '--a': `${Math.random() * 260}vmax`,
//       '--b': `${Math.random() * 360}deg`,
//       animationDelay: `${Math.random() * 2.5}s`
//     };
//   };

//   const generateStar3Styles = () => {
//     return {
//       '--a': `${Math.random() * 160}vmax`,
//       '--b': `${Math.random() * 360}deg`,
//       animationDelay: `${Math.random() * 2.5 + 0.1}s`
//     };
//   };

//   return (
//     <div>
//       <div className={showStars ? "space" : "display-none"}>{createStars()}</div>
//       {showMidLabel && (
//         <div className="mid-label">
//           <div className="mid-label__text">Have a nice day!</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StarsAnimation;
