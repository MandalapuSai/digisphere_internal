import React, { useEffect } from 'react';

const OurVision = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-anime]');
      elements.forEach(element => {
        // const animation = JSON.parse(element.getAttribute('data-anime'));
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        } else {
          element.style.opacity = 0;
          element.style.transform = 'translateY(30px)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check for animations when the page loads

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="down-section" className="pt-0">
      <div className="container">
        <div className="row align-items-center justify-content-center" data-anime='{ " perspective": 1200 }'>
          <div className="col-lg-6 md-mb-40px"
            data-anime='{ "translateY": [0, 0], "zoom": [1.1, 1], "rotateX": [50, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <figure className="position-relative m-0">
              <img style={{ width: '580px', height: '400px' }} src="assets/img/our_mission.jpg" alt="" className="w-100 border-radius-5px" />
            </figure>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="mb-10px">
              <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
              <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                Our vision</span>
            </div>
            <h3 className="fw-600 text-dark-gray mb-20px ls-minus-05px alt-font">
              Visionary Digital Empowerment!
            </h3>
            <p className="w-95 md-w-100 mb-35px">
              Our vision is to empower businesses to thrive in the digital era by pioneering solutions that redefine industry standards. Through innovative technologies and strategic insights, we aspire to be the catalyst for our clients' success, driving growth, and fostering lasting relationships in the digital realm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
