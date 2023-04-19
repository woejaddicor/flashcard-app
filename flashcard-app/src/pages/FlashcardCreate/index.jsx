import React, { useState, useEffect } from "react";
import LoginPage from "../LoginPage";

export default function FlashcardCreate({token, setToken}) {
    const [selectedOption, setSelectedOption] = useState('')
    const [wordText, setWordText] = useState('')
    const [answerText, setAnswerText] = useState('')

    // if(!token) {
    //     return <LoginPage token={token} setToken={setToken}/>
    // }

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleWordChange = (event) => {
        setWordText(event.target.value)
    }

    const handleAnswerChange = (event) => {
        setAnswerText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const flashcardData = {
            type: selectedOption,
            word_phrase: wordText,
            answer: answerText
        };
        fetch(`https://crammer-backend.onrender.com/${selectedOption}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(flashcardData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }

    return(
        <div>
            <h1>Flashcard Create Page</h1>
            <form onSubmit={handleSubmit}>
                <h3>Subject</h3>
                <div className="dropbtn">
                <select value={selectedOption} onChange={handleChange}>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                </select>
                </div>
                <h3>Word / Phrase</h3>
                <input type="text" name="words" placeholder="Example: Hello" value={wordText} onChange={handleWordChange}/>
                <h3>Answer</h3>
                <input type="text" name="answers" placeholder="Example: Ola" value={answerText} onChange={handleAnswerChange}/>
                <button onClick={handleSubmit} type="submit">Create Flashcard</button>
            </form>
            <button onClick={() => {location.href="/dashboard"}}>
                Back to Dashboard</button>
        </div>
    )
}

