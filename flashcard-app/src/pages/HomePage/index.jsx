import React from "react";
import {Link} from 'react-router-dom';

import banner from './bigger-banner-img.jpg'

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
                <div className="container-child">
                    French
                    <p className="flags">🇫🇷</p>
                </div>
                    </Link>
                    <Link to="/spanish" className="language-links">
                <div className="container-child">
                Spanish 
                <p className="flags">🇪🇸</p>
                </div>
                    </Link>
                    <Link to="/german" className="language-links">
                <div className="container-child">
                German
                <p className="flags">🇩🇪</p>
                </div>
                </Link>
                <Link to="/italian" className="language-links">
                <div className="container-child">
                    Italian
                    <p className="flags">🇮🇹</p> 
                </div>
                </Link>
            </div>
        </div>
    )
}
