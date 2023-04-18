import React, { useState, useEffect } from "react";
import { FlashcardNavigator, Flashcard } from "../../components";

export default function FrenchPage() {
    const [phrases, setPhrases] = useState([]);
    const [index, setIndex] = useState(1);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const totalQuestions = 15;

    async function fetchData() {
        const response = await fetch(`https://crammer-backend.onrender.com/french/${index}`);
        const data = await response.json();
        setPhrases(data.question);
        setIsLastQuestion(index === totalQuestions);
    }

    function handlePreviousClick() {
        if (index > 1) {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (index < totalQuestions) {
            setIndex(index + 1);
            setIsLastQuestion(index + 1 === totalQuestions);
        }
    }

    function handleFinishClick() {
        console.log("Quiz finished");
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
                onFinishClick={handleFinishClick}
                totalQuestions={totalQuestions}
                disableNext={isLastQuestion}
            />
            {phrases.map((phrase) => (
                <Flashcard key={phrase.id} phrase={phrase} />
            ))}
        </div>
    );
}


