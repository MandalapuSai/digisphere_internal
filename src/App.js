import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import reusable components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ChatBot from "./components/Chatbot/Chatbot"; // Optional, if you have one

// Import page components
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import Services from "./components/Services/Services";
import Contactus from "./components/Contactus/Contactus";
import Digital from "./pages/Digital/Digital";
import LinkStand from "./components/Linkstand/Linkstand"; // Import LinkStand page
import BuyNow from "./components/BuyNow/BuyNow";
import Cart from "./components/Cart/Cart";
import ApplicationDevelopment from "./pages/Application/ApplicationDevelopment";
import WebDesign from "./pages/WebDesign/WebDesign";
import SocialMedia from "./components/SocialMedia/SocialMedia"
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import BizConsulting from "./components/BizConsulting/BizConsulting";
import PaymentStatus from "./components/PaymentStatus/PaymentStatus";
import ScrollToTop from "./components/Scroller/Scroller";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
     

        <Route path="/contact" element={<Contactus />} />
        <Route path="/linkstand" element={<LinkStand />} />
        <Route path="/buynow" element={<BuyNow/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/digital-marketing" element={<Digital />} />



        <Route path="/application-development" element={<ApplicationDevelopment/>}/>
        <Route path="/web-designing" element={<WebDesign/>}/>
        <Route path="/web-development" element={<WebDevelopment/>}/>
        <Route path="/social-media-marketing" element={<SocialMedia/>}/>
    
        <Route path="/business" element={<BizConsulting/>}/>
        <Route path="/linkstand/buy/status" element={<PaymentStatus />} />
      </Routes>
      <Footer />
      <ChatBot /> {/* Include if you have a chatbot */}
    </div>
  );
}

export default App;