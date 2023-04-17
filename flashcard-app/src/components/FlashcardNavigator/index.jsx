import React from "react";

export default function FlashcardNavigator({ currentIndex, phrases, onPreviousClick, onNextClick }) {
  function goToNextPhrase() {
    const nextIndex = (currentIndex + 1) % phrases.length;
    onNextClick(nextIndex);
  }

  function goToPreviousPhrase() {
    const previousIndex = (currentIndex - 1 + phrases.length) % phrases.length;
    onPreviousClick(previousIndex);
  }

  return (
    <div>
      <button onClick={goToPreviousPhrase}>Previous Phrase</button>
      <button onClick={goToNextPhrase}>Next Phrase</button>
    </div>
  );
}
