import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './StackSection.css';

const services = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Comprehensive digital strategies to grow your online presence and drive measurable results through targeted campaigns.",
    image: "assets/img//media_hub_01.jpg",
    bgColor: "bg-blue-50",
    link: "/digital-marketing"
  },
  {
    id: 2,
    title: "Web Development", 
    description: "Custom websites and applications built with modern technologies for optimal performance and user experience.",
    image: "assets/img/media_hub_02.jpg",
    bgColor: "bg-purple-50",
    link: "/web-development"
  },
  {
    id: 3,
    title: "Social Media",
    description: "Strategic social media management to engage your audience and build lasting brand relationships.",
    image: "assets/img/media_hub_03.jpg",
    bgColor: "bg-pink-50",
    link: "/social-media-marketing"
  }
];

const ServiceCard = ({ service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`service-card ${service.bgColor}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      } : {}}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="image-container">
        <motion.img
          src={service.image}
          alt={service.title}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <motion.a
          href={service.link}
          className="learn-more"
          whileHover={{ 
            x: 5,
            color: "#3b82f6"
          }}
        >
          Learn more →
        </motion.a>
      </div>
    </motion.div>
  );
};

const StackSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="stack-section" ref={sectionRef}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-gradient-purple-pink">Our Services</h2>
        <p className="subtitle">Professional solutions tailored to your needs</p>
      </motion.div>

      <motion.div 
        className="services-grid"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { 
            transition: { 
              staggerChildren: 0.2,
              delayChildren: 0.3
            } 
          }
        }}
      >
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </section>
  );
};

export default StackSection;