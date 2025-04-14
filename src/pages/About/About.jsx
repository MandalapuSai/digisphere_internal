// src/pages/About.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    // Animate the title and paragraphs on mount
    gsap.from(".about-title", {
      opacity: 100,
      y: 30,
      duration: 1,
      ease: "power2.out"
    });
    gsap.from(".about-paragraph", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      stagger: 0.2
    });
  }, []);

  return (
    <div>
      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Image */}
            <div className="col-md-6">
              <img
                src="/assets/img/about_us.jpg" 
                alt="About Digisphere Tech"
                className="img-fluid"
              />
            </div>
            {/* Right: Text */}
            <div className="col-md-6">
              <h2 className="about-title">About Digisphere Tech</h2>
              <p className="about-paragraph">
                Digisphere Tech is a leading provider of innovative digital solutions that help businesses grow. 
              </p>
              <p className="about-paragraph">
                With years of experience in digital marketing, web development, and strategic planning, our team is committed to delivering excellence.
              </p>
              <p className="about-paragraph">
                We create impactful digital experiences that drive success and enable our clients to thrive in a competitive marketplace.
              </p>
              <Link to="/contact" className="btn btn-primary mt-3">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section: Values/Mission */}
      <section className="about-values py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h3 className="about-title">Our Mission</h3>
              <p className="about-paragraph">
                Empower businesses with cutting-edge digital solutions.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="about-title">Our Vision</h3>
              <p className="about-paragraph">
                To be the leading partner in digital transformation.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="about-title">Our Values</h3>
              <p className="about-paragraph">
                Innovation, Integrity, and Customer Success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;