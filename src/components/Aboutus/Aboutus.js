import AwardWinningServices from "../../pages/About/AwardWinning/AwardWinningServices";
import Banner from "../../pages/About/Banner";
import LogoSlider from "../../pages/About/LogoSlider/LogoSlider";
import MediaExperienceSection from "../../pages/About/MediaExperienceSection";
import MissionSection from "../../pages/About/MissionSection";
import OurVision from "../../pages/About/OurVision";
import Services from "../../pages/About/Services";
import TeamSection from "../../pages/About/TeamSection";
import WorkWithCompaniesSection from "../../pages/About/WorkWithCompaniesSection";
import "./About.css"


const Aboutus = () => {
   
    return (
      <div>
      
        <Banner/>
        <Services/>
        <AwardWinningServices/>
        <OurVision/>
        <MissionSection/>
        <MediaExperienceSection/>
        <WorkWithCompaniesSection/>
        <TeamSection/>
        <LogoSlider/>
      </div>
    );
  };
  
export default Aboutus;
  