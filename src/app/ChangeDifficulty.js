import React from 'react';

function ChangeDifficulty({ changeLevelAction, currentLevel, startTime, time }) {

    const handleClickDifficulty = (value) => {
        changeLevelAction(value)
    };

    return (
        <>
            {!currentLevel &&
                <div className="app__difficulty">
                    <button className={currentLevel === "easy" ? "active" : "app__difficulty-btn"}
                        onClick={() => {
                            startTime()
                            handleClickDifficulty("easy")
                        }}
                        value="easy">Pytania proste
                    </button>
                    <button className={currentLevel === "medium" ? "active" : "app__difficulty-btn"}
                        onClick={() => {
                            startTime()
                            handleClickDifficulty("medium")
                        }} value="medium">Pytania średnie
                    </button>
                    <button className={currentLevel === "hard" ? "active" : "app__difficulty-btn"}
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