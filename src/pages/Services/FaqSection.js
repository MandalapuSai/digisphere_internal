import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Handle accordion toggle
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section>
      <div className="container">
        <div
          className="row align-items-center mt-8 sm-mt-40px"
          data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="col-12">
            <div className="bg-linen p-9 md-p-6 xs-p-9 border-radius-6px overflow-hidden position-relative">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                  Basic information
                </span>
              </div>
              <h3 className="alt-font fw-600 text-dark-gray ls-minus-1px">Frequently asked questions</h3>
              <div className="accordion accordion-style-02" id="accordion-style-02">
                {/* Start Accordion Item 1 */}
                <div className="accordion-item">
                  <div className="accordion-header border-bottom border-color-transparent-dark-very-light">
                    <a
                      // href="#"
                      onClick={() => toggleAccordion(0)}
                    >
                      <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                        <i className={`feather fs-20 ${activeAccordion === 0 ? 'icon-feather-minus' : 'icon-feather-plus'}`}></i>
                        <span className="fw-500">
                          How do you stay updated with the latest trends and algorithms in digital marketing?
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className={`accordion-collapse collapse ${activeAccordion === 0 ? 'show' : ''}`}>
                    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent-dark-very-light">
                      <p className="w-90 sm-w-95 xs-w-100">
                        Our team regularly attends industry conferences, participates in training programs, and conducts continuous research to stay abreast of the latest trends, algorithms, and best practices in digital marketing.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Accordion Item 1 */}

                {/* Start Accordion Item 2 */}
                <div className="accordion-item">
                  <div className="accordion-header border-bottom border-color-transparent-dark-very-light">
                    <a
                      // href="#"
                      onClick={() => toggleAccordion(1)}
                    >
                      <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                        <i className={`feather fs-20 ${activeAccordion === 1 ? 'icon-feather-minus' : 'icon-feather-plus'}`}></i>
                        <span className="fw-500">
                          How do you ensure the security and privacy of our data during application development?
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}>
                    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent-dark-very-light">
                      <p className="w-90 sm-w-95 xs-w-100">
                        We prioritize security and privacy throughout the development process, implementing industry-standard encryption, secure authentication protocols, and compliance with relevant regulations such as GDPR.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Accordion Item 2 */}

                {/* Start Accordion Item 3 */}
                <div className="accordion-item">
                  <div className="accordion-header border-bottom border-color-transparent">
                    <a
                      // href="#"
                      onClick={() => toggleAccordion(2)}
                    >
                      <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                        <i className={`feather fs-20 ${activeAccordion === 2 ? 'icon-feather-minus' : 'icon-feather-plus'}`}></i>
                        <span className="fw-500">
                          How do you identify and target our ideal audience through social media marketing?
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className={`accordion-collapse collapse ${activeAccordion === 2 ? 'show' : ''}`}>
                    <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent">
                      <p className="w-90 sm-w-95 xs-w-100">
                        We utilize advanced audience targeting techniques, demographic analysis, psychographic profiling, and data segmentation to identify and target your ideal audience with relevant content and ads on social media platforms.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Accordion Item 3 */}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <i className="bi bi-envelope text-dark-gray d-inline-block align-middle icon-extra-medium me-5px"></i>
            <div className="fs-18 text-dark-gray d-inline-block align-middle fw-500">
              Save your precious time and effort spent for finding a solution.{" "}
              <Link to="/contact" className="text-dark-gray text-decoration-line-bottom fw-600">
                Contact us now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
