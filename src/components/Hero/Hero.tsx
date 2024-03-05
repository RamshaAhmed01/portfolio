import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <div className="hero-section position-relative text-center" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Text Container */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: 'white', whiteSpace: 'nowrap' }}>
        <span className="fadeInAnimation first-part">
          <h1>Igor, a Front-End Developer!</h1>
        </span>
        <span className="fadeInAnimation second-part">
        <h1>Engage with Emojis: Discover Collaboration Fun!</h1>
        </span>
      </div>
      {/* Spline/Iframe Container */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}>
        <Spline scene="https://prod.spline.design/G8IwoLAAuBd3pmS7/scene.splinecode" />
      </div>
    </div>
  );
};

export default Hero;
