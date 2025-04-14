import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Correct import for Link
import "./Contactus.css"

const Contactus = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden top-space-margin space ">
        <div className="container-fluid h-100">
          <div className="row g-0">
            {/* Text on the Left */}
            <motion.div
              className="col-xl-4 col-lg-5 d-flex justify-content-center align-items-center pe-10 order-1 order-lg-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
              transition={{ duration: 1 }}
            >
              <img
                src="assets/img/question_01.jpg"
                alt="Contact Banner"
                className="w-100 banner-image question-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="container mt-5">
        <div className="row">
          {/* Hyderabad */}
          <div className="col-md-6">
            <h3 className="text-dark-gray">Hyderabad</h3>
            <p>Ameerpet, Telangana, Hyderabad, 500016</p>
            <p><strong>Email:</strong> info@digispheretech.in</p>
            <p><strong>Phone:</strong> (+91) 814-387-9627</p>
            <Link to="https://maps.app.goo.gl/xBC4Ssx7tQHPE3ydA" target="_blank" rel="noopener noreferrer" className="custom-link">
              <i className="feather icon-feather-map-pin"></i> {/* Location Icon */}
              View on Google Map
            </Link>
          </div>

          {/* Vijayawada */}
          <div className="col-md-6">
            <h3 className="text-dark-gray">Vijayawada</h3>
            <p>Ramavarappadu, Andhra Pradesh, Vijayawada, 520010</p>
            <p><strong>Email:</strong> info@digispheretech.in</p>
            <p><strong>Phone:</strong> (+91) 814-387-9627</p>
            <Link to="https://maps.app.goo.gl/bPCTbuZB3YZKLaZC7" target="_blank" rel="noopener noreferrer" className="custom-link">
              <i className="feather icon-feather-map-pin"></i> {/* Location Icon */}
              View on Google Map
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container-fluid p-5">
        <div className="row g-0">
          {/* Background Image */}
          <div 
          // className="col-lg-6 bg-cover" 
          style={{ backgroundImage: "url('assets/img/hand-shaking_01.jpg')" }}></div>

          {/* Contact Form */}
          <div className="col-lg-6 p-5">
            <h2>We'd love to hear from you!</h2>
            <form>
              <input type="text" placeholder="Your name*" className="form-control mb-3" required />
              <input type="email" placeholder="Your email address*" className="form-control mb-3" required />
              <textarea placeholder="Your message" className="form-control mb-3" rows="3"></textarea>
              <button type="submit" className="btn btn-dark w-100">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
