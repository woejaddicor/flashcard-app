import React, { useState, useEffect } from "react";
import LoginPage from "../LoginPage";
import './flashcardCreate.css'

export default function FlashcardCreate({token, setToken}) {
    const [selectedOption, setSelectedOption] = useState('')
    const [wordText, setWordText] = useState('')
    const [answerText, setAnswerText] = useState('')
    const [newQuestionSubmitted, setNewQuestionSubmitted] = useState(false)

    if(!token) {
        return <LoginPage token={token} setToken={setToken}/>
    }

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
        .then(setNewQuestionSubmitted(true))
        .then(setWordText(''))
        .then(setAnswerText(''))
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }

    return(
        <div className="create-page">
            <h1 className="page-title">Create a new flashcard</h1>
            <form onSubmit={handleSubmit}>
                <h3 className="page-subtitles">Subject</h3>
                <select  className="language-dropdown" value={selectedOption} onChange={handleChange}>
                    <option defaultValue={selectedOption}>Select a language</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                    <option value="Italian">Italian</option>
                </select>
                <h3 className="page-subtitles">Word / Phrase</h3>
                <input className="input-boxes" type="text" name="words" placeholder="Example: Hello" value={wordText} onChange={handleWordChange} required/>
                <h3 className="page-subtitles">Answer</h3>
                <input  className="input-boxes" type="text" name="answers" placeholder="Example: Ola" value={answerText} onChange={handleAnswerChange} required/>
                <br></br>
                <button className="submit-button" type="submit">Create Flashcard</button>
            </form>
            <button className="submit-button" onClick={() => {location.href="/dashboard"}}>
                Back to Dashboard</button>
            <h2>{newQuestionSubmitted ? 'Submitted' : ''}</h2>
        </div>
    )
}
