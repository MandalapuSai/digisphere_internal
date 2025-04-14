import React, { useEffect } from "react";
import anime from "animejs";

const Digital = () => {
  useEffect(() => {
    // Animations for the sections
    anime({
      targets: ".fade-in",
      opacity: [0, 1],
      duration: 600,
      delay: (el, i) => i * 300,
      easing: "easeOutQuad",
    });

    anime({
      targets: ".translate-in",
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 600,
      delay: (el, i) => i * 300,
      easing: "easeOutQuad",
    });

    anime({
      targets: ".rotate-in",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 200,
      easing: "easeOutQuad",
    });
  }, []);

  return (
    <div>
      {/* Digital Marketing Section */}
      <section className="top-space-margin">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-md-start fade-in">
              <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-05px sm-ls-minus-2px">
                Digital Marketing
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-center align-items-lg-end translate-in">
                <div className="col-lg-6 col-md-6 text-center text-md-start fade-in">
                  <div className="fs-140 xxl-fs-100 sm-fs-60 fw-600 text-dark-gray alt-font ls-minus-8px sm-ls-minus-2px">
                    Services
                  </div>
                </div>
                <div className="col-lg-4 last-paragraph-no-margin md-mt-30px fade-in">
                  <p className="w-95 md-w-80 mx-auto text-center text-lg-start lg-w-100">
                    At the forefront of digital marketing services, we excel in developing strategies with unique brand identities, guiding businesses to triumph in the online domain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center fade-in">
            <div className="col-lg-6 md-mb-40px rotate-in">
              <figure className="position-relative m-0">
                <img src="assets/img/seo.jpg" alt="SEO" className="w-100 border-radius-5px" />
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10 fade-in">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                  SEARCH ENGINE OPTIMIZATION (SEO)
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray mb-20px ls-minus-2px alt-font">Enhance Online Presence with SEO!</h3>
              <p className="w-95 md-w-100 mb-35px">
                With our proficient SEO solutions, you can amplify your online visibility and drive targeted traffic to your website. We specialize in crafting tailored strategies to meet your unique business needs, ensuring optimal performance in search engine rankings. From comprehensive keyword research to strategic content optimization, we'll optimize every aspect of your online presence. Let us propel your website to the top of search results and unlock the full potential of your digital presence.
                <br />
                Reach out to us today to kickstart your SEO journey now!
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Digital Marketing Strategy Section */}
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center mb-7 sm-mb-40px">
            <div className="col-xl-5 col-lg-6 col-md-10 md-mb-50px fade-in">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                  DIGITAL MARKETING STRATEGY
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray ls-minus-2px alt-font">Optimize Online Impact Strategically!</h3>
              <p className="w-95 md-w-100 mb-35px">
                Tap into the expertise of our seasoned digital marketing strategies to amplify your online influence and capture qualified leads. Customized to your business goals, our dynamic methodologies guarantee unmatched performance across diverse digital channels. From rigorous market analysis to inventive campaign execution, we optimize every aspect of your online approach. Allow us to enhance your brand's digital footprint and unlock its maximum potential in the online realm.
                <br />
                Connect with us today to kickstart your digital marketing expedition!
              </p>
            </div>
            <div className="col-lg-6 offset-xl-1 position-relative z-index-1 fade-in">
              <div className="atropos" data-atropos data-atropos-perspective="2450">
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="atropos-inner">
                      <figure className="position-relative m-0">
                        <img src="assets/img/marketing.jpg" alt="Marketing Strategy" className="w-100 border-radius-5px" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Editing Section */}
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center fade-in">
            <div className="col-lg-6 md-mb-40px rotate-in">
              <figure className="position-relative m-0">
                <img src="assets/img/editing.jpg" alt="Video Editing" className="w-100 border-radius-5px" />
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10 fade-in">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                  VIDEO EDITING
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray mb-20px ls-minus-2px alt-font">Transform Ideas into Engaging Videos!</h3>
              <p className="w-95 md-w-100 mb-35px">
                Employ our expertise to actualize your vision through compelling video editing services. Customized to your storytelling requirements, our edits captivate audiences and enrich your brand's narrative. From meticulous footage selection to seamless transitions, we meticulously craft every frame to deliver impactful videos. Entrust us to elevate your content with professional editing that deeply resonates with your audience.
                <br />
                Contact us today to commence your video editing journey!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Designing Section */}
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center mb-7 sm-mb-40px">
            <div className="col-xl-5 col-lg-6 col-md-10 md-mb-50px fade-in">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                  POSTER DESIGNING
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray ls-minus-2px alt-font">Captivate Audiences with Creative Designs!</h3>
              <p className="w-95 md-w-100 mb-35px">
                Unleash our artistic prowess to craft captivating posters that leave a lasting impression. Tailored to your brand's vision, our designs resonate with your target audience, driving engagement and visibility. From concept to creation, we infuse creativity into every aspect of your poster, ensuring it stands out in the crowd. Let our designs amplify your message and elevate your brand's presence.
                <br />
                Connect with us today to kickstart your poster design journey!
              </p>
            </div>
            <div className="col-lg-6 offset-xl-1 position-relative z-index-1 fade-in">
              <div className="atropos" data-atropos data-atropos-perspective="2450">
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div className="atropos-inner">
                      <figure className="position-relative m-0">
                        <img src="assets/img/poster33.jpeg" alt="Poster Design" className="w-100 border-radius-5px" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Writing Section */}
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center fade-in">
            <div className="col-lg-6 md-mb-40px rotate-in">
              <figure className="position-relative m-0">
                <img src="assets/img/content.jpg" alt="Content Writing" className="w-100 border-radius-5px" />
              </figure>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10 fade-in">
              <div className="mb-10px">
                <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
                <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
                  CONTENT WRITING
                </span>
              </div>
              <h3 className="fw-600 text-dark-gray mb-20px ls-minus-2px alt-font">Deliver Quality with Expert Writing!</h3>
              <p className="w-95 md-w-100 mb-35px">
                Make an impact with expertly written content that is engaging, informative, and optimized for both readers and search engines. Whether you need articles, blogs, website content, or social media copy, our writing services are tailored to your brand voice, ensuring a consistent and captivating narrative. Allow us to create content that resonates with your audience and drives results.
                <br />
                Reach out to us today to begin crafting your content!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
  <div className="container">
    <div className="row align-items-center justify-content-center mb-7 sm-mb-40px">
      <div className="col-xl-5 col-lg-6 col-md-10 md-mb-50px fade-in">
        <div className="mb-10px">
          <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
          <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">
            EMAIL MARKETING
          </span>
        </div>
        <h3 className="fw-600 text-dark-gray ls-minus-2px alt-font">Boost Engagement with Targeted Email Campaigns!</h3>
        <p className="w-95 md-w-100 mb-35px">
          Optimize your customer engagement and conversions with our expert email marketing solutions. Tailored to fit your audience and business goals, our campaigns deliver personalized messages that deeply resonate with recipients. From creating compelling content to maximizing deliverability, we ensure your emails shine amidst competition in crowded inboxes. Let us help you maximize your email marketing ROI and cultivate enduring customer relationships.
          <br />
          Contact us today to begin your journey to email marketing success!
        </p>
      </div>
      <div className="col-lg-6 offset-xl-1 position-relative z-index-1 fade-in">
        <div className="atropos" data-atropos data-atropos-perspective="2450">
          <div className="atropos-scale">
            <div className="atropos-rotate">
              <div className="atropos-inner">
                <figure className="position-relative m-0">
                  <img src="assets/img/email.jpeg" alt="Email Marketing" className="w-100 border-radius-5px" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Digital;
