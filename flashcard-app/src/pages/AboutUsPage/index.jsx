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
      <h1 className="page-title">About Us</h1>
      <div className="accordion-container">
        <div className="grid-container">
          <div className="accordion" onClick={toggleAccordion1} data-testid="accordion1">
            <h2 className="accordion-title">Our Story</h2>
            {isAccordion1Open && (
              <div className="accordion-content">
                <p data-testid="our-story-content">Welcome to Crammer, the ultimate revision website designed to help you succeed in your academic pursuits! Our website is here to provide you with the tools and resources you need to excel in your Spanish and French exams and coursework. If you're a high school student preparing for your an exam, Crammer is the perfect place to start.</p>
                <p>At Crammer, we believe that education should be accessible to everyone, which is why our website is completely free to use. We also offer personalized study plans and progress tracking, so you can keep track of your progress and stay on track to achieve your goals.</p>
              </div>
            )}
          </div>
          <div className="accordion" onClick={toggleAccordion2}>
            <h2 className="accordion-title">About This App</h2>
            {isAccordion2Open && (
              <div className="accordion-content">
                <p>Our website offers flashcards designed to help you to maximize your learning potential. We cover Spanish, French, German and Italian subjects, so you can find everything you need to succeed in one convenient place.</p>
                <p>We also offer the functionality of creating your own custom made flashcards, to focus on specific words or sentences for each subject.</p>
              </div>
            )}
          </div>
        </div>
        <div className="grid-container">
          <div className="accordion" onClick={toggleAccordion3}>
            <h2 className="accordion-title">Contact Us</h2>
            {isAccordion3Open && (
              <div className="accordion-content">
                <p>Email: contact@crammer-education.com</p>
                <p>Phone: +44 07928 600000</p>
              </div>
            )}
          </div>
          <div className="accordion" onClick={toggleAccordion4}>
            <h2 className="accordion-title">Resources</h2>
            {isAccordion4Open && (
              <div className="accordion-content">
                <p>Useful links to enhance your learning process:</p>
                <a href="https://l-lingo.com/blog/2019/02/its-crunch-time-mastering-timed-language-learning-creative-language-learning-series/">Pomodoro Technique for Language Learning</a><br></br>
                <a href="https://learning.batterseaspanish.com/the-5-best-spanish-books-for-beginners/">5 Best Spanish Books for Beginners</a><br></br>
                <a href="https://www.fluentu.com/blog/german/best-books-to-learn-german/">Books for Learning German</a><br></br>
              </div>
            )}
          </div>
        </div>
      </div>
          <p className="footer">2023 Crammer Education.</p>
    </div>
  )
}
