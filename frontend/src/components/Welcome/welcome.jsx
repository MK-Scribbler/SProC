import React, { useEffect } from 'react';
import Parallax from 'parallax-js'; // Import Parallax.js
import './welcome.css'; // Assuming your CSS file is named style.css

const HomePage = () => {
  useEffect(() => {
    // Initialize Parallax
    const parallaxElement = document.getElementById('parallax');
    if (parallaxElement) {
      const parallaxInstance = new Parallax(parallaxElement, {
        invertX: true,
        invertY: true,
        scalarX: 15,
        frictionY: 0.1,
      });

      // Cleanup function to destroy the Parallax instance when the component unmounts
      return () => parallaxInstance.destroy();
    }

    // Initialize Particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div>
      {/* Star background */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* Parallax text/java */}
      <div id="parallax">
        <div className="layer" data-depth="0.6">
          <div className="some-space">
            <h1>Welcome to SProC</h1>
          </div>
        </div>
        <div className="layer" data-depth="0.4">
          <div id="particles-js"></div>
        </div>
        <div className="layer" data-depth="0.3">
          <div className="some-more-space1">
            <a href="https://codepen.io/figo-kolsteren" target="_blank" rel="noopener noreferrer">
              Continue to website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Parallax from 'parallax-js';
// import './welcome.css';

// const HomePage = () => {
//   useEffect(() => {
//     const parallaxElement = document.getElementById('parallax');
//     if (parallaxElement) {
//       const parallaxInstance = new Parallax(parallaxElement, {
//         invertX: true,
//         invertY: true,
//         scalarX: 15,
//         frictionY: 0.1,
//       });

//       return () => parallaxInstance.destroy();
//     }

//     if (window.particlesJS) {
//       window.particlesJS('particles-js', {
//         // Particles.js configuration...
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <div id="stars"></div>
//       <div id="stars2"></div>
//       <div id="stars3"></div>

//       <div id="parallax">
//         <div className="layer" data-depth="0.6">
//           <div className="some-space">
//             <h1>Welcome to SProC</h1>
//           </div>
//         </div>
//         <div className="layer" data-depth="0.4">
//           <div id="particles-js"></div>
//         </div>
//         <div className="layer" data-depth="0.3">
//           <div className="some-more-space1">
//             <Link to="/pseudo">Continue to website</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
