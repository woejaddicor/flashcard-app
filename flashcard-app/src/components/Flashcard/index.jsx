import React, { useState } from "react";

export default function Flashcard({ phrase }) {
    const [showAnswer, setShowAnswer] = useState(false);

    function handleCardClick() { setShowAnswer(!showAnswer); }

    return (
        <div className="flashcard-container" onClick={handleCardClick}>
            {showAnswer ? <p className="quiz-text">{phrase.question}</p> : <p className="quiz-text">How do you say '{phrase.answer}'?</p>}
        </div>
    );
}
