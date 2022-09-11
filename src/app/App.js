import React, {useEffect, useState} from 'react';
import ChangeDifficulty from "./ChangeDifficulty";

// const api = "http://localhost:3000/questions"

const api = "https://obierek.github.io/jsonapi/db.json"

export default function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [questionsForLevel, setQuestionsForLevel] = useState([]);
    const [level, setLevel] = useState("")
    const [time, setTime] = useState(0);
    const [timeoutId, setTimeoutId] = useState(0);

    useEffect(() => {
        const getData = async () => {
            await fetch(api)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }

                })
                .then(setQuestions)
                .catch((err) => console.log(err));
        }
        getData();
    }, []);

    useEffect(() => {
        setQuestionsForLevel(questions.filter(item => {
            return item.level === level
        }))
    }, [level, questions]);

    useEffect(() => {
        if (showScore) {
            clearTimeout(timeoutId);
        }
    }, [showScore]);

    const handleClickAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionsForLevel.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    };

    const startTime = () => {
        const id = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        setTimeoutId(id);
    };

    const resetQuiz = () => {
        setShowScore(false)
        setCurrentQuestion(0)
        setScore(0)
        setLevel("")
        setTime(0)
    };

    return (
        <>
            <div className="container">
                <div className='app'>

                    <h1 className="app__title">Quiz</h1>

                    {showScore ?
                        <div className='app__score'>
                            Odpowiedziałeś poprawnie na {score} z {questionsForLevel.length} pytań!
                            <button className="app__score-reset-btn" onClick={resetQuiz}>Zacznij od nowa</button>
                        </div>
                        :

                        <>
                            <div className='app__question'>

                                {level ?
                                    <>
                                        <div className='question__count'>
                                            <span>Pytanie: {currentQuestion + 1} z {questionsForLevel.length}</span>
                                        </div>

                                        <div
                                            className='app__question__text'>{questionsForLevel[currentQuestion]?.questionText ?? "Trwa ładowanie pytań"}
                                        </div>
                                    </> :
                                    <div>Wybierz poziom trudności !</div>

                                }
                            </div>

                            {questionsForLevel[currentQuestion]?.answerOptions &&
                                <div className='app__answer'>
                                    {questionsForLevel[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <button
                                            className="answer__btn"
                                            key={index}
                                            onClick={() => handleClickAnswer(answerOption.isCorrect)}>{answerOption.answerText}
                                        </button>
                                    ))}
                                </div>
                            }
                        </>
                    }

                    <ChangeDifficulty
                        changeLevelAction={setLevel}
                        currentLevel={level}
                        showScore={showScore}
                        startTime={startTime}
                        time={time}
                    />

                </div>


            </div>
        </>
    );
};