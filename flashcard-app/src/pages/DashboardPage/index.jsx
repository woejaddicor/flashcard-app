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
            <div className="cards-container">
                <Link className="language-card" to="/french">French<br></br>🇫🇷</Link>
                <Link className="language-card" to="/spanish">Spanish<br></br>🇪🇸</Link>
                <Link className="language-card" to="/german">German<br></br>🇩🇪</Link>
                <Link className="language-card" to="/italian">Italian<br></br>🇮🇹</Link>
            </div>

            <div>
                <Link className="link-button create" to="/flashcardcreate">Create Flashcard</Link>
                <Link className="link-button view" to="/flashcardview">View All Flashcards</Link>
            </div>
        </div>
    );
}


