import React from 'react';

function ChangeDifficulty({changeLevelAction, currentLevel, startTime, time}) {

    const handleClickDifficulty = (value) => {
        changeLevelAction(value)
    };

    return (
        <>
            {!currentLevel &&
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
            }
            <div className="app__time">
                <h2 className="time">Czas: {time} sek.</h2>
            </div>
        </>
    );
}

export default ChangeDifficulty;