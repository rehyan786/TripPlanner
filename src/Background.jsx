import React from 'react'
import Hero from './components/custom/Hero';

function Background() {
  return (
    <div className="video-container">
    <video autoPlay loop muted playsInline className="background-video">
      <source src="/4410402-hd_1920_1080_30fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
   <Hero />
  </div>
);
};

export default Background