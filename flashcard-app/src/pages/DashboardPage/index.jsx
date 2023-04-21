import React, { useEffect } from "react";
import LoginPage from "../LoginPage";
import { Link } from "react-router-dom";
import './dashboard.css'

export default function DashboardPage({ testing=false, token, setToken }) {

    if(!token && testing == false) {
        return <LoginPage token={token} setToken={setToken}/>
    }

    return (

        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
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
            <div className="bottom-buttons-container">
                <Link className="link-button create" to="/flashcardcreate">Create Flashcard</Link>
                <Link className="link-button view" to="/flashcardview">View All Flashcards</Link>
            </div>
        </div>
    );
}


