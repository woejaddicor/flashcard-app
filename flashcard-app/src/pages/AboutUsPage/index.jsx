import React, { useState } from "react";
import './aboutUs.css'

export default function AboutUsPage() {
  const [isAccordion1Open, setIsAccordion1Open] = useState(false);
  const [isAccordion2Open, setIsAccordion2Open] = useState(false);
  const [isAccordion3Open, setIsAccordion3Open] = useState(false);
  const [isAccordion4Open, setIsAccordion4Open] = useState(false);

  const toggleAccordion1 = () => {
    setIsAccordion1Open(!isAccordion1Open);
  };

  const toggleAccordion2 = () => {
    setIsAccordion2Open(!isAccordion2Open);
  };

  const toggleAccordion3 = () => {
    setIsAccordion3Open(!isAccordion3Open);
  };

  const toggleAccordion4 = () => {
    setIsAccordion4Open(!isAccordion4Open);
  };

  return (
    <div>
      <h1>About Us</h1>
      <div className="accordion-container">
        <div className="grid-container">
          <div className="accordion" onClick={toggleAccordion1}>
            <h2 style={{backgroundColor: "#006992"}}>Our Story</h2>
            {isAccordion1Open && (
              <div className="accordion-content">
                <p>Test</p>
              </div>
            )}
          </div>
          <div className="accordion" onClick={toggleAccordion2}>
            <h2 style={{backgroundColor: "#006992"}}>About This App</h2>
            {isAccordion2Open && (
              <div className="accordion-content">
                <p>Test</p>
              </div>
            )}
          </div>
        </div>
        <div className="grid-container">
          <div className="accordion" onClick={toggleAccordion3}>
            <h2 style={{backgroundColor: "#006992"}}>Contact Us</h2>
            {isAccordion3Open && (
              <div className="accordion-content">
                <p>Test</p>
              </div>
            )}
          </div>
          <div className="accordion" onClick={toggleAccordion4}>
            <h2 style={{backgroundColor: "#006992"}}>Fourth Item</h2>
            {isAccordion4Open && (
              <div className="accordion-content">
                <p>Test</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
