import React from "react";

export default function Score({ score, totalQuestions, flaggedQuestions }) {
    const percentage = ((score / totalQuestions) * 100).toFixed(2);

    return (
        <div>
            <h2> You Scored: {percentage}%</h2>
        </div>
    );
}
