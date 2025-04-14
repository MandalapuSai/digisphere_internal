import React, { useEffect } from "react";
import anime from "animejs";

const ProcessSteps = () => {
  useEffect(() => {
    anime({
      targets: ".process-step-style-06",
      translateX: [30, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(300),
      easing: "easeOutQuad",
    });
  }, []);

  return (
    <section
      className="pt-0 border-top border-color-extra-medium-gray mt-6 md-mt-0 sm-border-top-0"
      style={{ border: "2px solid red", padding: "20px" }}
    >
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-0">
          {/* Process Step 1 */}
          <div className="col process-step-style-06 last-paragraph-no-margin hover-box sm-mb-50px">
            <div className="process-step-icon-box position-relative top-minus-14px">
              <span className="progress-step-separator bg-light-gray w-100 separator-line-1px opacity-1"></span>
              <div className="step-box d-flex align-items-center justify-content-center bg-white border-radius-100 w-25px h-25px position-relative border border-color-extra-medium-gray box-shadow-large">
                <span className="w-7px h-7px bg-dark-gray border-radius-100"></span>
              </div>
            </div>
            <span className="d-block alt-font text-dark-gray fw-600 mb-10px mt-15px fs-22 lh-28 ls-minus-05px w-60 lg-w-75 md-w-100">
              Over 336+ success projects.
            </span>
            <p className="w-60 lg-w-75 md-w-100 sm-w-100">
              We create engaging web designs that perfectly match the needs of your target audience.
            </p>
          </div>

          {/* Process Step 2 */}
          <div className="col process-step-style-06 last-paragraph-no-margin hover-box sm-mb-50px">
            <div className="process-step-icon-box position-relative top-minus-14px">
              <span className="progress-step-separator bg-light-gray w-100 separator-line-1px opacity-1"></span>
              <div className="step-box d-flex align-items-center justify-content-center bg-white border-radius-100 w-25px h-25px position-relative border border-color-extra-medium-gray box-shadow-large">
                <span className="w-7px h-7px bg-dark-gray border-radius-100"></span>
              </div>
            </div>
            <span className="d-block alt-font text-dark-gray fw-600 mb-10px mt-15px fs-22 lh-28 ls-minus-05px w-60 lg-w-75 md-w-100">
              Over 316+ happy clients and counting.
            </span>
            <p className="w-60 lg-w-75 md-w-100 sm-w-100">
              Join our growing list of over 316 happy clients and experience our exceptional service today.
            </p>
          </div>

          {/* Process Step 3 */}
          <div className="col process-step-style-06 last-paragraph-no-margin hover-box">
            <div className="process-step-icon-box position-relative top-minus-14px">
              <span className="progress-step-separator bg-light-gray w-100 separator-line-1px opacity-1"></span>
              <div className="step-box d-flex align-items-center justify-content-center bg-white border-radius-100 w-25px h-25px position-relative border border-color-extra-medium-gray box-shadow-large">
                <span className="w-7px h-7px bg-dark-gray border-radius-100"></span>
              </div>
            </div>
            <span className="d-block alt-font text-dark-gray fw-600 mb-10px mt-15px fs-22 lh-28 ls-minus-05px w-60 lg-w-75 md-w-100">
              Our presence in over 5+ States.
            </span>
            <p className="w-60 lg-w-75 md-w-100 sm-w-100">
              Spanning across 5+ States, our extensive presence allows us to cater to diverse markets and cultures with our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
