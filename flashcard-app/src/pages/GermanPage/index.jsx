import React, { useState, useEffect } from "react";
import { FlashcardNavigator, Flashcard, Score } from "../../components";
import LoginPage from "../LoginPage";
import '../../assets/flashcardStyles.css';
import Button from 'react-bootstrap/button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function GermanPage({ testing = false, token, setToken }) {
    const [question, setQuestion] = useState([]);
    const [index, setIndex] = useState(1);
    const [quizFinished, setQuizFinished] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [clickedIndices, setClickedIndices] = useState([]);
    const [totalQuestions, setTotalQuestions] = useState();

    if (!token && testing == false) {
        return <LoginPage token={token} setToken={setToken} />
    }

    const popover = (
        <Popover id="popover-basic" >
            <Popover.Header as="h3">How to play:</Popover.Header>
            <Popover.Body>
                To play the game <strong style={{ color: "#ECA400" }}>hover over the blue card with the English text</strong>. When you think you know the correct translation, click the card to flip it over and see. <strong style={{ color: "#ECA400" }}>Click either the 'right' or 'wrong' button depending on the outcome</strong> and your score will total up at the end.
            </Popover.Body>
        </Popover>
    );

    const Instructions = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button className="instructions-button" variant="success">Instructions</Button>
        </OverlayTrigger>
    );

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://crammer-backend.onrender.com/german/${index}`);
            const data = await response.json();

            const response2 = await fetch(`https://crammer-backend.onrender.com/german`);
            const maxQuestion = await response2.json();

            setTotalQuestions(maxQuestion.questions.length);
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
            <Instructions />
            <div className="flashcard-app">
                <h1 className="french-page-title">Translate the word</h1>
                {question.map((phrase) => (
                    <Flashcard key={phrase.id} phrase={phrase} />
                ))}

                <button className="wrong-btn" onClick={handleWrongClick} disabled={clickedIndices.includes(index)}>Review flashcard</button>
                <div className="question-count">
                    Word {index} of {totalQuestions}



                </div>

                {index === totalQuestions && (
                    <button className="finish-btn" onClick={handleFinishClick}>
                        Finish
                    </button>
                )}

                <FlashcardNavigator
                    currentIndex={index}
                    onPreviousClick={handlePreviousClick}
                    onNextClick={handleNextClick}
                    totalQuestions={totalQuestions}
                    isLastQuestion={index === totalQuestions}
                >
                </FlashcardNavigator>

            </div>
        </div>
    );

}
