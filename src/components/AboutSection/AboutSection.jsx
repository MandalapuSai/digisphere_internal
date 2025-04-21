import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import "./AboutSection.css";

const AboutSection = () => {

  useEffect(() => {
    // Animation for the image section (fade in and stagger effect)
    anime({
      targets: ".image-animation", // Targets all images with class `image-animation`
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 600,
      delay: anime.stagger(300), // Stagger delay for images
      easing: "easeOutQuad",
    });

    // Animation for the text section (fade in and translate effect)
    anime({
      targets: ".text-animation", // Targets all text elements with class `text-animation`
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 600,
      delay: 0,
      easing: "easeOutQuad",
    });

    // Animation for the shadowed image (parallax effect)
    anime({
      targets: ".shadow-image", // Targets the image with class `shadow-image`
      translateY: [20, -20], // Parallax effect (up and down)
      duration: 6000,
      loop: true, // Looping animation
      easing: "easeInOutQuad",
    });

  }, []);

  return (
    <section className="pt-new">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-lg-6 position-relative">
            <div className="row align-items-center position-relative md-mb-15">
              <div className="col-md-5 sm-mb-30px image-animation shadow-image">
                <img
                  style={{ width: "224px", height: "279px" }}
                  className="w-100"
                  src="/assets/img/group.jpg"
                  alt="Group"
                />
              </div>
              <div className="col-lg-7 col-md-7 sm-mb-30px text-end image-animation shadow-image">
                <img
                  style={{ width: "261px", height: "312px" }}
                  src="/assets/img/group_02.jpg"
                  alt="Group 2"
                  className="box-shadow-quadruple-large md-w-100"
                />
              </div>
              <div className="w-50 sm-w-100 overflow-hidden position-absolute sm-position-relative left-140px bottom-minus-200px sm-bottom-0px sm-left-0px p-0 shadow-image">
                <img
                  style={{ width: "305px", height: "375px" }}
                  src="/assets/img/group_03.jpg"
                  alt="Group 3"
                  className="box-shadow-quadruple-large w-100"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="col-xl-5 col-lg-6 offset-xl-1 md-mt-20 sm-mt-0">
            <div className="mb-10px">
              <span className="w-25px h-1px d-inline-block bg-gradient-sky-blue-purple-transparent me-5px align-middle"></span>
              <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle text-animation">
                About Digisphere Tech
              </span>
            </div>
            <h4 className="text-dark-gray alt-font fw-600 ls-minus-05px mb-20px text-animation">
              We provide brilliant ideas to elevate your business's success and drive growth.
            </h4>
            <p className="w-90 md-w-100 mb-35px sm-mb-20px text-animation">
              We offer a range of services, including digital marketing, web application development, and social media marketing.
              Our expertise extends to business consulting, providing valuable insights to optimize operations.
              With tailored solutions, we empower businesses to thrive in today's dynamic market.
            </p>

            <Link
              to="/about"
              className="btn btn-large btn-dark-gray btn-switch-text btn-box-shadow border-1 left-icon me-10px sm-mb-15px sm-mt-15px text-animation"
            >
              <span>
                <span>
                  <i className="feather icon-feather-edit"></i>
                </span>
                <span className="btn-double-text Explore" data-text="Explore details">
                  Explore details
                </span>
              </span>
            </Link>

            <Link
              to="/services"
              className="btn btn-large btn-transparent-light-gray border-1 btn-switch-text left-icon services sm-mb-15px sm-mt-15px text-animation"
            >
              <span>
                <span>
                  <i className="feather icon-feather-briefcase"></i>
                </span>
                <span className="btn-double-text " data-text="More services">
                  More services
                </span>
              </span>
            </Link> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
