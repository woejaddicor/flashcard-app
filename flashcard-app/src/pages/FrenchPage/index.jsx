import React, { useState, useEffect } from "react";
import { FlashcardNavigator, Flashcard } from "../../components";

export default function FrenchPage() {
    const [phrases, setPhrases] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    async function fetchData() {
        const response = await fetch("/phrases.json");
        const data = await response.json();
        setPhrases(data.french);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function goToNextPhrase() {
        setCurrentIndex((currentIndex + 1) % phrases.length);
    }

    function goToPreviousPhrase() {
        setCurrentIndex((currentIndex - 1 + phrases.length) % phrases.length);
    }

    return (
        <div>
            <h1>French Page</h1>
            {phrases.length > 0 && (
                <Flashcard phrase={phrases[currentIndex]} />
            )}
            <FlashcardNavigator
                currentIndex={currentIndex}
                phrases={phrases}
                onPreviousClick={goToPreviousPhrase}
                onNextClick={goToNextPhrase}
            />
        </div>
    );
}
