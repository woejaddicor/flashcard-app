import React, { useEffect } from "react";
import LoginPage from "../LoginPage";
import { Link } from "react-router-dom";

export default function DashboardPage({ testing=false, token, setToken }) {

    if(!token && testing == false) {
        return <LoginPage token={token} setToken={setToken}/>
    }

    return (
        <div>
            <h1 data-testid="dashboard-heading">Dashboard Page</h1>
            <div>
                <Link to="/flashcardcreate">Create Flashcard</Link>
                <Link to="/flashcardview">View All Flashcards</Link>
            </div>
            <Link to="/french">French</Link>
            <Link to="/spanish">Spanish</Link>
        </div>
    );
}


