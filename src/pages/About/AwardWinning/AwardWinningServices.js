import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import "./AwardWinningServices.css"
import FadeUpSection from '../../../components/FadeUp/FadeUp';
import "../../../components/FadeUp/FadeUp.css"

const AwardWinningServices = () => {
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
    <FadeUpSection>
    <section className="pt-0">
      <div className="container">
        <div className="row mb-17 sm-mb-30px">
          <div className="col-lg-6 position-relative">
            <div className="row align-items-center position-relative md-mb-15"
              data-anime='{ "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
              <div className="col-md-5 sm-mb-30px" data-bottom-top="transform: translateY(50px)"
                data-top-bottom="transform: translateY(-50px)">
                <img style={{ width: '224px', height: '279px' }} src="assets/img/success_03.jpg" alt="" />
              </div>
              <div className="col-lg-7 col-md-7 sm-mb-30px text-end"
                data-bottom-top="transform: translateY(-30px)"
                data-top-bottom="transform: translateY(30px)">
                <img style={{ width: '261px', height: '312px' }} src="assets/img/success_01.jpg" alt=""
                  className="box-shadow-quadruple-large md-w-80 sm-w-100" />
              </div>
              <div className="w-50 sm-w-100 overflow-hidden position-absolute sm-position-relative left-140px bottom-minus-200px sm-bottom-0px sm-left-0px p-0 sm-ps-15px sm-pe-15px"
                data-shadow-animation="true" data-animation-delay="100"
                data-bottom-top="transform: translateY(20px)"
                data-top-bottom="transform: translateY(-20px)">
                <img style={{ width: '305px', height: '375px' }} src="assets/img/success_02.jpg" alt=""
                  className="box-shadow-quadruple-large w-100 image-success" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1 md-mt-20 sm-mt-0"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="mb-10px">
              <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
              <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                Award winning Services</span>
            </div>
            <h4 className="text-dark-gray alt-font fw-600 ls-minus-05px mb-20px">
              We provide brilliant ideas and adding the world called success to your brand.
            </h4>
            <p className="w-90 md-w-100 mb-35px sm-mb-20px">
              Creating products with a strong identity. We provide brilliant ideas and adding the world called success brand. We deliver customized marketing campaign to use your audience to make a positive move.
            </p>
            <Link to="/contact" className="btn btn-large btn-dark-gray btn-switch-text btn-box-shadow border-1 left-icon me-10px sm-mb-15px sm-mt-15px">
  <span>
    <span><i className="feather icon-feather-send"></i></span>
    <span className="btn-double-text lets" data-text="Let's talk now">Let's talk now</span>
  </span>
</Link>
<Link to="/contact" className=" more btn btn-large btn-transparent-light-gray border-1 btn-switch-text left-icon sm-mb-15px sm-mt-15px">
              <span>
                <span><i className="feather icon-feather-briefcase"></i></span>
                <span className="btn-double-text  " data-text="More services">More services</span>
              </span>
              </Link>
          </div>
        </div>
      </div>
    </section>
    </FadeUpSection>
  );
};

export default AwardWinningServices;
