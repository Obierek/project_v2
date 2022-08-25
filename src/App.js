import React, {useEffect, useState} from 'react';
import ChangeDifficulty from "./ChangeDifficulty";

const api = "http://localhost:4000/questions_easy"

export default function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [questionsForLevel, setQuestionsForLevel] = useState([]);
    const [level, setLevel] = useState("easy")

    useEffect(() => {
        setQuestionsForLevel(questions.filter(item => {
            return item.level === level
        }))
    }, [level, questions]);


    useEffect( () => {
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

    // useEffect(async () => {
    //
    //     await fetch(api)
    //         .then((res) => {
    //             if (res.ok) {
    //                 return res.json();
    //             }
    //
    //         })
    //         .then(data => {
    //             setQuestions(data);
    //         })
    //         .catch((err) => console.log(err));
    //
    //
    // }, []);

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
        if (nextQuestion < questionsForLevel.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }

    };
    console.log(questions);

    return (
        <>
            <ChangeDifficulty changeLevelAction={setLevel} currentLevel={level}/>
            <div className='app'>
                <h1>Quiz</h1>
                {showScore ?
                    <div className='score'>
                        Odpowiedziałeś poprawnie na {score} z {questionsForLevel.length} pytań!
                    </div>
                    :
                    <>
                        <div className='question'>
                            <div className='question__count'>
                                <span>Pytanie {currentQuestion + 1} z {questionsForLevel.length}</span>
                            </div>
                            <div
                                className='question__text'>{questionsForLevel[currentQuestion]?.questionText ?? "Question cannot be loaded"}</div>
                        </div>
                        {questionsForLevel[currentQuestion]?.answerOptions && <div className='answer'>
                            {questionsForLevel[currentQuestion].answerOptions.map((answerOption) => (
                                <button
                                    onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>}
                    </>
                }
            </div>
        </>

    );
};


//     return (
//             <div className='app'>
//                 <h1>Quiz</h1>
//                 {showScore ? (
//                     <div className='score'>
//                         Odpowiedziałeś poprawnie na {score} z {questions.length} pytań!
//                     </div>
//                 ) : (
//                     <>
//                         <div className='question'>
//                             <div className='question__count'>
//                                 <span>Pytanie {currentQuestion + 1} z {questions.length}</span>
//                             </div>
//                             <div className='question__text'>{questions[currentQuestion].questionText}</div>
//                         </div>
//                         <div className='answer'>
//                             {questions[currentQuestion].answerOptions.map((answerOption) => (
//                                 <button
//                                     onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
//                             ))}
//                         </div>
//                     </>
//                 )}
//             </div>
//     );
// }
