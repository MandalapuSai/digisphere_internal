import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js'; // Import anime.js for animations
import './Banners.css'; // Make sure the styles are applied

const Banner = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  // Animation trigger using IntersectionObserver
  useEffect(() => {
    const section = sectionRef.current;

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animation for Title
          anime({
            targets: titleRef.current,
            opacity: [0, 1],
            translateY: [50, 0],
            filter: ["blur(20px)", "blur(0px)"],
            duration: 400,
            easing: 'easeOutQuad',
          });

          // Animation for Image
          anime({
            targets: imageRef.current,
            translateX: [100, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuad',
          });

          // Additional animation on section entrance (if needed)
          anime({
            targets: section,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutQuad',
          });

          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, { threshold: 0.5 });

    observer.observe(section); // Start observing the section

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-0 top-space-margin top-space position-relative overflow-hidden"
    >
      <div className="container-fluid p-0 h-100 position-relative">
        <div className="row g-0">
          {/* Left Column with Title */}
          <div
            className="col-xl-4 col-lg-5 d-flex justify-content-center align-items-center ps-10 xxl-ps-6 xl-ps-4 md-ps-4 sm-ps-0 position-relative order-2 order-lg-1"
          >
            <div className="vertical-title-center align-items-center justify-content-center flex-shrink-0 w-75px sm-w-50px">
              <h1
                ref={titleRef}
                className="title fs-15 alt-font text-dark-gray fw-700 text-uppercase ls-1px text-uppercase d-flex w-auto align-items-center m-0"
              >
                About DigiSphere Tech
              </h1>
            </div>
            <div className="border-start border-color-extra-medium-gray ps-40px sm-ps-20px position-relative z-index-9">
              <h2 className="text-dark-gray fw-600 alt-font outside-box-right-10 xl-outside-box-right-15 lg-outside-box-right-20 md-me-0 sm-mb-0 ls-minus-05px">
                We are working on delivering unique visual solutions.
              </h2>
            </div>
          </div>

          {/* Right Column with Image */}
          <div className="col-xl-8 col-lg-7 position-relative one-half-screen order-1 order-lg-2 md-mb-50px">
            <div className="overflow-hidden position-relative">
              <div
                ref={imageRef}
                className="w-100"
              >
                <img
                  src="assets/img/hands.jpg"
                  alt="Hands Image"
                  className="w-100 liquid-parallax"
                  data-parallax-liquid="true"
                  data-parallax-position="top"
                  data-parallax-scale="1.05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
