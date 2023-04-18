import React, { useEffect } from "react";
import LoginPage from "../LoginPage";

export default function FlashcardView({token, setToken}) {

    if(!token) {
        return <LoginPage token={token} setToken={setToken}/>
    }

    return(
        <div>
            <h1>Flashcard View Page</h1>
            <div className="banner">
                <h3>Subject</h3>
                <h3>Word / Phrase</h3>
                <h3>Answer</h3>
                <h3>Action</h3>
            </div>
            <button onClick={() => {location.href="/dashboard"}}>
                Back to Dashboard</button>
        </div>
    )
}