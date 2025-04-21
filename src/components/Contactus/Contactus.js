import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Correct import for Link
import "./Contactus.css";
import FadeUpSection from "../../components/FadeUp/FadeUp";
import "./../../components/FadeUp/FadeUp.css"

const Contactus = () => {
  return (
    <>
      {/* Banner Section */}
      <motion.section 
        className="relative overflow-hidden top-space-margin space"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container-fluid h-100">
          <div className="row g-0">
            {/* Text on the Left */}
            <motion.div
              className="col-xl-4 col-lg-5 d-flex justify-content-center align-items-center pe-10 order-1 order-lg-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="border-end border-gray-400 pe-10 content">
                <h2 className="text-dark-gray font-bold">
                  We're here to answer any questions you may have.
                </h2>
              </div>
            </motion.div>

            {/* Image on the Right */}
            <motion.div
              className="col-xl-8 col-lg-7 position-relative order-2 order-lg-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
              <img
                src="assets/img/question_01.jpg"
                alt="Contact Banner"
                className="w-100 banner-image question-img"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <FadeUpSection>
      {/* Contact Details Section */}
      <motion.section 
        className="container mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >









        <div className="row">
          {/* Hyderabad */}
          <motion.div 
            className="col-md-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-dark-gray">Hyderabad</h3>
            <p>Ameerpet, Telangana, Hyderabad, 500016</p>
            <p><strong>Email:</strong> info@digispheretech.in</p>
            <p><strong>Phone:</strong> (+91) 814-387-9627</p>
            <Link to="https://maps.app.goo.gl/xBC4Ssx7tQHPE3ydA" target="_blank" rel="noopener noreferrer" className="custom-link">
              <i className="feather icon-feather-map-pin"></i> {/* Location Icon */}
              View on Google Map
            </Link>
          </motion.div>
       
          {/* Vijayawada */}

          <motion.div 
            className="col-md-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-dark-gray">Vijayawada</h3>
            <p>Ramavarappadu, Andhra Pradesh, Vijayawada, 520010</p>
            <p><strong>Email:</strong> info@digispheretech.in</p>
            <p><strong>Phone:</strong> (+91) 814-387-9627</p>
            <Link to="https://maps.app.goo.gl/bPCTbuZB3YZKLaZC7" target="_blank" rel="noopener noreferrer" className="custom-link">
              <i className="feather icon-feather-map-pin"></i> {/* Location Icon */}
              View on Google Map
            </Link>
          </motion.div>
     
        </div>
       
      </motion.section>
      </FadeUpSection>

      {/* Contact Form Section */}
      <motion.section 
        className="container-fluid p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <div className="row g-0">
          {/* Background Image */}
          <div 
            className="col-lg-6 bg-cover" 
            // style={{ backgroundImage: "url('assets/img/hand-shaking_01.jpg')" }}
          >
            <motion.img
              src="assets/img/hand-shaking_01.jpg"
              alt="img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              className="w-100"
            />
          </div>

          {/* Contact Form */}
          <div className="col-lg-6 p-5">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            >
              We'd love to hear from you!
            </motion.h2>
            <form>
              <motion.input
                type="text"
                placeholder="Your name*"
                className="form-control mb-3"
                required
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.input
                type="email"
                placeholder="Your email address*"
                className="form-control mb-3"
                required
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              />
              <motion.textarea
                placeholder="Your message"
                className="form-control mb-3"
                rows="3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              />
              <motion.button
                type="submit"
                className="btn btn-dark w-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contactus;
