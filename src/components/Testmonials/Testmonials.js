import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import useAnimationOnScroll from '../Animation/useAnimationOnScroll'; 
import "./Testimonials.css" // Correct the path to your custom hook

const Testimonials = () => {
  const headingRef = useRef(null); // Reference for the heading
  const swiperRef = useRef(null); // Reference for the swiper container

  // Apply the animation on scroll hook to the heading and swiper container
  useAnimationOnScroll(headingRef);
  useAnimationOnScroll(swiperRef);

  return (
    <section className="pt-new position-relative">
      <div
        className="background-position-center-top background-no-repeat position-absolute h-100 w-100 left-0px top-0px"
        style={{ backgroundColor: "#f9f9f9" }}
      ></div>
      <div className="container position-relative">
        <div
          className="row justify-content-center mb-8 lg-mb-8px"
          data-anime='{"opacity":[0,1],"duration":600,"delay":0,"staggervalue":300,"easing":"easeOutQuad"}'
        >
          <div className="col-xl-4 col-md-5" ref={headingRef}>
            <h2 className="alt-font text-dark-gray mb-30px fw-600 ls-minus-05px">
              We are trusted by our clients
              <i className="bi bi-heart-fill d-inline-block align-top ms-10px animation-zoom icon-very-medium text-red"></i>
            </h2>
            <div className="d-flex md-mb-25px">
              <div className="slider-one-slide-prev-1 text-dark-gray swiper-button-prev slider-navigation-style-04 border border-1 border-color-extra-medium-gray bg-white">
                <i className="fa fa-arrow-left"></i>
              </div>
              <div className="slider-one-slide-next-1 text-dark-gray swiper-button-next slider-navigation-style-04 border border-1 border-color-extra-medium-gray bg-white">
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div
            className="col-xl-6 col-md-7 overflow-hidden offset-xl-2"
            ref={swiperRef} // Apply ref to the swiper container
          >
            <Swiper
              modules={[Navigation, Autoplay, Keyboard]}
              slidesPerView={1}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".slider-one-slide-next-1",
                prevEl: ".slider-one-slide-prev-1",
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                992: { slidesPerView: 1 },
              }}
            >
              <SwiperSlide>
                <h5 className="text-dark-gray mb-15px w-95 xl-w-100 lh-40 ls-minus-1px alt-font">
                  Working with this SEO team has been a{" "}
                  <span className="text-decoration-line-bottom-medium fw-700">
                    game-changer
                  </span>
                  . Our website's traffic has doubled. Their strategies are incredibly effective.
                </h5>
                <span className="text-gradient-purple-pink fw-700 text-uppercase ls-1px">
                  @Krishna Reddy
                </span>
              </SwiperSlide>

              <SwiperSlide>
                <h5 className="text-dark-gray mb-15px w-95 xl-w-100 lh-40 ls-minus-1px alt-font">
                  Working with this social media marketing team has been{" "}
                  <span className="text-decoration-line-bottom-medium fw-700">
                    remarkable.
                  </span>
                  Their strategies consistently deliver outstanding results.
                </h5>
                <span className="text-gradient-purple-pink fw-700 text-uppercase ls-1px">
                  @Venkat Kumar
                </span>
              </SwiperSlide>

              <SwiperSlide>
                <h5 className="text-dark-gray mb-15px w-95 xl-w-100 lh-40 ls-minus-1px alt-font">
                  Absolutely amazing theme with an{" "}
                  <span className="text-decoration-line-bottom-medium fw-700">
                    awesome
                  </span>{" "}
                  design and so easy to customize. Perfect for anyone looking to create a unique and professional website.
                </h5>
                <span className="text-gradient-purple-pink fw-700 text-uppercase ls-1px">
                  @Sai Sumanth
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
