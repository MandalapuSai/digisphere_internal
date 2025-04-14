import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ApplicationDevelopment.css";

gsap.registerPlugin(ScrollTrigger);

const ApplicationDevelopment = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* App Development Section */}
      <section className="top-space-margin" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-md-start">
              <div className="section-title">App Development</div>
            </div>
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 text-center text-md-start">
                  <div className="section-title">Services</div>
                </div>
                <div className="col-lg-4">
                  <p className="section-description">
                    We provide top-tier application development services, crafting customized solutions that emphasize your brand’s uniqueness and drive success in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Development Section */}
      <section className="pt-0" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <figure>
                <img src="https://img.freepik.com/free-photo/online-shopping-cart-e-commers-concept_53876-127436.jpg" alt="E-commerce Development" className="section-image" />
              </figure>
            </div>
            <div className="col-lg-6">
              <h3 className="section-heading">Transform Your Store with Expert E-commerce Dev!</h3>
              <p className="section-description">
                We create customized, user-friendly e-commerce platforms that cater to your business needs, ensuring seamless performance and robust functionality. Let us build a powerful online store that drives sales and fosters customer loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Production Section */}
      <section ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <h3 className="section-heading">Ignite Your Brand with Dynamic Video Production!</h3>
              <p className="section-description">
                Leverage our expert video production services to captivate your audience and elevate your brand’s online impact. Let us amplify your brand’s presence and unlock its full potential in the digital realm.
              </p>
            </div>
            <div className="col-lg-6">
              <figure>
                <img src="assets/img/video.jpeg" alt="Video Production" className="section-image" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Services Section */}
      <section className="pt-0" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <figure>
                <img src="assets/img/testimonial.jpg" alt="Testimonials" className="section-image" />
              </figure>
            </div>
            <div className="col-lg-6">
              <h3 className="section-heading">Amplify Trust with Dynamic Testimonial Services!</h3>
              <p className="section-description">
                Benefit from our expert testimonial services to strengthen credibility and enhance your brand's online reputation. Let us elevate your brand’s online presence and maximize its potential in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplicationDevelopment;
