import React from 'react';
import {useEffect, useState} from "react";

function ChangeDifficulty({changeLevelAction, currentLevel, questionsForLevel, currentQuestion}) {

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
           if(currentQuestion === questionsForLevel.length) {
            setIsRunning(false);
        }

    },[time])



console.log("currentQuestion" + currentQuestion);
    console.log("questionsForLevel.length" +  questionsForLevel.length)


    const reset = () => {
        setTime(0);
        setIsRunning(false);
    };
    const start = () => {
        setIsRunning(true);
    };

    // console.log(time)
    // console.log(isRunning);

    return (
        <div>
            <button className={currentLevel === "easy" ? "active" : "default"}
                    onClick={() => {
                        start()
                        handleClickDifficulty("easy")
                    }}
                    value="easy">Pytania proste
            </button>
            <button className={currentLevel === "medium" ? "active" : "default"}
                    onClick={() => {
                        start()
                        handleClickDifficulty("medium")
                    }} value="medium">Pytania średnie
            </button>
            <button className={currentLevel === "hard" ? "active" : "default"}
                    onClick={() => {
                        start()
                        handleClickDifficulty("hard")
                    }} value="hard">Pytania trudne
            </button>
        </div>
    );
}

export default ChangeDifficulty;