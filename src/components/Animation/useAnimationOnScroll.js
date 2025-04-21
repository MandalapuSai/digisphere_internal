import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const useAnimationOnScroll = (ref) => {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Initialize IntersectionObserver to detect when the element is in view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply fade-up animation when the element is in the viewport
          anime({
            targets: entry.target,
            opacity: [0, 20], // Fade-in effect
            translateY: [30, 0], // Translate (move) the element upwards
            duration: 800, // Animation duration
            easing: 'easeOutQuad', // Easing function for smooth transition
          });
          observer.unobserve(entry.target); // Stop observing once the animation has been triggered
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(element); // Start observing the target element

    // Cleanup the observer on unmount
    return () => observer.disconnect();
  }, [ref]);
};

export default useAnimationOnScroll;
