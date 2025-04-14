import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const DigitalMarketingSection = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1000, easing: 'ease-out-quart' });
  }, []);

  return (
    <section className="pt-0">
      <div className="container">
      
        <div className="row">
          <div
            className="col-md-8 sm-mb-30px"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="position-relative">
              <img style={{ width: '782px', height: '450px' }} src="assets/img/Marketing_01.jpg" alt="" />
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="position-relative">
              <img style={{ width: '377px', height: '449px' }} src="assets/img/Marketing_02.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
