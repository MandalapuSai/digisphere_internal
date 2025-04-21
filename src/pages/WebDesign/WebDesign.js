import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WebDesign.css"; // Ensure you have this CSS file for styles
import FadeUpSection from "../../components/FadeUp/FadeUp";
import "./../../components/FadeUp/FadeUp.css"

gsap.registerPlugin(ScrollTrigger);

const WebDesign = () => {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Scroll animation for sections (minimal fade-in & subtle slide-up)
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 }, // Slightly slide up
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Image fade-in effect
    imagesRef.current.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      {/* Web Design Section */}
      <section className="top-space-margin" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-md-start">
              <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px">
                Web Design
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-center align-items-lg-end">
                <div className="col-lg-6 col-md-6 text-center text-md-start">
                  <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-8px sm-ls-minus-2px">
                    Services
                  </div>
                </div>
                <div className="col-lg-4">
                  <p className="w-95 md-w-80 mx-auto text-center text-lg-start lg-w-100">
                    Proficient designers of digispheretech provide strategic
                    designs that complement the customer's brand and accomplish
                    their goals. As an accomplished web design & development
                    company in India, we assist companies in developing across
                    the web with our astounding and operational websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <FadeUpSection>
      {/* UI Designing */}
      <section className="pt-0" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 md-mb-40px">
              <figure className="position-relative m-0">
                <img
                  src="assets/img/ct_01.jpg"
                  alt="UI Designing"
                  className="w-100 border-radius-5px"
                  ref={(el) => imagesRef.current.push(el)}
                />
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 text-uppercase">
                  Experience Creativity
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray mb-20px alt-font">UI Designing</h3>
              <p>
                A quality website is all about user experience. A perfect digital
                interface is critical to leaving a lasting impression on online
                visitors. Choose the best design, and you're halfway to achieving
                customer delight.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeUpSection>
      <FadeUpSection>
      {/* Responsive Web Design */}
      <section ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center mb-7">
            <div className="col-xl-5 col-lg-6 col-md-10 md-mb-50px">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 text-uppercase">
                  Be future-ready
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray alt-font">Responsive Web Design</h3>
              <p>
                Run applications across multiple devices and ensure the website adapts
                to each user’s device—desktop, tablet, or smartphone. Resize the
                content and imagery effectively for a seamless experience.
              </p>
            </div>
            <div className="col-lg-6">
              <figure className="position-relative m-0">
                <img
                  src="assets/img/ct_02.jpg"
                  alt="Responsive Web Design"
                  className="w-100 border-radius-5px"
                  ref={(el) => imagesRef.current.push(el)}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      </FadeUpSection>
      <FadeUpSection>
      {/* Corporate Websites */}
      <section className="pt-0" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 md-mb-40px">
              <figure className="position-relative m-0">
                <img
                  src="assets/img/ct_03.jpg"
                  alt="Corporate Websites"
                  className="w-100 border-radius-5px"
                  ref={(el) => imagesRef.current.push(el)}
                />
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 text-uppercase">
                  Think BIG
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray mb-20px alt-font">Corporate Websites</h3>
              <p>
                Huge businesses leverage internet technologies to win new customers and
                enhance growth. We are passionate about serving big corporations and
                helping them achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeUpSection>
      <FadeUpSection>
      {/* Interactive Web Designing */}
      <section ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center mb-7">
            <div className="col-xl-5 col-lg-6 col-md-10 md-mb-50px">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 text-uppercase">
                  User experience matters
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray alt-font">Interactive Web Designing</h3>
              <p>
                Interactive web design keeps visitors engaged. Advanced design features
                ensure people return to your website frequently.
              </p>
            </div>
            <div className="col-lg-6">
              <figure className="position-relative m-0">
                <img
                  src="assets/img/ct_04.jpg"
                  alt="Interactive Web Designing"
                  className="w-100 border-radius-5px"
                  ref={(el) => imagesRef.current.push(el)}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      </FadeUpSection>
      <FadeUpSection>
      {/* Templates & Blogs */}
      <section className="pt-0" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 md-mb-40px">
              <figure className="position-relative m-0">
                <img
                  src="assets/img/ct_05.jpg"
                  alt="Templates & Blogs"
                  className="w-100 border-radius-5px"
                  ref={(el) => imagesRef.current.push(el)}
                />
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 text-uppercase">
                  Create your own space in the web
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray mb-20px alt-font">Templates & Blogs</h3>
              <p>
                The internet is an essential part of everyone’s life today. What we are is often determined by how we are online. Digisphere handles all kinds of works, be it your personal blog, travelogue, profile page, or anything for that matter. Choose us so that it is the experts who work on showcasing your own profile to the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeUpSection>
      
    </div>
  );
};

export default WebDesign;
