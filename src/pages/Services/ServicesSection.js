import React, { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ServicesSection = () => {
  // Initialize AOS when the component mounts (only once)
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-quart' });

    // Ensure AOS is refreshed if the component re-renders
    AOS.refresh();
  }, []); // Empty dependency ensures AOS is initialized only once

  // Memoizing services data to prevent recalculations on re-renders
  const services = useMemo(() => [
    {
      id: 1,
      title: 'Digital Marketing',
      description:
        'We are passionate about our craft and the positive impact it has on our clients. With extensive experience, we consistently deliver exceptional digital marketing solutions, providing best-in-class results for our clients.',
      items: [
        'Digital Strategy',
        'Email Marketing',
        'Content Marketing',
        'SEO and SEM',
        'Analytics and Reporting',
        'Influencer Marketing',
        'Paid Advertising',
        'Reputation Management',
      ],
    },
    {
      id: 2,
      title: 'Application Development',
      description:
        'We are excited for our work and how it positively impacts clients. With vast experience, we have consistently provided excellent web solutions that offer the best-in-class experience for our clients.',
      items: [
        'Web Development',
        'API Development',
        'Testimonial Services',
        'Mobile App Development',
        'UI/UX Design',
        'eCommerce Development',
        'Backend Development',
        'Cloud Solutions',
      ],
    },
    {
      id: 3,
      title: 'Social Media Marketing',
      description:
        'We are deeply committed to enhancing brand visibility and engagement for our clients. Leveraging our expertise, we consistently deliver effective digital brand promotion solutions, ensuring optimal results for our clients.',
      items: [
        'Social Media Management',
        'Content Creation',
        'Influencer Partnerships',
        'Email Marketing Campaigns',
        'Social Media Advertising',
        'Community Engagement',
        'Analytics and Reporting',
        'Paid Advertising Campaigns',
      ],
    },
    {
      id: 4,
      title: 'Search Engine Optimization',
      description:
        'We are committed to improving search engine rankings and driving organic traffic for our clients. Using our deep expertise, we consistently provide effective SEO strategies that ensure optimal online visibility and performance for our clients.',
      items: [
        'On-Page Optimization',
        'Technical SEO',
        'Content Strategy',
        'Keyword Research',
        'Local SEO',
        'Link Building',
        'Analytics and Reporting',
        'Competitor Analysis',
      ],
    },
    {
      id: 5,
      title: 'Business Consulting',
      description:
        'Empowering businesses to thrive and excel, we\'re dedicated to providing unparalleled business consulting services that drive success for our clients.',
      items: [
        'Goods and Services Tax',
        'Labor License',
        'Tax',
        'Trademark Registration',
        'Financial Advisory',
        'Market Analysis',
        'Strategy Execution',
        'Organizational Restructuring',
      ],
    },
  ], []); // Memoize services data to avoid recalculating on every render

  return (
    <section className="pt-0">
      <div className="container">
        {services.map((service) => (
          <div className="row mb-8" key={service.id}>
            <div className="col-lg-2 col-md-2 text-md-end">
              <span
                className="fs-130 xl-fs-100 md-fs-80 lh-100 md-lh-80 alt-font fw-700 text-sliding-line bg-extra-medium-gray"
                data-aos="fade-up"
              >
                {String(service.id).padStart(2, '0')}
              </span>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-8 md-mt-15px"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="alt-font fw-600 mb-0 text-dark-gray ls-minus-2px">{service.title}</h3>
            </div>
            <div
              className="col-lg-6 offset-xl-1 md-mt-20px"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p>{service.description}</p>
              <div className="row">
                <div className="col-xl-5 col-md-6">
                  <ul className="p-0 m-0 list-style-02 text-dark-gray fw-500" data-aos="fade-up">
                    {service.items.slice(0, 4).map((item, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-plus fs-12 me-10px"></i>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-xl-5 col-md-6">
                  <ul className="p-0 m-0 list-style-02 text-dark-gray fw-500" data-aos="fade-up">
                    {service.items.slice(4).map((item, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-plus fs-12 me-10px"></i>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
