import React from "react";

// export default function FlashcardNavigator({ currentIndex, onPreviousClick, onNextClick, onFinishClick, disableNext, totalQuestions, children, }) {
//     const isLastQuestion = currentIndex === totalQuestions;

export default function FlashcardNavigator({ currentIndex, onPreviousClick, onNextClick, totalQuestions, children, isLastQuestion,
}) {
    return (
        <div className="flashcard-navigation">
            <button className="navigation-btn prev" onClick={onPreviousClick} disabled={currentIndex === 1}> Previous </button>
            <button className="navigation-btn nxt" onClick={onNextClick} disabled={isLastQuestion}> Next </button>
            {children}
        </div>
    );
}
