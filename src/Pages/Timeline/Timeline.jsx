// import React, { useEffect } from 'react';
// import './time.css';

// const Timeline = () => {
//   useEffect(() => {
//     const items = document.querySelectorAll(".timeline-item");

//     const isItemInView = (item) => {
//       const rect = item.getBoundingClientRect();
//       return (
//         rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//     }

//     const callbackFunc = () => {
//       for (let i = 0; i < items.length; i++) {
//         if (isItemInView(items[i])) {
//           items[i].classList.add("show");
//         }
//       }
//     }

//     window.addEventListener("load", callbackFunc);
//     window.addEventListener("resize", callbackFunc);
//     window.addEventListener("scroll", callbackFunc);

//     return () => {
//       window.removeEventListener("load", callbackFunc);
//       window.removeEventListener("resize", callbackFunc);
//       window.removeEventListener("scroll", callbackFunc);
//     };
//   }, []);

//   return (
//     <div className='timeline-body'>
//       <h1 className="timeline-title">Timeline</h1>
//       <div>
//         <ul className="timeline">
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1910</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1920</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1930</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1940</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1950</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1960</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1970</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1980</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//           <li className="timeline-item">
//             <div className="timeline-content">
//               <time>1990</time>
//               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Timeline;
import React, { Component } from 'react';
import "./time.css";

class Timeline extends Component {
  componentDidMount() {
    window.addEventListener("load", this.callbackFunc);
    window.addEventListener("scroll", this.callbackFunc);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.callbackFunc);
    window.removeEventListener("scroll", this.callbackFunc);
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  callbackFunc = () => {
    const items = document.querySelectorAll(".timeline li");
    for (let i = 0; i < items.length; i++) {
      if (this.isElementInViewport(items[i])) {
        if (!items[i].classList.contains("in-view")) {
          items[i].classList.add("in-view");
        }
      } else if (items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
      }
    }
  }

  render() {
    return (
      <>
      <h1 className='heading-timeline'>TIMELINE</h1>
      <section className="timeline">
        <ul>
          <li>
            <div>
              <time>1687</time>
              <div className="discovery">
                <h1>Discovery</h1>
                <p>Laws of motion</p>
              </div>
              <div className="scientist">
                <h1>Scientist</h1>
                <span>Newton</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>1905</time>
              <div className="discovery">
                <h1>Discovery</h1>
                <p>Theory of Relativity</p>
              </div>
              <div className="scientist">
                <h1>Scientist</h1>
                <span>Albert Einstein</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>1953</time>
              <div className="discovery">
                <h1>Discovery</h1>
                <p>Structure of DNA</p>
              </div>
              <div className="scientist">
                <h1>Scientist</h1>
                <span>Watson and Crick</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>1964</time>
              <div className="discovery">
                <h1>Discovery</h1>
                <p>Quarks</p>
              </div>
              <div className="scientist">
                <h1>Scientist</h1>
                <span>Murray Gell-Mann</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <time>1998</time>
              <div className="discovery">
                <h1>Discovery</h1>
                <p>Acceleration of the Universe</p>
              </div>
              <div className="scientist">
                <h1>Scientist</h1>
                <span>Perlmutter, Riess, Schmidt</span>
              </div>
            </div>
          </li>
          {/* Add more list items here */}
        </ul>
      </section>
      </>
    );
  }
}

export default Timeline;
