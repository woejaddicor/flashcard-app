import React, { useEffect, useState } from "react";
import LoginPage from "../LoginPage";
import './flashcardview.css'

export default function FlashcardView({ token, setToken }) {
  const [flashcards, setFlashcards] = useState([]);
  const [showCard, setShowCard] = useState({});

  if (!token) {
    return <LoginPage token={token} setToken={setToken} />;
  }

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await fetch(
          "https://crammer-backend.onrender.com/custom"
        );
        const flashcardData = await response.json();
        setFlashcards(flashcardData.questions);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFlashcards();
  }, []);
  
  function deleteFlashcard(id, type) {
    fetch(`https://crammer-backend.onrender.com/${type}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => {
      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error('Delete request failed');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
 
  function handleCardClick(id) {
    setShowCard({ ...showCard, [id]: !showCard[id] });
  }
  
  
  return ( 
    <div className="flashcard-grid">
      {flashcards && Array.isArray(flashcards) &&
        flashcards.map((flashcard) => (
          <div className="flashcard" key={flashcard.id}>
              {showCard[flashcard.id] ? <p className="flashcard-answer card-text">{flashcard.answer}</p> : <p className="flashcard-question card-text">{flashcard.word_phrase}</p>}
              <button className="view-flashcard-btn" onClick={() => handleCardClick(flashcard.id)}>Reveal Answer</button>
              <button className="view-flashcard-btn" onClick={() => deleteFlashcard(flashcard.id, flashcard.type)}>Delete</button>
          </div>
        ))}
    </div>
  );
}
