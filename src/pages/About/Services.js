import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './Services.css'; // Add your appropriate CSS file

const Services = () => {
  const counterData = [
    { text: "Users on marketplaces we've created in 2024.", value: 23, symbol: '+' },
    { text: "Successfully finished projects with creativity.", value: 31, symbol: '+' },
    { text: "Monthly visitors on our e-Commerce platform.", value: 10000, symbol: '+' },
    { text: "Onboarding conversions growth increased.", value: 55, symbol: '%' },
  ];

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.0001, // Trigger when 50% of the section is visible
  });

  return (
    <section ref={sectionRef} className={sectionInView ? "fadeInSection" : ""}>
      <div className="container">
        <div className="row mb-6 sm-mb-50px">
          <div
            className="col-md-12 text-center text-md-start"
            data-anime='{"opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad"}'>
            <div className="fs-200 xxl-fs-100 sm-fs-60 fw-800 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px"
              data-bottom-top="transform: translate3d(-50px, 0px, 0px);" data-top-bottom="transform: translate3d(50px, 0px, 0px);">
              Integrated Digital
            </div>
          </div>
          <div className="col-12">
            <div className="row align-items-center align-items-lg-end"
              data-bottom-top="transform: translate3d(-30px, 0px, 0px);" data-top-bottom="transform: translate3d(30px, 0px, 0px);">
              <div className="col-lg-3 col-md-4 text-md-end text-center md-mt-30px md-mb-20px"
                data-anime='{"opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad"}'>
                <div className="position-relative">
                  <img src="assets/img/demo-branding-agency-about-01.png" className="animation-rotation position-relative z-index-2" alt="" />
                  <div className="absolute-middle-center w-100 z-index-1">
                    <img src="assets/img/demo-branding-agency-about-02.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 text-center text-md-start"
                data-anime='{"opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad"}'>
                <div className="services fs-200 xxl-fs-100 sm-fs-60 fw-800 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px">
                  Services
                </div>
              </div>
              <div className="col-lg-4 last-paragraph-no-margin md-mt-30px"
                data-anime='{"opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad"}'>
                <p className="w-95 md-w-80 mx-auto text-center text-lg-start sm-w-100">
                  Fusing innovation with identity, we cultivate groundbreaking ideas, shaping successful brands in the digital realm.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 counter-style-04"
          data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
          {counterData.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 feature-box text-start hover-box border-start sm-border border-color-extra-medium-gray ps-35px pe-35px pt-25px pb-25px lg-ps-25px lg-pe-25px md-ps-35px md-pe-35px md-mb-50px sm-mb-30px">
              <div className="feature-box-content">
                <p className="text-dark-gray mb-20 sm-mb-10 fw-500 w-90 fs-17 lh-28">{item.text}</p>
                <h2 className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-25 alt-font mb-0">
                  <i className="feather icon-feather-arrow-up icon-small"></i>
                  <CountUp start={0} end={item.value} duration={2} separator="," />
                  {item.symbol && (
                    <sup className="text-dark-gray top-0">{item.symbol}</sup>
                  )}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
