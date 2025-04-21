import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ChatBot from "./components/Chatbot/Chatbot";
import ScrollToTop from "./components/Scroller/Scroller";

// Pages
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import Services from "./components/Services/Services";
import Contactus from "./components/Contactus/Contactus";
import Digital from "./pages/Digital/Digital";
import LinkStand from "./components/Linkstand/Linkstand";
import BuyNow from "./components/BuyNow/BuyNow";
import Cart from "./components/Cart/Cart";
import ApplicationDevelopment from "./pages/Application/ApplicationDevelopment";
import WebDesign from "./pages/WebDesign/WebDesign";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import BizConsulting from "./components/BizConsulting/BizConsulting";
import PaymentStatus from "./components/PaymentStatus/PaymentStatus";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/linkstand" element={<LinkStand />} />
            <Route path="/buynow" element={<BuyNow />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/digital-marketing" element={<Digital />} />
            <Route path="/application-development" element={<ApplicationDevelopment />} />
            <Route path="/web-designing" element={<WebDesign />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/social-media-marketing" element={<SocialMedia />} />
            <Route path="/business" element={<BizConsulting />} />
            <Route path="/linkstand/buy/status" element={<PaymentStatus />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
