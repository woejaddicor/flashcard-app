import React from "react";

export default function FlashcardNavigator({ currentIndex, onPreviousClick, onNextClick, children, isLastQuestion,
}) {
    return (
        <div className="flashcard-navigation">
            <button className="navigation-btn prev" onClick={onPreviousClick} disabled={currentIndex === 1}> Previous </button>

            <button className="navigation-btn nxt" onClick={onNextClick} disabled={isLastQuestion}
            data-testid="flashnav-next-button"> Next </button>
            {children}
        </div>
    );
}
