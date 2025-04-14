import React, { useEffect } from "react";
import "../../assets/css/style.css";



const Home = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    (async () => {
      try {
        await loadScript("/assets/js/jquery.js");
        if (!window.jQuery) {
          console.error("jQuery not loaded!");
          return;
        }
        await loadScript("/assets/js/vendors/bootstrap.bundle.js");
        await loadScript("/assets/js/vendors/gsap.js");
        await loadScript("/assets/js/vendors/smooth-scroll.js");
        await loadScript("/assets/js/vendors/scrollr.js");
        await loadScript("/assets/js/vendors/jquery.mcustomscrollbar.concat.min.js");
        await loadScript("/assets/js/vendors/jquery.magnific-popup.js");
        await loadScript("/assets/js/vendors/particles.js");
        await loadScript("/assets/js/vendors/interactive-portfolio.js");
        await loadScript("/assets/js/vendors/isotope.pkgd.js");
        await loadScript("/assets/js/vendors/jquery.appear.js");
        await loadScript("/assets/js/vendors/imagesloaded.pkgd.js");
        await loadScript("/assets/js/vendors/anime.min.js");
        await loadScript(`${window.location.origin}/assets/js/main.js`);

      } catch (error) {
        console.error("Script loading error:", error);
      }
    })();

    return () => {
      document.querySelectorAll("script").forEach((script) => {
        if (script.src.includes("/assets/js/")) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <main>
      <section className="hero-section">
        <div className="container text-center">
          <h1>Grow with Our Integrated Services.</h1>
          <p>Innovating Solutions with Real Impact. We Elevate Your Business to Victory.</p>
          <img src="/assets/images/hero-banner.jpg" alt="Hero Banner" className="hero-img" />
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Digisphere Tech</h2>
          <p>We provide brilliant ideas to elevate your business's success and drive growth.</p>
          <p>We offer a range of services, including digital marketing, web application development, and social media marketing.</p>
          <img src="/assets/images/about-us.jpg" alt="About Us" />
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Digital Marketing</h3>
            <p>From shaping your brand's identity to cultivating engaging customer experiences, we optimize your digital strategy.</p>
          </div>
          <div className="service">
            <h3>Web Development</h3>
            <p>We provide customized app development solutions, ensuring seamless integration and efficiency.</p>
          </div>
          <div className="service">
            <h3>Social Media Marketing</h3>
            <p>We manage your social brand with strategic analysis to maximize its digital impact.</p>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h2>Our Achievements</h2>
          <ul>
            <li>336+ Successful Projects</li>
            <li>316+ Happy Clients</li>
            <li>Presence in 5+ States</li>
          </ul>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>We are trusted by our clients</h2>
          <div className="testimonial">
            <p>"Working with this SEO team has been a game-changer. Our website's traffic has doubled." - Krishna Reddy</p>
          </div>
          <div className="testimonial">
            <p>"Their strategies consistently deliver outstanding results." - Venkat Kumar</p>
          </div>
          <div className="testimonial">
            <p>"Absolutely amazing theme with an awesome design and so easy to customize." - Sai Sumanth</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container text-center">
          <h2>Let's collaborate to create something remarkable</h2>
          <p>Contact our office: (+91) 814 387-9627</p>
          <p>Send a message: info@digispheretech.in</p>
          <div className="social-links">
            <a href="#">Fb</a> <a href="#">Tw</a> <a href="#">In</a> <a href="#">Ig</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;