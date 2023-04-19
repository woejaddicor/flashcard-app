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
        <div key={index} onClick={() => handleQuestionClick(index)}>
            <p>{clickedQuestions.includes(index) ? item.answer : item.question}</p>
        </div>
    );

    return (
        <div>
            <h2>Score: {percentage}%</h2>
            <h3>Flagged Questions:</h3>
            {flaggedQuestions.map(renderQuestion)}
        </div>
    );
}
