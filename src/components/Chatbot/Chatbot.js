import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

// URL of your backend API
const api = "http://localhost:8080";

const App = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [services, setServices] = useState([]);
  const [subservices, setSubservices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubservice, setSelectedSubservice] = useState(null);
  const [clientDetails, setClientDetails] = useState({
    clientName: "",
    clientMobileNumber: "",
    email: "",
    preferedContactTime: "",
    subserviceId: null,
  });
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", message: "What services you are looking for?" },
  ]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [step, setStep] = useState(0); // To track the current step in the flow
  const [loading, setLoading] = useState(false); // Add loading state

  const messagesEndRef = useRef(null);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${api}/services/all_services`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // Scroll to the bottom whenever new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]); // Trigger the scroll when chatHistory changes

  // Handle service selection
  const handleServiceSelection = async (serviceId) => {
    setSelectedService(serviceId);
    setStep(1); // Move to subservice step
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "client", message: `You selected ${services.find((service) => service.serviceId === serviceId).serviceName}. ` },
      { sender: "bot", message: `Now, please choose a subservice.` },
    ]);

    try {
      const response = await fetch(`${api}/subservices/selected_subservices/${serviceId}`);
      const data = await response.json();
      setSubservices(data);
    } catch (error) {
      console.error("Error fetching subservices:", error);
    }
  };

  // Handle subservice selection
  const handleSubserviceSelection = (subserviceId) => {
    const selectedSubserviceName = subservices.find(subservice => subservice.subserviceId === subserviceId)?.subserviceName;
    setSelectedSubservice(subserviceId);
    setStep(2); // Move to form step
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "client", message: `You selected the subservice: ${selectedSubserviceName}.` },
      { sender: "bot", message: `Please provide your details.` },
    ]);
    setIsFormVisible(true);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting
    const detailsToSubmit = {
      ...clientDetails,
      subserviceId: selectedSubservice,
    };

    try {
      const response = await fetch(`${api}/client/client_details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detailsToSubmit),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: "bot", message: "Thanks for your request! We will get back to you soon." },
        ]);
        setStep(3); // End step
      }
    } catch (error) {
      console.error("Error submitting client details:", error);
    } finally {
      setLoading(false); // Set loading state to false once the submission is complete
    }
  };

  // Show/hide the chatbot
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Handle back and next buttons
  const handleNext = () => {
    if (step === 0 && selectedService) {
      setStep(1);
    } else if (step === 1 && selectedSubservice) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 1) {
      setStep(0);
    }
  };

  // Start again - reset all states
  const handleStartAgain = () => {
    setStep(0);
    setSelectedService(null);
    setSelectedSubservice(null);
    setClientDetails({
      clientName: "",
      clientMobileNumber: "",
      email: "",
      preferedContactTime: "",
      subserviceId: null,
    });
    setIsFormSubmitted(false);
    setIsFormVisible(false);
    setChatHistory([{
      sender: "bot",
      message: "Hello! How can I assist you today?"
    }]);
  };

  // Close the chat window
  const handleExit = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      {/* Chatbot Icon */}
      {!isChatOpen && (
        <div className="chatbot-icon" onClick={toggleChat}>
          <span className="chat-icon">💬</span>
        </div>
      )}

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="chat-container">
          <div className="chatbox">
            {/* Header with Close Button */}
            <div className="chat-header">
              <span className="chat-title">ClientAssist</span>
              <button className="close-btn" onClick={handleExit}>X</button>
            </div>

            <div className="messages">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={msg.sender === "bot" ? "bot-message" : "client-message"}
                >
                  {msg.message}
                </div>
              ))}

              {/* This div will always scroll the container to the bottom */}
              <div ref={messagesEndRef} />
            </div>

            {step === 0 && (
              <div className="service-selection">
                {!Array.isArray(services) ? (
                  <div>Loading services...</div> // or display some error message
                ) : (
                  services.map((service) => (
                    <button className="displayServices"
                      key={service.serviceId}
                      onClick={() => handleServiceSelection(service.serviceId)}
                    >
                      {service.serviceName}
                    </button>
                  ))
                )}
              </div>
            )}

            {step === 1 && (
              <div className="subservice-selection">

                {!Array.isArray(services) ? (
                  <div>Loading services...</div> // or display some error message
                ) : (


                  subservices.map((subservice) => (
                    <button className="displayServices"
                      key={subservice.subserviceId}
                      onClick={() => handleSubserviceSelection(subservice.subserviceId)}
                    >
                      {subservice.subserviceName}
                    </button>
                  )))}
              </div>
            )}

            {step === 2 && isFormVisible && (
              <div className="client-form">
                {loading ? (
                  <div className="loading-spinner"></div> // Show spinner while loading
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="clientName"
                      placeholder="Your Name"
                      value={clientDetails.clientName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="clientMobileNumber"
                      placeholder="Mobile Number"
                      value={clientDetails.clientMobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={clientDetails.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="preferedContactTime"
                      placeholder="Preferred Contact Time"
                      value={clientDetails.preferedContactTime}
                      onChange={handleInputChange}
                      required
                    />
                    <button type="submit" disabled={loading}>Submit</button>
                  </form>
                )}
              </div>
            )}

            {step === 3 && isFormSubmitted && (
              <div className="thank-you-message">
                <div className="bot-message">
                  Thanks for your submission! We will get back to you soon.
                </div>
                <button onClick={handleStartAgain} className="start-again-button">
                  More
                </button>
                <button onClick={handleExit} className="exit-button">
                  Exit
                </button>
              </div>
            )}

            <div className="navigation-buttons">
              <button onClick={handleBack} disabled={step === 0 || isFormSubmitted}>
                Back
              </button>
              <button onClick={handleNext} disabled={step === 2 || isFormSubmitted}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default App;