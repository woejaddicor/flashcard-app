import React, { useState, useEffect } from "react";
import { FlashcardNavigator, Flashcard, Score } from "../../components";

export default function FrenchPage() {
    const [phrases, setPhrases] = useState([]);
    const [index, setIndex] = useState(1);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [clickedIndices, setClickedIndices] = useState([]);
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
        setQuizFinished(true);
    }

    function handleWrongClick() {
        setWrongAnswers((prevWrongAnswers) => [...prevWrongAnswers, index]);
        setClickedIndices((prevClickedIndices) => [...prevClickedIndices, index]);
    }

    useEffect(() => {
        fetchData();
    }, [index]);

    if (quizFinished) {
        return <Score wrongAnswers={wrongAnswers} />;
    }

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
            >
                {phrases.map((phrase) => (
                    <Flashcard key={phrase.id} phrase={phrase} />
                ))}
                <button onClick={handleWrongClick} disabled={clickedIndices.includes(index)}>
                    Wrong
                </button>
            </FlashcardNavigator>

        </div>
    );
}
