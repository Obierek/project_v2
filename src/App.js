import React, {useEffect, useState} from 'react';
import ChangeDifficulty from "./ChangeDifficulty";

const api = "http://localhost:3000/questions_medium"

export default function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState("");

    useEffect(() => {
        fetch(api)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Oops...");
            })
            .then(data => {
                setQuestions(data);
            })
            .catch((err) => console.log(err));


    }, []);

    // const getQuestions = () => {
    //
    //     fetch(api)
    //         .then((res) => {
    //             if (res.ok) {
    //                 return res.json();
    //             }
    //             throw new Error("Oops...");
    //         })
    //         .then(setQuestions)
    //         .catch((err) => console.log(err));
    // };
    //
    // useEffect(getQuestions, []);

    const handleClick = (isCorrect) => {
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
                <h1>Quiz</h1>
                {showScore ? (
                    <div className='score'>
                        Odpowiedziałeś poprawnie na {score} z {questions.length} pytań!
                    </div>
                ) : (
                    <>
                        <div className='question'>
                            <div className='question__count'>
                                <span>Pytanie {currentQuestion + 1} z {questions.length}</span>
                            </div>
                            <div className='question__text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button
                                    onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
    );
}
