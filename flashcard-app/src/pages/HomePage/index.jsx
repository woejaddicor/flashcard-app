import React from "react";
import {Link} from 'react-router-dom';
import banner from './gamified-language-learning-duolingo.webp'
import './homepage.css'

export default function HomePage() {

    //localStorage.clear()

    return(
        <div className="home-page">
        <div className="page-banner">
            <img className="banner-image" src={banner} alt="banner image"/>
            <h1>Welcome to Crammer!</h1>
        </div>
        <div>
            <p className="about-text">Welcome to Crammer, the ultimate revision website designed to help you in your language learning process!</p>
            <Link to="/register"><button className="account-button">CREATE AN ACCOUNT</button></Link>
            <h2 className="language-choice">Choose your language</h2>
        </div>
        <div className="buttons-container">
            <Link to="/french" className="language-links">
                French 🇫🇷
            </Link>
            <Link to="/spanish" className="language-links">
               Spanish 🇪🇸
            </Link>
        </div>
        </div>
    )
}
