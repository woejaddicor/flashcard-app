import React, { useState, useEffect } from "react";

export default function FrenchPage() {
  const [phrases, setPhrases] = useState([]);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

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
    }
  }, [currentIndex, phrases]);

  function goToNextPhrase() {
    const nextIndex = (currentIndex + 1) % phrases.length;
    setCurrentIndex(nextIndex);
  }

  function goToPreviousPhrase() {
    const previousIndex = (currentIndex - 1 + phrases.length) % phrases.length;
    setCurrentIndex(previousIndex);
  }

  function revealTranslation() {
    const phrase = phrases[currentIndex];
    setCurrentPhrase(phrase.translation);
  }

  return (
    <div>
      <h1>French Page</h1>
      <p onClick={revealTranslation}>{currentPhrase}</p>
      <button onClick={goToPreviousPhrase}>Previous Phrase</button>
      <button onClick={goToNextPhrase}>Next Phrase</button>
    </div>
  );
}
