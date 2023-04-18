import React, { useState } from "react";
import './aboutUs.css'
import crammerLogo from './crammer-logo.png'

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
            <h2 className="accordion-title">Our Story</h2>
            {isAccordion1Open && (
              <div className="accordion-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            )}
          </div>
          <div className="accordion" onClick={toggleAccordion2}>
            <h2 className="accordion-title">About This App</h2>
            {isAccordion2Open && (
              <div className="accordion-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            )}
          </div>
        </div>
        <div className="grid-container">
          <div className="accordion" onClick={toggleAccordion3}>
            <h2 className="accordion-title">Contact Us</h2>
            {isAccordion3Open && (
              <div className="accordion-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            )}
          </div>
          <div className="accordion" onClick={toggleAccordion4}>
            <h2 className="accordion-title">More Information</h2>
            {isAccordion4Open && (
              <div className="accordion-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <img className="crammer-logo" src={crammerLogo} alt="crammer logo"/>
    </div>
  )
}
