import React from "react";
import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SocialMedia = () => {
  return (
    <>
      {/* Social Media Marketing Section */}
      <section className="top-space-margin">
        <div className="container">
          <div className="row">
            <motion.div
              className="col-md-12 text-center text-md-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px">
                Social Media
              </div>
            </motion.div>
            <div className="col-12">
              <div className="row align-items-center align-items-lg-end">
                <motion.div
                  className="col-lg-6 col-md-6 text-center text-md-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px">
                    Marketing
                  </div>
                </motion.div>
                <motion.div
                  className="col-lg-4 last-paragraph-no-margin md-mt-30px"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                  <p className="w-95 md-w-80 mx-auto text-center text-lg-start lg-w-100">
                    We are renowned for our expertise in social media
                    marketing, meticulously crafting campaigns that define
                    unique brand identities and drive unparalleled success in
                    the digital sphere.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Marketing Image Section */}
      <section id="down-section" className="pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <motion.div
              className="col-lg-6 md-mb-40px"
              initial={{ opacity: 0, scale: 1.1, rotateX: 50 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <figure className="position-relative m-0">
                <img
                  src="assets/img/social-media-marketing-concept-marketing-with-applications (1).jpg"
                  alt=""
                  className="w-100 border-radius-5px"
                />
              </figure>
            </motion.div>
            <motion.div
              className="col-xl-5 offset-xl-1 col-lg-6 col-md-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <h3 className="fw-600 text-dark-gray mb-20px ls-minus-2px alt-font">
                Elevate Your Brand with Social Media Marketing!
              </h3>
              <p className="w-95 md-w-100 mb-35px">
                Our expert social media marketing solutions are tailored to
                enhance your brand's online presence and engagement. From
                strategic content creation to targeted audience engagement, we
                optimize every aspect of your social media strategy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Advertising Section */}
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center mb-7 sm-mb-40px">
            <motion.div
              className="col-xl-5 col-lg-6 col-md-10 md-mb-50px"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="fw-600 text-dark-gray ls-minus-2px alt-font">
                Maximize Your Impact with Social Media Ads!
              </h3>
              <p className="w-95 md-w-100 mb-35px">
                Experience the full potential of social media advertising to
                expand your brand's reach and drive conversions. We target your
                ideal audience precisely, ensuring maximum engagement.
              </p>
            </motion.div>
            <motion.div
              className="col-lg-6 offset-xl-1 position-relative z-index-1"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <figure className="position-relative m-0">
                <img src="assets/img/adv.jpg" alt="" className="w-100 border-radius-5px" />
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Swiper Slider Section */}
      {/* <section className="p-0 full-screen position-relative overflow-hidden">
        <div className="container-fluid p-0 h-100 position-relative">
          <div className="row h-100 g-0">
            <div className="col-xl-7 col-lg-6 position-relative">
              <Swiper
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                effect="fade"
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                className="swiper h-100 banner-slider"
              >
                <SwiperSlide>
                  <div
                    className="position-absolute w-100 h-100 cover-background"
                    style={{
                      backgroundImage: "url('assets/img/slider_01.jpg')",
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="position-absolute w-100 h-100 cover-background"
                    style={{
                      backgroundImage: "url('assets/img/slider_02.jpg')",
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="position-absolute w-100 h-100 cover-background"
                    style={{
                      backgroundImage: "url('assets/img/slider_03.jpg')",
                    }}
                  ></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default SocialMedia;
