import React, { useState } from "react";

export default function Score({ score, totalQuestions, flaggedQuestions }) {
    const [clickedQuestions, setClickedQuestions] = useState([]);

    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    function handleQuestionClick(index) {
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
    }

    return (
        <div>
            <h2>Score: {percentage}%</h2>
            <h3>Flagged Questions:</h3>
            {flaggedQuestions.map((item, index) => (
                <div key={index} onClick={() => handleQuestionClick(index)}>
                    <p>{clickedQuestions.includes(index) ? item.answer : item.question}</p>
                </div>
            ))}
        </div>
    );
}
