import React from "react";
import "./ProcessSteps.css";

const steps = [
  {
    title: "Over 336+ success projects.",
    description: "We create engaging web designs that perfectly match the needs of your target audience.",
  },
  {
    title: "Over 316+ happy clients and counting.",
    description: "Join our growing list of over 316 happy clients and experience our exceptional service today.",
  },
  {
    title: "Our presence in over 5+ States.",
    description: "Spanning across 5+ States, our extensive presence allows us to cater to diverse markets and cultures with our services.",
  },
];

const ProcessStep = () => {
  return (
    <section className="process-section">
      <div className="container-fluid px-4 px-md-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {steps.map((step, index) => (
            <div className="col" key={index}>
              <div className="process-step-box">
                <div className="line-dot-container">
                  <div className="horizontal-line"></div>
                  <div className="dot-circle">
                    <div className="inner-dot"></div>
                  </div>
                </div>
                <h5 className="process-title">{step.title}</h5>
                <p className="process-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStep;
