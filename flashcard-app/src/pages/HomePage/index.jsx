import React from "react";
import {Link} from 'react-router-dom';
import banner from './cropped-banner-img.png'

import './homepage.css'

export default function HomePage() {

    return(
        <div className="home-page">
            <div className="page-banner">
                <img className="banner-image" src={banner} alt="banner image"/>
                <h1 className="welcome-msg">Welcome to Crammer!</h1>
            </div>
            <div>
                <p className="about-text">Welcome to Crammer, the ultimate revision website designed to help you in your language learning process!</p>
                <Link to="/register"><button className="account-button">CREATE AN ACCOUNT</button></Link>
                <h2 className="language-choice">Learn</h2>
            </div>
            <div className="buttons-container">
                <Link to="/french" className="language-links">
                    French<br></br>🇫🇷
                </Link>
                <Link to="/spanish" className="language-links">
                Spanish<br></br>🇪🇸
                </Link>
            </div>
        </div>
    )
}
