import React from "react";

export default function FlashcardNavigator({ currentIndex, phrases, onPreviousClick, onNextClick }) {
    
  function goToNextPhrase() {
    onNextClick((currentIndex + 1) % phrases.length);
  }

  function goToPreviousPhrase() {
    onPreviousClick((currentIndex - 1 + phrases.length) % phrases.length);
  }

  return (
    <div>
      <button onClick={goToPreviousPhrase}>Previous Phrase</button>
      <button onClick={goToNextPhrase}>Next Phrase</button>
    </div>
  );
}
