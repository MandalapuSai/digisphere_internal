import React from 'react';

const WorkWithCompaniesSection = () => {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 md-mb-20px sm-mb-0"
               data-anime='{ "el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <h3 className="text-dark-gray fw-600 ls-minus-05px alt-font">We work with companies and businesses to ensure they shine.</h3>
          </div>
          <div className="col-lg-7"
               data-anime='{ "el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="row">
              <div className="col-md-5">
                <div className="fs-19 fw-600 text-dark-gray w-90 xl-w-100 sm-mb-10px">Successfully finished projects with creativity.</div>
              </div>
              <div className="col-md-7 last-paragraph-no-margin">
                <p>We have a track record of successfully finishing projects with creativity, delivering innovative solutions and exceeding expectations.</p>
              </div>
            </div>
            <div className="separator-line-1px border-bottom border-color-extra-medium-gray mt-35px mb-35px"></div>
            <div className="row">
              <div className="col-md-5">
                <div className="fs-19 fw-600 text-dark-gray w-90 xl-w-100 sm-mb-10px">Work together for better branding solutions.</div>
              </div>
              <div className="col-md-7 last-paragraph-no-margin">
                <p>We collaborate closely with our clients to develop innovative solutions, working together to achieve greater success in the market.</p>
              </div>
            </div>
            <div className="separator-line-1px border-bottom border-color-extra-medium-gray mt-35px mb-35px"></div>
            <div className="row">
              <div className="col-md-5">
                <div className="fs-19 fw-600 text-dark-gray w-90 xl-w-100 sm-mb-10px">Committed to deliver unique digital media.</div>
              </div>
              <div className="col-md-7 last-paragraph-no-margin">
                <p>We are dedicated to delivering distinctive digital media experiences that captivate and engage audiences, ensuring lasting impact and success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkWithCompaniesSection;