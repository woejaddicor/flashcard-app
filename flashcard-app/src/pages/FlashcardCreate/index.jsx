import React, { useEffect } from "react";
import LoginPage from "../LoginPage";

export default function FlashcardCreate({token, setToken}) {

    if(!token) {
        return <LoginPage token={token} setToken={setToken}/>
    }

    return(
        <div>
            <h1>Flashcard Create Page</h1>
            <form>
                <h3>Subject</h3>
                <div className="dropbtn">
                <button>Choose a Subject...</button>
                <div>
                    <a href="#">French</a>
                    <a href="#">Spanish</a>
                </div>
                </div>
                
                <h3>Word / Phrase</h3>
                <input type="text" name="words" placeholder="Example: Hello"/>
                <h3>Answer</h3>
                <input type="text" name="answers" placeholder="Example: Ola"/>
                <button type="submit">Create Flashcard</button>
            </form>
            <button onClick={() => {location.href="/dashboard"}}>
                Back to Dashboard</button>
        </div>
    )
}