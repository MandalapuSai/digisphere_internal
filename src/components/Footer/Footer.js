import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import "./Footer.css";

const FooterLogo = "/assets/img/logo2_footer.webp";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: footerRef.current.querySelectorAll(".animate-footer"),
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: anime.stagger(200),
            easing: "easeOutQuad",
          });
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-charcoal-blue pb-4 sm-pb-50px footer-links"
      style={{
        backgroundImage: "url(/assets/images/demo-branding-agency-pattern.svg)",
      }}
    >
      <div className="container">
        <div className="row mb-6 animate-footer">
          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 sm-mb-30px order-2 order-md-1">
            <h3 className="text-white fw-500 alt-font mb-50px ls-minus-1px sm-mb-30px">
              Let's collaborate to create something remarkable
            </h3>
            <div className="row">
              <div className="col-lg-5 col-6 contact">
                <span className="alt-font fs-14 text-uppercase d-block text-white ls-1px lh-24">
                  Contact our office
                </span>
                <a href="tel:+918143879627">+91 814 387-9627</a>
              </div>
              <div className="col-lg-5 col-6 mail">
                <span className="alt-font fs-14 text-uppercase d-block text-white ls-1px lh-24">
                  Send a message
                </span>
                <a href="mailto:info@digispheretech.in">info@digispheretech.in</a>
              </div>
            </div>
            <ul className="extra-large-icon fw-600 social-media pt-15px animate-footer">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/Digispheretech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand-icon fa-brands fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://x.com/_Digispheretech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand-icon fa-brands fa-x-twitter"></span>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/company/digisphere-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand-icon fa-brands fa-linkedin"></span>
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/digispheretech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="brand-icon fa-brands fa-instagram"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-md-2 col-6 order-3 order-md-2 animate-footer">
            <span className="alt-font fs-14 text-uppercase mb-5px d-block text-white ls-1px">
              Company
            </span>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">Vision</Link></li>
              <li><Link to="/about">Mission</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-6 order-3 order-md-2 animate-footer">
            <span className="alt-font fs-14 text-uppercase mb-5px d-block text-white ls-1px">Policies</span>
            <ul>
              <li><Link to="/privacypolicy">Terms and Conditions</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/privacypolicy">Refund and Cancellation</Link></li>
              <li><Link to="/privacypolicy">Return Policy</Link></li>
              <li><Link to="/privacypolicy">Shipping Policy</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-6 order-3 order-md-3 animate-footer">
            <span className="alt-font fs-14 text-uppercase mb-5px d-block text-white ls-1px">Our Solutions</span>
            <ul>
              <li><Link to="/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/application-development">App Development</Link></li>
              <li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
              <li><Link to="/services">Search Engine Optimization</Link></li>
            </ul>
          </div>

          <div className="col-md-2 order-1 order-md-4 sm-mb-30px animate-footer">
            <ul>
              <li>
                <Link to="/" className="footer-logo">
                  <img src={FooterLogo} alt="Footer Logo" />
                </Link>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/xBC4Ssx7tQHPE3ydA" target="_blank" rel="noopener noreferrer">
                  Hyderabad, Ameerpet, Telangana, 500016
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/bPCTbuZB3YZKLaZC7" target="_blank" rel="noopener noreferrer">
                  Vijayawada, Ramavarappadu, Andhra Pradesh, 520010
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(170, 170, 170, 0.733)", textDecoration: "none" }}>
            &copy; 2024 Powered by <Link to="/" style={{ color: "rgba(170, 170, 170, 0.733)" }}>Digisphere Tech</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
