import React, { useState } from "react";

export default function Flashcard({ phrase }) {
  const [translationRevealed, setTranslationRevealed] = useState(false);

  function revealTranslation() {
    setTranslationRevealed(!translationRevealed);
  }

  return (
    <div>
      <p onClick={revealTranslation}>
        {translationRevealed ? phrase.translation : phrase.phrase}
      </p>
    </div>
  );
}
