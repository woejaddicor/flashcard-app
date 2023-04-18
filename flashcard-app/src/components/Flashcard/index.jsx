import React, { useState } from "react";

export default function Flashcard({ phrase }) {
    const [isAnswerShown, setIsAnswerShown] = useState(false);

    const handleCardClick = () => setIsAnswerShown(!isAnswerShown);

    return (
        <div onClick={handleCardClick}>
            <p>{isAnswerShown ? phrase.answer : phrase.question}</p>
        </div>
    );
}
