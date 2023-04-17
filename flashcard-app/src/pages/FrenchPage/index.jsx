import React, { useState, useEffect } from "react";
import { Flashcard, FlashcardNavigator } from "../../components";

export default function FrenchPage() {
  const [phrases, setPhrases] = useState([]);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translationRevealed, setTranslationRevealed] = useState(false);

  async function fetchData() {
    const response = await fetch("/phrases.json");
    const data = await response.json();
    setPhrases(data.french);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (phrases.length > 0) {
      const phrase = phrases[currentIndex];
      setCurrentPhrase(phrase.phrase);
      setTranslationRevealed(false);
    }
  }, [currentIndex, phrases]);



  function goToNextPhrase(nextIndex) {
    setCurrentIndex(nextIndex);
  }

  function goToPreviousPhrase(previousIndex) {
    setCurrentIndex(previousIndex);
  }

  return (
    <div>
      <h1>French Page</h1>
      <Flashcard phrase={phrases[currentIndex]} />
      <FlashcardNavigator
        currentIndex={currentIndex}
        phrases={phrases}
        onPreviousClick={goToPreviousPhrase}
        onNextClick={goToNextPhrase}
      />
    </div>
  );
}
