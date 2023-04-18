import React, { useState, useEffect } from "react";
import { FlashcardNavigator, Flashcard } from "../../components";

export default function FrenchPage() {
  const [phrases, setPhrases] = useState([]);
  const [index, setIndex] = useState(1);

  async function fetchData() {
    const response = await fetch(
      `https://crammer-backend.onrender.com/french/${index}`
    );
    const data = await response.json();
    setPhrases(data.question);
  }

  function handlePreviousClick() {
    if (index > 1) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (index < 15) {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, [index]);

  return (
    <div>
      <h1>French Page</h1>
      <FlashcardNavigator
        currentIndex={index}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
        disableNext={index === 15} // disable next button if index is 15
      >
        {phrases.map((phrase) => (
          <Flashcard key={phrase.id} phrase={phrase} />
        ))}
      </FlashcardNavigator>
    </div>
  );
}
