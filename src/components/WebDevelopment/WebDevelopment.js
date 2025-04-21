import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUpSection from "../../components/FadeUp/FadeUp";
import "./../../components/FadeUp/FadeUp.css"
// import "./WebDesign.css"; // Ensure you have this CSS file for styles

gsap.registerPlugin(ScrollTrigger);

// ServiceSection Component
const ServiceSection = ({ title, description, image, reverse, subtitle }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className={`col-lg-6 ${reverse ? "order-lg-2" : ""}`}>
            <figure className="position-relative m-0">
              <img
                src={image}
                alt={title}
                className="w-100 border-radius-5px"
                ref={imageRef}
              />
            </figure>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
            <div className="mb-10px">
              <span className="w-25px h-1px d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                {subtitle}
              </span>
            </div>
            <h3 className="fw-600 text-dark-gray mb-20px ls-minus-2px alt-font">
              {title}
            </h3>
            <p className="w-95 md-w-100 mb-35px">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};


// WebDevelopment Component
const WebDevelopment = () => {
  return (
    <div>
      <section className="top-space-margin text-center text-md-start">
        <div className="container">
          <div className="row">
            <div className="col-md-12" data-anime='{"opacity": [0,1], "duration": 600}'>
              <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px">
                Web Development Services
              </div>
              <p className="w-95 md-w-100 mb-35px">
                Being one of the top web development companies in India, we understand the need for adapting to the latest technologies, features, and trends and find it our responsibility to make use of cutting-edge technologies to offer you the best solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FadeUpSection>
      <ServiceSection
        title="Content Management System"
        subtitle="Be the master of your own website"
        description="Be the master of your own website. Upgrade yourself from the conventional way of approaching the company when you need modifications. Make the website look the way you want by making changes as you please."
        image="assets/img/cms_1.jpg"
      />
     </FadeUpSection>
     <FadeUpSection>
      <ServiceSection
        title="B2B Platforms"
        subtitle="Go online, boost your business"
        description="Nurture business by collaborating with clients online. Businesses have been compelled to make their presence felt online. The best strategy and optimal solution can help you traverse through today’s challenging market scenario."
        image="assets/img/cms_2.WebP"
        reverse
      />
       </FadeUpSection>
       <FadeUpSection>
      <ServiceSection
        title="A one-stop-solution for your business needs"
        subtitle="ERP / CRM"
        description="Run businesses hassle-free with unique ERP solutions. We strive to serve you well with custom-made solutions which are apt for your business needs. Achieve business efficiency by exploring the benefits offered by technology."
        image="assets/img/cms_3.png"
      />
       </FadeUpSection>
       <FadeUpSection>
      <ServiceSection
        title="Backend Solutions"
        subtitle="Data is vital, so is its management"
        description="Our services ensure round-the-clock availability and performance of your business-critical databases. We monitor, manage, and ensure optimal performance of the database environment. Our clients also benefit from the reports we generate."
        image="assets/img/cms_4.png"
        reverse
      />
       </FadeUpSection>
 
    </div>
  );
};

export default WebDevelopment;
