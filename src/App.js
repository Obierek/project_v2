import React, {useEffect, useState} from 'react';
import ChangeDifficulty from "./ChangeDifficulty";
import Timer from "./Timer";



const api = "http://localhost:4000/questions"

export default function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [questionsForLevel, setQuestionsForLevel] = useState([]);
    const [level, setLevel] = useState("")



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
    // console.log(questions);

    const resetQuiz = () => {
        setShowScore(false)
        setCurrentQuestion(0)
        setScore(0)
        setLevel("")
    }


    return (
        <>
            {/*<Timer/>*/}

            <div className='app'>

                <h1>Quiz</h1>

                {showScore ?
                    <div className='score'>
                        Odpowiedziałeś poprawnie na {score} z {questionsForLevel.length} pytań!
                        <button onClick={resetQuiz}>Zacznij od nowa</button>
                    </div>
                    :

                    <>
                        <div className='question'>

                            {level ?
                                <>
                                    <div className='question__count'>
                                        <span>Pytanie: {currentQuestion + 1} z {questionsForLevel.length}</span>
                                    </div>

                                    <div
                                        className='question__text'>{questionsForLevel[currentQuestion]?.questionText ?? "Trwa ładowanie pytań"}
                                    </div>
                                </> :
                                <div>Wybierz poziom trudności !</div>

                            }
                        </div>


                        {questionsForLevel[currentQuestion]?.answerOptions &&
                            <div className='answer'>
                                {questionsForLevel[currentQuestion].answerOptions.map((answerOption) => (
                                    <button
                                        onClick={() => handleClickAnswer(answerOption.isCorrect)}>{answerOption.answerText}
                                    </button>
                                ))}
                            </div>
                        }
                    </>
                }
            </div>



            <ChangeDifficulty
                changeLevelAction={setLevel}
                currentLevel={level}
                questionsForLevel={questionsForLevel}
                currentQuestion={currentQuestion}
                showScore={showScore}/>
        </>



    );
};