import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FadeUpSection from "../../components/FadeUp/FadeUp";
import "./../../components/FadeUp/FadeUp.css"
// import "./SocialMedia.css"; // Assuming you have a CSS file for custom styles

gsap.registerPlugin(ScrollTrigger);

const SocialMedia = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 }, // Initial state: opacity = 0, y-axis offset
        {
          opacity: 1,
          y: 0,
          duration: 1, // Duration of the animation
          ease: "power2.out", // Smooth ease-in-out effect
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Trigger when top of section is 80% from the viewport
            toggleActions: "play none none reverse", // Actions when entering and leaving the viewport
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section className="top-space-margin" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-md-start">
              <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px">
                Social Media
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-center align-items-lg-end">
                <div className="col-lg-6 col-md-6 text-center text-md-start">
                  <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px">
                    Marketing
                  </div>
                </div>
                <div className="col-lg-4 last-paragraph-no-margin md-mt-30px">
                  <p className="w-95 md-w-80 mx-auto text-center text-lg-start lg-w-100">
                    We are renowned for our expertise in social media marketing, meticulously crafting campaigns that define unique brand identities and drive unparalleled success in the digital sphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     <FadeUpSection>
      <section className="pt-0" ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 md-mb-40px">
              <figure className="position-relative m-0">
                <img
                  src="assets/img/social-media-marketing-concept-marketing-with-applications (1).jpg"
                  alt="Social Media Marketing"
                  className="w-100 border-radius-5px"
                />
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
              <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
              <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                SOCIAL MEDIA MARKETING
              </span>
              <h3 className="fw-600 text-dark-gray mb-20px ls-minus-2px alt-font">
                Elevate Your Brand with Social Media Marketing!
              </h3>
              <p className="w-95 md-w-100 mb-35px">
                Our expert social media marketing solutions are tailored to enhance your brand's online presence and engagement. From strategic content creation to targeted audience engagement, we optimize every aspect of your social media strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeUpSection>
      
      {/* Second Section */}
      
     <FadeUpSection>
      <section ref={(el) => sectionsRef.current.push(el)}>
        <div className="container">
          <div className="row align-items-center justify-content-center mb-7 sm-mb-40px">
            <div className="col-xl-5 col-lg-6 col-md-10 md-mb-50px">
              <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
              <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                SOCIAL MEDIA ADVERTISING
              </span>
              <h3 className="fw-600 text-dark-gray ls-minus-2px alt-font">
                Maximize Your Impact with Social Media Ads!
              </h3>
              <p className="w-95 md-w-100 mb-35px">
                Experience the full potential of social media advertising to expand your brand's reach and drive conversions. We target your ideal audience precisely, ensuring maximum engagement.
              </p>
            </div>
            <div className="col-lg-6 offset-xl-1 position-relative z-index-1">
              <figure className="position-relative m-0">
                <img
                  src="assets/img/adv.jpg"
                  alt="Social Media Advertising"
                  className="w-100 border-radius-5px"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      </FadeUpSection>

    </>
  );
};

export default SocialMedia;
