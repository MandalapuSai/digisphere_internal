import React from 'react';

const MediaExperienceSection = () => {
  return (
    <section className="py-0">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-6">
            <div className="outside-box-left-20 md-outside-box-left-0 overflow-hidden position-relative"
                 data-parallax-liquid="true" data-parallax-transition="2" data-parallax-position="top">
              <div className="liquid-parallax" data-parallax-liquid="true" data-parallax-position="bottom"
                   data-parallax-scale="1.1" data-parallax-scale-fraction="0.0001">
                <img className="w-100" src="assets/img/create_highly.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1 z-index-9 md-mt-50px"
               data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'>
            <h1 className="text-dark-gray alt-font mb-50px fw-600 ls-minus-05px md-mb-25px outside-box-left-15 md-outside-box-left-0 word-break-normal md-w-80 sm-w-100">
              We create highly unique digital media experiences.
            </h1>
            <p className="fs-20 fw-500 ls-minus-05px text-dark-gray mb-15px">
              Our team is committed to delivering measurable results and achieving tangible success.
            </p>
            <p className="w-90 md-w-100 mb-35px">
              With a client base exceeding 1000 our services has established itself as a trusted and reliable partner in delivering exceptional services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaExperienceSection;
