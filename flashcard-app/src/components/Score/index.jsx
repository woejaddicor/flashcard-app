import React from "react";

export default function Score({ score, totalQuestions, flaggedQuestions }) {
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    return (
        <div>
            <h2>Score: {percentage}%</h2>
            <h3>Flagged Questions:</h3>
            {flaggedQuestions.map((item, index) => (
                <div key={index}>
                    <p>Question: {item.question} Answer: {item.answer}</p>

                </div>
            ))}
        </div>
    );
}
