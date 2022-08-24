import React, {useEffect, useState} from 'react';

const api = "http://localhost:3000/questions"

export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(null)

    const getQuestions = () => {

        fetch(api)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Oops...");
            })
            .then(setQuestions)
            .catch((err) => console.log(err));
    };
    console.log(questions);

    useEffect(getQuestions, []);


    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    };
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    Odpowiedziałeś poprawnie na {score} z {questions.length} pytań!
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button
                                onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
