import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom"; // Using react-router for location tracking
import "./FadeUp.css"; // Add your CSS for animations here

const FadeUpSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const location = useLocation();  // Get the current location (route)

  useEffect(() => {
    // You can reset state or trigger a new observer calculation here if needed
    if (ref.current) {
      // Reset classes to trigger fade-up effect
      ref.current.classList.remove('in-view');
    }
  }, [location.key]);  // Reset when route changes

  return (
    <div
      ref={ref}
      key={location.key}  // Force a re-render when location (route) changes
      className={`fade-up-container ${inView ? "in-view" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeUpSection;
