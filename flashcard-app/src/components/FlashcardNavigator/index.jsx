export default function FlashcardNavigator({ currentIndex, onPreviousClick, onNextClick, onFinishClick, disableNext, totalQuestions, children, }) {
    return (
        <div className="flashcard-navigation">
            <button className="navigation-btn prev" onClick={onPreviousClick} disabled={currentIndex === 1}>Previous</button>
            <button className="navigation-btn nxt" onClick={onNextClick} disabled={disableNext}>Next</button>
            {currentIndex === totalQuestions && (<button onClick={onFinishClick}>Finish</button>)}
            {children}
        </div>
    );
}
