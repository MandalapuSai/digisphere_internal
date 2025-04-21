// BannerSection.js
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import anime from "animejs";
import "./Banner.css";

const BannerSection = () => {
  const textRef = useRef(null);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: textRef.current,
            opacity: [0, 1],
            translateY: [50, 0],
            filter: ["blur(20px)", "blur(0px)"],
            duration: 800,
            easing: "easeOutQuad",
          });

          anime({
            targets: blockRef.current.querySelectorAll(".anime-child"),
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            delay: anime.stagger(200),
            easing: "easeOutQuad",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (blockRef.current) observer.observe(blockRef.current);
  }, []);

  return (
    <section className="p-0 full-screen position-relative overflow-hidden">
      <div className="container-fluid p-0 h-100 position-relative">
        <div className="row h-100 g-0">
          {/* Left Content */}
          <div className="col-xl-5 col-lg-6 d-flex justify-content-center flex-column ps-10 position-relative order-2 order-lg-1">
            <div className="vertical-title-center align-items-center w-75px justify-content-center position-absolute h-auto d-none d-md-flex">
              <div
                className="title fs-16 alt-font text-dark-gray fw-700 text-uppercase ls-05px mirrored-title"
                ref={textRef}
              >
                Digital Growth Hub: Strategic Solutions
              </div>
            </div>
            <div
              className="ps-5 ms-5 position-relative z-index-9"
              ref={blockRef}
            >
              <h1 className="head text-dark-gray fw-600 alt-font ls-minus-05px anime-child">
                Grow with Our Integrated Services.
              </h1>
              <p className="w-75 mb-4 anime-child">
                Innovating Solutions with Real impact. We Elevate Your Business
                to Victory.
              </p>
              <Link
                to="/contact"
                className="btn btn-extra-large bg-gradient-sky-blue-purple-transparent text-white anime-child"
              >
                Let's talk - Send a message
              </Link>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="col-xl-7 col-lg-6 position-relative order-1 order-lg-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              effect="fade"
              className="banner-slider"
            >
              <SwiperSlide>
                <img src="/assets/img/slider_01.jpg" alt="Slide 1" className="slide-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/img/slider_02.jpg" alt="Slide 2" className="slide-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/img/slider_03.jpg" alt="Slide 3" className="slide-img" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BannerSection;
