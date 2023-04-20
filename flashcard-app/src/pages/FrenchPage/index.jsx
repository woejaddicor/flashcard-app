import React, { useState, useEffect } from "react";
import { FlashcardNavigator, Flashcard, Score } from "../../components";
import LoginPage from "../LoginPage";
import './french.css';

const totalQuestions = 15;

export default function FrenchPage({ token, setToken }) {
    const [question, setQuestion] = useState([]);
    const [index, setIndex] = useState(1);
    const [quizFinished, setQuizFinished] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [clickedIndices, setClickedIndices] = useState([]);

    if (!token) {
        return <LoginPage token={token} setToken={setToken} />
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://crammer-backend.onrender.com/french/${index}`);
            const data = await response.json();
            setQuestion(data.question);
        }
        fetchData();
    }, [index]);


    function handlePreviousClick() {
        setIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : prevIndex));
    }

    function handleNextClick() {
        setIndex((prevIndex) => (prevIndex < totalQuestions ? prevIndex + 1 : prevIndex));
    }

    function handleFinishClick() {
        setQuizFinished(true);
    }

    function handleWrongClick() {
        const questionText = question.map((phrase) => phrase.question).join(" ");
        const answerText = question.map((phrase) => phrase.answer).join(" ");
        setWrongAnswers((prevWrongAnswers) => [
            ...prevWrongAnswers,
            { question: questionText, answer: answerText },
        ]);
        setClickedIndices((prevClickedIndices) => [...prevClickedIndices, index]);
    }

    if (quizFinished) {
        return (
            <Score
                score={totalQuestions - wrongAnswers.length}
                totalQuestions={totalQuestions}
                flaggedQuestions={wrongAnswers}
            />
        );
    }

    return (
        <div>
            <h1> Translate the word</h1>
            <FlashcardNavigator
                currentIndex={index}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
                totalQuestions={totalQuestions}
                isLastQuestion={index === totalQuestions}
            >
                {question.map((phrase) => (
                    <Flashcard key={phrase.id} phrase={phrase} />
                ))}
                <button className="wrong-btn" onClick={handleWrongClick} disabled={clickedIndices.includes(index)}>Wrong</button>

                {index === totalQuestions && (
                    <button className="finish-btn" onClick={handleFinishClick}>
                        Finish
                    </button>
                )}
            </FlashcardNavigator>


        </div>
    );
}
