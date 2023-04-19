import React from "react";

export default function FlashcardNavigator({
    currentIndex,
    onPreviousClick,
    onNextClick,
    onFinishClick,
    disableNext,
    totalQuestions,
    children,
}) {
    const isLastQuestion = currentIndex === totalQuestions;

    const renderFinishButton = () =>
        isLastQuestion && <button onClick={onFinishClick}>Finish</button>;

    return (
        <div>
            <button onClick={onPreviousClick} disabled={currentIndex === 1}>
                Previous
            </button>
            <button onClick={onNextClick} disabled={disableNext}>
                Next
            </button>
            {renderFinishButton()}
            {children}
        </div>
    );
}
