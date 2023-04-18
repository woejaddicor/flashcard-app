import React, { useState } from "react";

export default function Flashcard({ phrase }) {
    const [showAnswer, setShowAnswer] = useState(false);

    function handleCardClick() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div onClick={handleCardClick}>
            {showAnswer ? <p>{phrase.answer}</p> : <p>{phrase.question}</p>}
        </div>
    );
}
