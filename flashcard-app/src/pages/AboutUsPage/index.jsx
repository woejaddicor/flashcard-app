import React, { useState } from "react";
import './aboutUs.css'

export default function AboutUsPage() {
  const [isAccordion1Open, setIsAccordion1Open] = useState(false);
  const [isAccordion2Open, setIsAccordion2Open] = useState(false);
  const [isAccordion3Open, setIsAccordion3Open] = useState(false);

  const toggleAccordion1 = () => {
    setIsAccordion1Open(!isAccordion1Open);
  };

  const toggleAccordion2 = () => {
    setIsAccordion2Open(!isAccordion2Open);
  };

  const toggleAccordion3 = () => {
    setIsAccordion3Open(!isAccordion3Open);
  };

  return (
    <div>
      <h1>About Us</h1>
      <div className="accordion-container">
        <div className="accordion" onClick={toggleAccordion1}>
          <h2 style={{backgroundColor: "#14293D"}}>Our Story</h2>
          {isAccordion1Open && (
            <div className="accordion-content">
              <p>Test</p>
            </div>
          )}
        </div>
        <div className="accordion" onClick={toggleAccordion2}>
          <h2 style={{backgroundColor: "#14293D"}}>About This App</h2>
          {isAccordion2Open && (
            <div className="accordion-content">
              <p>Test</p>
            </div>
          )}
        </div>
        <div className="accordion" onClick={toggleAccordion3}>
          <h2 style={{backgroundColor: "#14293D"}}>Contact Us</h2>
          {isAccordion3Open && (
            <div className="accordion-content">
              <p>Test</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
