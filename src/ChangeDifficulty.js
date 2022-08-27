import React from 'react';
import {useEffect, useState} from "react";

function ChangeDifficulty({changeLevelAction, currentLevel, questionsForLevel, currentQuestion, showScore}) {

    const handleClickDifficulty = (value) => {

        changeLevelAction(value)
    }


    const [time, setTime] = useState(0);
    const [timeoutId, setTimeoutId] = useState(0);

    useEffect(()=>{

           if(showScore) {
                  clearTimeout(timeoutId);
        }

    },[showScore])


    console.log("showScore: " + showScore);
// console.log("currentQuestion" + currentQuestion);
//     console.log("questionsForLevel.length" +  questionsForLevel.length)


    const resetTime = () => {
        setTime(0);
         };

    const startTime = () => {
       const id = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
           setTimeoutId(id);
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