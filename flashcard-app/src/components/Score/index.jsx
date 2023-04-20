import React, { useState, useCallback } from "react";

export default function Score({ score, totalQuestions, flaggedQuestions }) {
    const [clickedQuestions, setClickedQuestions] = useState([]);
    const percentage = (parseInt((score / totalQuestions) * 100));
    
    const handleQuestionClick = useCallback(
        (index) => {
            if (clickedQuestions.includes(index)) {
                setClickedQuestions((prevClickedQuestions) =>
                    prevClickedQuestions.filter((clickedIndex) => clickedIndex !== index)
                );
            } else {
                setClickedQuestions((prevClickedQuestions) => [
                    ...prevClickedQuestions,
                    index,
                ]);
            }
        },
        [clickedQuestions]
    );

    const renderQuestion = (item, index) => (
        <div key={index} className="flagged-question" onClick={() => handleQuestionClick(index)}>
            <div className={`card ${clickedQuestions.includes(index) ? "flipped" : ""}`}>
                <div className="card-face card-face-front">
                    <p>{item.question}</p>
                </div>
                <div className="card-face card-face-back">
                    <p>{item.answer}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <h2>Score: {percentage}%</h2>
            <h3>Flagged Questions:</h3>
            <div className="flagged-questions-container">
                {flaggedQuestions.map(renderQuestion)}
            </div>
        </div>
    );

}
