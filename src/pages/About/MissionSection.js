import React from 'react';

const MissionSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center mb-7 sm-mb-40px">
          <div className="col-xl-5 col-lg-6 col-md-10 md-mb-50px"
            data-anime='{ "el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'>
            <div className="mb-10px">
              <span className="w-25px h-1px d-inline-block bg-gradient-fast-pink-light-yellow-transparent me-5px align-middle"></span>
              <span className="text-gradient-purple-pink fs-15 alt-font fw-700 ls-05px text-uppercase d-inline-block align-middle">Our Mission</span>
            </div>
            <h3 className="fw-600 text-dark-gray ls-minus-05px alt-font"
                data-anime='{ "el": "lines", "translateY": [15, 0], "opacity": [0,1], "delay": 100, "staggervalue": 100, "easing": "easeOutQuad" }'>
              Guiding Businesses Towards Digital Excellence!
            </h3>
            <p className="w-95 md-w-100 mb-35px">
              Our mission is to help businesses succeed in the digital age by offering innovative solutions that set new industry benchmarks. Utilizing advanced technologies and expert knowledge, we aim to drive our clients' growth and build strong, lasting partnerships in the digital world.
            </p>
          </div>
          <div className="col-lg-6 offset-xl-1 position-relative z-index-1"
               data-anime='{ "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="atropos" data-atropos data-atropos-perspective="2450">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner">
                    <figure className="position-relative m-0">
                      <img style={{ width: '580px', height: '400px' }} src="assets/img/MISSON_01.jpg" alt="" className="w-100 border-radius-5px" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default MissionSection;
