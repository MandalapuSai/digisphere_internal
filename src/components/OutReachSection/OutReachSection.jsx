import React, { useRef } from 'react';
import useAnimationOnScroll from '../Animation/useAnimationOnScroll'; // Correct path to your custom hook

const OutreachSection = () => {
  const titleRef = useRef(null); // Reference for the title
  const accordionRef = useRef(null); // Reference for the accordion section
  const statsRef = useRef(null); // Reference for the stats section

  // Apply the scroll animation hook
  useAnimationOnScroll(titleRef);
  useAnimationOnScroll(accordionRef);
  useAnimationOnScroll(statsRef);

  return (
    <section className="pb-0">
      <div className="container">
        {/* Top Row - Heading and Accordion */}
        <div className="row mb-6">
          {/* Left Column: Title */}
          <div
            className="col-xl-5 col-md-6 animated-scroll"
            ref={titleRef} // Apply ref to the title element
          >
            <div className="mb-10px">
              <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
              <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                Outreach Services
              </span>
            </div>
            <h4 className="text-dark-gray alt-font fw-600 w-90 ls-minus-05px">
              We create impactful outreach by merging app, consulting, and social media.
            </h4>
          </div>

          {/* Right Column: Accordion */}
          <div
            className="offset-xl-1 col-xl-5 col-md-6 animated-scroll"
            ref={accordionRef} // Apply ref to the accordion section
          >
            <div
              className="accordion accordion-style-02"
              id="accordion-style-02"
              data-active-icon="icon-feather-minus"
              data-inactive-icon="icon-feather-plus"
            >
              {/* Accordion Item 1 */}
              <div className="accordion-item active-accordion">
                <h2 className="accordion-header border-bottom border-color-dark-gray">
                  <button
                    className="accordion-button bg-transparent px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-style-02-01"
                    aria-expanded="true"
                    aria-controls="accordion-style-02-01"
                  >
                    <div className="accordion-title mb-0 position-relative text-dark-gray d-flex align-items-center">
                      <span className="fw-600 alt-font fs-18">Research and strategy</span>
                    </div>
                  </button>
                </h2>
                <div
                  id="accordion-style-02-01"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-body last-paragraph-no-margin border-bottom border-color-dark-gray">
                    <p>
                      We strive to develop real-world web solutions that are ideal for small to large projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header border-bottom border-color-dark-gray">
                  <button
                    className="accordion-button collapsed bg-transparent px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-style-02-02"
                    aria-expanded="false"
                    aria-controls="accordion-style-02-02"
                  >
                    <div className="accordion-title mb-0 position-relative text-dark-gray d-flex align-items-center">
                      <span className="fw-600 alt-font fs-18">Wireframes and design</span>
                    </div>
                  </button>
                </h2>
                <div
                  id="accordion-style-02-02"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-body last-paragraph-no-margin border-bottom border-color-dark-gray">
                    <p>
                      We develop wireframes and designs for projects of all sizes, delivering practical web solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header border-bottom border-color-transparent">
                  <button
                    className="accordion-button collapsed bg-transparent px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-style-02-03"
                    aria-expanded="false"
                    aria-controls="accordion-style-02-03"
                  >
                    <div className="accordion-title mb-0 position-relative text-dark-gray d-flex align-items-center">
                      <span className="fw-600 alt-font fs-18">Maintenance and support</span>
                    </div>
                  </button>
                </h2>
                <div
                  id="accordion-style-02-03"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion-style-02"
                >
                  <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent">
                    <p>
                      We provide maintenance and support for the ongoing success of digital projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats/Info Blocks */}
        <div
          className="row row-cols-1 row-cols-lg-4 row-cols-md-2 counter-style-04 animated-scroll"
          ref={statsRef} // Apply ref to the stats section
        >
          {[ 
            { title: "years of experience.", text: "We have years of experience across various services and projects." },
            { title: "Valuable happy clients.", text: "We have the privilege of serving valuable, happy clients." },
            { title: "Presence in countries.", text: "We have a widespread global presence." },
            { title: "Worldwide projects.", text: "We manage global projects efficiently." },
          ].map((item, index) => (
            <div key={index} className="col last-paragraph-no-margin text-center text-md-start md-mb-30px">
              <span className="alt-font fw-600 d-block mb-5px text-dark-gray fs-18">{item.title}</span>
              <p className="w-90 sm-w-100 sm-ps-15 sm-pe-15">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutreachSection;
