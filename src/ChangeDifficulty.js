import React from 'react';
import {useEffect, useState} from "react";

function ChangeDifficulty({changeLevelAction, currentLevel, questionsForLevel, currentQuestion, showScore}) {

    const handleClickDifficulty = (value) => {

        changeLevelAction(value)
    }


    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const timeoutId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [isRunning]);


    useEffect(()=>{
        const stopTime = showScore;
           if(true === stopTime) {
            setIsRunning(false);
        }

    },[time])


    console.log("showScore: " + showScore);
// console.log("currentQuestion" + currentQuestion);
//     console.log("questionsForLevel.length" +  questionsForLevel.length)


    const resetTime = () => {
        setTime(0);
         };

    const startTime = () => {
        setIsRunning(true);
    };

    // console.log(time)
    // console.log(isRunning);

    return (
        <>
            <div>
                <button className={currentLevel === "easy" ? "active" : "default"}
                        onClick={() => {
                            startTime()
                            handleClickDifficulty("easy")
                        }}
                        value="easy">Pytania proste
                </button>
                <button className={currentLevel === "medium" ? "active" : "default"}
                        onClick={() => {
                            startTime()
                            handleClickDifficulty("medium")
                        }} value="medium">Pytania średnie
                </button>
                <button className={currentLevel === "hard" ? "active" : "default"}
                        onClick={() => {
                            startTime()
                            handleClickDifficulty("hard")
                        }} value="hard">Pytania trudne
                </button>
            </div>
            <div>
                <h2>Time: {time}s</h2>
            </div>
        </>

    );
}

export default ChangeDifficulty;