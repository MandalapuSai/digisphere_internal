import React from 'react';

const TeamSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2"
             data-anime='{ "el": "childs", "translateY": [30, 0], "rotateX":[30, 0], "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'>
          <div className="col team-style-10 md-mb-30px">
            <figure className="mb-0 position-relative overflow-hidden img-size">
              <img src="assets/img/people_01.png" alt="" />
              <figcaption className="w-100 h-100 d-flex flex-wrap">
                <div className="team-member-strip w-100 mt-auto d-flex align-items-center pt-15px pb-15px ps-30px pe-30px bg-white">
                  <span className="team-member-name fw-600 alt-font text-dark-gray fs-18 ls-minus-05px">B. Krishna Reddy</span>
                  <span className="member-designation fs-15 lh-20 ms-auto alt-font flex-shrink-0">CEO</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col team-style-10" style={{ marginTop: '50px' }}>
            <figure className="mb-0 position-relative overflow-hidden img-size">
              <img src="assets/img/people_05.jpg" alt="" />
              <figcaption className="w-100 h-100 d-flex flex-wrap">
                <div className="team-member-strip w-100 mt-auto d-flex align-items-center pt-15px pb-15px ps-30px pe-30px bg-white">
                  <span className="team-member-name fw-600 alt-font text-dark-gray fs-18 ls-minus-05px">D. Sitharam</span>
                  <span className="member-designation fs-15 lh-20 ms-auto alt-font flex-shrink-0">UI/UX Designer</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col team-style-10" style={{ marginTop: '50px' }}>
  <figure className="mb-0 position-relative overflow-hidden img-size">
    <img src="assets/img/people_06.jpg" alt="Ibrahim Baig Shaik" />
    <img src="assets/img/people_06.jpg" className="hover-switch-image" alt="Ibrahim Baig Shaik" />
    <figcaption className="w-100 h-100 d-flex flex-wrap">
      <div className="team-member-strip w-100 mt-auto d-flex align-items-center pt-15px pb-15px ps-30px pe-30px bg-white">
        <span className="team-member-name fw-600 alt-font text-dark-gray fs-18 ls-minus-05px">
          Ibrahim Baig Shaik
        </span>
        <span className="member-designation fs-15 lh-20 ms-auto alt-font flex-shrink-0">
          UI/UX Designer
        </span>
      </div>
    </figcaption>
  </figure>
</div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
