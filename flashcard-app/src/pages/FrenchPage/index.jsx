import React, { useState, useEffect } from "react";
import { FlashcardNavigator, Flashcard, Score } from "../../components";
import LoginPage from "../LoginPage";

const totalQuestions = 4;

export default function FrenchPage({ token, setToken }) {

    const [question, setQuestion] = useState([]);
    const [index, setIndex] = useState(1);
    const [quizFinished, setQuizFinished] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [clickedIndices, setClickedIndices] = useState([]);

    // if (!token) {
    //     return <LoginPage token={token} setToken={setToken} />
    // }

    async function fetchData() {
        const response = await fetch(
            `https://crammer-backend.onrender.com/french/${index}`
        );
        const data = await response.json();
        setQuestion(data.question);
    }

    function handlePreviousClick() {
        if (index > 1) {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (index < totalQuestions) {
            setIndex(index + 1);
        }
    }

    function handleFinishClick() {
        setQuizFinished(true);
    }

    function handleWrongClick() {
        setWrongAnswers((prevWrongAnswers) => [
            ...prevWrongAnswers,
            { question: question.map((phrase) => phrase.question).join(" "), answer: question.map((phrase) => phrase.answer).join(" ") }
        ]);
        setClickedIndices((prevClickedIndices) => [...prevClickedIndices, index]);
    }

    useEffect(() => {
        fetchData();
    }, [index]);

    if (quizFinished) {
        return <Score score={totalQuestions - wrongAnswers.length} totalQuestions={totalQuestions} flaggedQuestions={wrongAnswers} />;
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
            >
                {question.map((phrase) => (
                    <Flashcard key={phrase.id} phrase={phrase} />
                ))}
                <button
                    onClick={handleWrongClick}
                    disabled={clickedIndices.includes(index)}
                >
                    Wrong
                </button>
            </FlashcardNavigator>
        </div>
    );
}
