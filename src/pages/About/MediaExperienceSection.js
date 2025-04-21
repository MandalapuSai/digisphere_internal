import React, { useEffect } from 'react';
import anime from 'animejs';
import './MediaExperienceSection.css';

const MediaExperienceSection = () => {
  useEffect(() => {
    // IntersectionObserver to trigger the progress bar animation
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;

          // Trigger progress bar animation when it comes into view
          if (element.classList.contains('animate-progress-bar')) {
            // Find all progress bars within the element
            const progressBars = element.querySelectorAll('.progress-bar');
            
            // Animate each progress bar's width based on the aria-valuenow attribute
            progressBars.forEach(bar => {
              const targetWidth = bar.getAttribute('aria-valuenow') + '%';

              // Trigger animation for the progress bar width
              anime({
                targets: bar,
                width: ['0%', targetWidth], // Animate from 0% to the aria-valuenow value
                duration: 1500,
                easing: 'easeOutQuad',
              });
            });
          }

          // Stop observing the element once the animation has been triggered
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    // Start observing the section with the class "animate-on-scroll"
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

  }, []);

  return (
    <section className="py-0">
      <div className="container">
        <div className="row align-items-center position-relative">
          {/* Image Section */}
          <div className="col-lg-6">
            <div
              className="outside-box-left-20 md-outside-box-left-0 overflow-hidden position-relative"
              data-parallax-liquid="true"
              data-parallax-transition="2"
              data-parallax-position="top"
            >
              <div
                className="liquid-parallax"
                data-parallax-liquid="true"
                data-parallax-position="bottom"
                data-parallax-scale="1.1"
                data-parallax-scale-fraction="0.0001"
              >
                <img className="w-100" src="assets/img/create_highly.jpg" alt="Creative media" />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div
            className="col-xl-5 col-lg-6 offset-xl-1 z-index-9 md-mt-50px animate-on-scroll animate-progress-bar"
          >
            <h1 className="text-dark-gray alt-font mb-50px fw-600 ls-minus-05px md-mb-25px outside-box-left-15 md-outside-box-left-0 word-break-normal md-w-80 sm-w-100">
              We create highly unique digital media experiences.
            </h1>
            <p className="fs-20 fw-500 ls-minus-05px text-dark-gray mb-15px">
              Our team is committed to delivering measurable results and achieving tangible success.
            </p>
            <p className="w-90 md-w-100 mb-35px">
              With a client base exceeding 1000, our services have established themselves as a trusted and reliable partner in delivering exceptional solutions.
            </p>

            {/* Progress Bars */}
            <div className="progress-bar-style-02 mb-40px animate-on-scroll animate-progress-bar">
              <div className="progress mb-15px border-radius-50px fw-600 fs-11 lh-12 text-white bg-white">
                <div
                  className="progress-bar bg-gradient-purple-transparent m-0"
                  role="progressbar"
                  aria-valuenow="98"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="business-growth"
                >
                  <span className="percentage98 text-purple">98%</span>
                </div>
                <div className="progress-bar-title text-uppercase">Business growth</div>
              </div>

              <div className="progress border-radius-50px fw-600 fs-11 lh-12 text-white bg-white">
                <div
                  className="progress-bar bg-gradient-navy-transparent m-0"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="new-technology"
                >
                  <span className="percentage85 text-blue">85%</span>
                </div>
                <div className="progress-bar-title text-uppercase">New technology</div>
              </div>
            </div>

            {/* Feature Box */}
            <div className="pt-20px pb-20px ps-30px pe-30px xs-p-15px border border-color-extra-medium-gray border-radius-6px mb-15px icon-with-text-style-08 w-90 lg-w-100">
              <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                <div className="feature-box-icon me-10px">
                  <i className="bi bi-people icon-very-medium text-dark-gray"></i>
                </div>
                <div className="feature-box-content">
                  <span className="alt-font fs-19 ls-minus-05px fw-600 text-dark-gray d-block lh-26">
                    10k+ people trusting our services.
                  </span>
                </div>
              </div>
            </div>

            <p className="fs-13 mb-0">
              We are excited for our work and how it{' '}
              <span className="text-dark-gray text-decoration-line-bottom">positively</span> impacts clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaExperienceSection;
