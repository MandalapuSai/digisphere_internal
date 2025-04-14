import React from "react";
import "./MarqueeSection.css"; // Import CSS for smooth scrolling

const MarqueeSection = () => {
  return (
    <section className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          <span>Grow with Our Integrated Services -</span>
          <span>Innovating Solutions with Real Impact. We Elevate Your Business to Victory. -</span>
          <span>Grow with Our Integrated Services -</span>
          <span>Innovating Solutions with Real Impact. We Elevate Your Business to Victory. </span>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;