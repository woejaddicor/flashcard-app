import React, { useState } from "react";

export default function Flashcard({ phrase }) {
    const [showAnswer, setShowAnswer] = useState(false);

    function handleCardClick() {setShowAnswer(!showAnswer);}

    return (
        <div className="flashcard-container" onClick={handleCardClick}>
            <div className={`card ${showAnswer ? "flipped" : ""}`}>
                <div className="card-face card-face-front">
                    <p className="quiz-text">How do you say: '{phrase.answer}'?</p>
                </div>
                <div className="card-face card-face-back">
                    <p className="quiz-text">{phrase.question}</p>
                </div>
            </div>
        </div>
    );
}
