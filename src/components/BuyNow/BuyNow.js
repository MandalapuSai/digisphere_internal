import React, { useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP for animations
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BuyNow = () => {

  useEffect(() => {
    // Animate Banner Text and Image (Smooth)
    gsap.fromTo(
      ".banner-title", 
      { opacity: 0, y: -60 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );

    gsap.fromTo(
      ".banner-subtitle", 
      { opacity: 0, x: -40 }, 
      { opacity: 1, x: 0, duration: 1.2, delay: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".banner-img", 
      { opacity: 0, x: 40 }, 
      { opacity: 1, x: 0, duration: 1.2, delay: 0.5, ease: "power2.out" }
    );

    // Scroll-triggered Animation for Product Cards (Smooth Fade & Move)
    gsap.utils.toArray(".product-card").forEach((card) => {
      gsap.fromTo(
        card, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 2, 
          ease: "power2.out", 
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // When the top of the card reaches 80% of the viewport height
            end: "top 60%", // End the animation when the card is fully visible
            scrub: 0.5, // Slight delay to make the scroll effect smoother
            toggleActions: "play none none reverse", // Reverse animation when scrolling back
          }
        }
      );
    });

    // Scroll-triggered Animation for Product Descriptions (Smooth Slide & Fade)
    gsap.utils.toArray(".product-card p").forEach((description) => {
      gsap.fromTo(
        description, 
        { opacity: 0, x: -30 }, 
        { 
          opacity: 1, 
          x: 0, 
          duration: 2, 
          ease: "power2.out", 
          scrollTrigger: {
            trigger: description,
            start: "top 80%",
            end: "top 60%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Button Hover Effect (Smooth Scaling and Fading)
    gsap.fromTo(
      ".primary_btn_1", 
      { scale: 1, opacity: 0.8 }, 
      { 
        scale: 1.05, 
        opacity: 1, 
        duration: 1, 
        ease: "easeInOut", 
        repeat: -1, 
        yoyo: true, 
        paused: true
      }
    );

  }, []);

  return (
    <>
      {/* Start Banner */}
      <section className="p-0 top-space-margin position-relative overflow-hidden">
        <div className="container-fluid p-0 h-100 position-relative">
          <div className="row g-0">
            <div className="col-xl-4 col-lg-5 d-flex justify-content-center align-items-center ps-10 xxl-ps-6 xl-ps-4 md-ps-4 sm-ps-0 position-relative order-2 order-lg-1">
              <div className="vertical-title-center align-items-center justify-content-center flex-shrink-0 w-75px sm-w-50px">
                <h1 className="title banner-title fs-15 alt-font text-dark-gray fw-700 text-uppercase ls-1px m-0">
                  LinkStand
                </h1>
              </div>
              <div className="border-start border-color-extra-medium-gray ps-40px sm-ps-20px position-relative z-index-9">
                <h2 className="text-dark-gray fw-600 alt-font outside-box-right-10 xl-outside-box-right-15 lg-outside-box-right-20 md-me-0 sm-mb-0 ls-minus-3px banner-subtitle">
                  The Smart Standee for the Digital Age
                </h2>
                <p className="fs-30 alt-font ls-minus-05px fw-700 text-dark-gray">Tap, Scan, Connect</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 position-relative one-half-screen order-1 order-lg-2 md-mb-50px">
              <div className="overflow-hidden position-relative">
                <img src="assets/img/link_1.jpg" alt="LinkStand" className="w-100 liquid-parallax banner-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner */}

      {/* Start Section */}
      <section>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {[ 
              { name: "LinkStand Lite", desc: "A budget-friendly version for basic QR functionality.", img: "assets/img/LinkStand_lite.jpg" },
              { name: "LinkStand Pro", desc: "A refined version with advanced materials and features.", img: "assets/img/LinkStand_pro.jpg" }
            ].map((item, index) => (
              <div className="col product-card" key={index}>
                <span className="fs-30 alt-font ls-minus-05px fw-700 text-dark-gray">{item.name}</span>
                <p className="w-70 mb-10px lg-w-90 md-w-100">{item.desc}</p>
                <div className="materialsoimg">
                  <img src={item.img} alt={item.name} className="img-fluid" />
                </div>
                <div className="primary_btn_1_warpper">
                  <a href="/cart">
                    <button type="button" className="primary_btn_1" style={{ width: '230px' }}>Choose & Pay Now</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container lightweight_wapper1 mt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {[ 
              { name: "LinkStand NFC", desc: "Pay by tapping one small electronic device to another.", img: "assets/img/LinkStand_b1.jpg" },
              { name: "LinkStand NFC", desc: "NFC is a wireless radio communications standard.", img: "assets/img/LinkStand_b2.jpg" }
            ].map((item, index) => (
              <div className="col product-card" key={index}>
                <span className="fs-30 alt-font ls-minus-05px fw-700 text-dark-gray">{item.name}</span>
                <p className="w-70 mb-10px lg-w-90 md-w-100">{item.desc}</p>
                <div className="materialsoimg">
                  <img src={item.img} alt={item.name} className="img-fluid" />
                </div>
                <div className="primary_btn_1_warpper">
                  <a href="/cart">
                    <button type="button" className="primary_btn_1" style={{ width: '230px' }}>Choose & Pay Now</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Section */}
    </>
  );
};

export default BuyNow;
