import React from "react";
import Banner from "../Banner/Banner"; // Ensure paths are correct
import AboutSection from "../AboutSection/AboutSection";
import ProcessSteps from "../ProcessStep/ProcessStep";
import MarqueeSection from "../MarqueeSection/MarqueeSection";
import StackSection from "../StackSection/StackSection";
import OutreachSection from "../OutReachSection/OutReachSection";
import Testimonials from "../Testmonials/Testmonials";

const Home = () => {
  console.log("Home Component Loaded"); // Debugging line
  return (
    <div>
      <Banner />
      <AboutSection />
    
      <ProcessSteps />

    <MarqueeSection/>
    <StackSection/>
    <OutreachSection/>
    <Testimonials/>
    </div>
  );
};

export default Home;
