export default function FlashcardNavigator({ currentIndex, onPreviousClick, onNextClick, onFinishClick, disableNext, totalQuestions, children, }) {
    return (
        <div>
            <button onClick={onPreviousClick} disabled={currentIndex === 1}>Previous</button>
            <button onClick={onNextClick} disabled={disableNext}>Next</button>
            {currentIndex === totalQuestions && (<button onClick={onFinishClick}>Finish</button>)}
            {children}
        </div>
    );
}
